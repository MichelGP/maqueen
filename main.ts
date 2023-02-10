let Dist = 0
let Count = 0
basic.forever(function () {
    Dist = DFRobotMaqueenPlus.ultraSonic(PIN.P13, PIN.P14)
    if (Dist > 50) {
        while (Count < 4) {
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 78)
            Count = parseInt(DFRobotMaqueenPlus.readeDistance(Motors1.M1))
        }
    } else {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 27)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 90)
    }
})
