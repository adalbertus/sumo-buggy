let sensorLeft = 0
let sensorRight = 0
let start = false

pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)

function readSensors() {
    sensorRight = pins.digitalReadPin(DigitalPin.P15)
    sensorLeft = pins.digitalReadPin(DigitalPin.P16)
}

function driveForward(ms = 0) {
    pins.servoWritePin(AnalogPin.P1, 0)
    pins.servoWritePin(AnalogPin.P2, 180)
    if(ms > 0) {
        pause(ms)
        driveStop()
    }
}

function driveBackward(ms = 500) {
    pins.servoWritePin(AnalogPin.P1, 180)
    pins.servoWritePin(AnalogPin.P2, 0)
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

function turnIfNeeded() {
    driveStop()
    pause(50)
    readSensors()
    if (sensorRight == 0 && sensorLeft == 0) {
        driveBackward()
        turnOver()
    }
}

function turnOver(ms = 500) {
    pins.servoWritePin(AnalogPin.P1, 180)
    pins.servoWritePin(AnalogPin.P2, 180)
    if(ms > 0) {
        pause(ms)
        driveStop()
    }
}

function goSumo() {
    readSensors()

    if (sensorRight == 1 && sensorLeft == 1) { // move forward
    	driveForward() 
    } else if (sensorRight == 1 && sensorLeft == 0) { // turn left
    	//driveBackward()
        //driveRight()
    } else if (sensorRight == 0 && sensorLeft == 1) { // turn right
    	//driveBackward()
        //driveLeft()
    } else if (sensorRight == 0 && sensorLeft == 0) { // stop
        turnIfNeeded()
    }
}

input.onButtonPressed(Button.A, function () {
    pause(100)
    //driveForward()
    start = true   
})

input.onButtonPressed(Button.B, function () {
    start = false
    driveStop()
})


basic.forever(function () {
    if(start){
        goSumo()
    }
})
