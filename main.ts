let Dist = 0
basic.forever(function () {
    while (Dist > 50) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 78)
        Dist = DFRobotMaqueenPlus.ultraSonic(PIN.P13, PIN.P14)
    }
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
})
