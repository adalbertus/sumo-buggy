let sensorLeft = 0
let sensorRight = 0

pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)

function driveForward(ms = 0) {
    pins.servoWritePin(AnalogPin.P1, 0)
    pins.servoWritePin(AnalogPin.P2, 180)
    if(ms > 0) {
        pause(ms)
        driveStop()
    }
}

function driveBackward(ms = 100) {
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

function turn180(ms = 100) {
    pins.servoWritePin(AnalogPin.P1, 180)
    pins.servoWritePin(AnalogPin.P2, 180)
    if(ms > 0) {
        pause(ms)
        driveStop()
    }
}

function goSumo() {
    sensorRight = pins.digitalReadPin(DigitalPin.P15)
    sensorLeft = pins.digitalReadPin(DigitalPin.P16)

    if (sensorRight == 1 && sensorLeft == 1) { // move forward
    	driveForward() 
    } else if (sensorRight == 1 && sensorLeft == 0) { // turn left
    	driveBackward() 
    } else if (sensorRight == 0 && sensorLeft == 1) { // turn right
    	driveBackward()    	
    } else { // stop
        driveBackward()
        turn180()        
    }
}

input.onButtonPressed(Button.A, function () {
    turn180()    
})


basic.forever(function () {
	
})
