basic.forever(function () {
    if (DFRobotMaqueenPlus.ultraSonic(PIN.P13, PIN.P14) > 30) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 70)
    } else {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, 70)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 70)
        basic.pause(1500)
    }
})
