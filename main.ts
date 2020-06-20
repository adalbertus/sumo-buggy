function driveForward(ms = 0) {
    pins.servoWritePin(AnalogPin.P1, 0)
    pins.servoWritePin(AnalogPin.P2, 180)
    if(ms > 0) {
        pause(ms)
        driveStop()
    }
}

function driveBackward(ms = 0) {
    pins.servoWritePin(AnalogPin.P1, 0)
    pins.servoWritePin(AnalogPin.P2, 180)
    if(ms > 0) {
        pause(ms)
        driveStop()
    }
}

function driveStop() {
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
}

function driveRight(ms = 100) {
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 100)
    if(ms > 0) {
        pause(ms)
        driveStop()
    }
}

function driveLeft(ms = 100) {
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 80)
    if(ms > 0) {
        pause(ms)
        driveStop()
    }
}


basic.forever(function () {
	
})
