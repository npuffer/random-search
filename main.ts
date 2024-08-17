let distance = 0
basic.forever(function () {
    distance = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (distance < 6) {
        basic.showIcon(IconNames.No)
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
        basic.pause(1000)
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, randint(10, 100))
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, randint(10, 100))
        basic.pause(1000)
        maqueen.motorStop(maqueen.Motors.M1)
    } else {
        basic.showIcon(IconNames.Heart)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    }
})
