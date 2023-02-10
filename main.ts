basic.forever(function () {
    if (DFRobotMaqueenPlus.ultraSonic(PIN.P13, PIN.P14) > 30) {
        basic.showIcon(IconNames.Happy)
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 70)
    } else {
        basic.showIcon(IconNames.Asleep)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, 70)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 70)
        basic.pause(1500)
    }
})
