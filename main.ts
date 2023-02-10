let Dist = 0
let cur_heading = 0
basic.forever(function () {
    Dist = DFRobotMaqueenPlus.ultraSonic(PIN.P13, PIN.P14)
    if (Dist > 30) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 70)
        Dist = DFRobotMaqueenPlus.ultraSonic(PIN.P13, PIN.P14)
    } else {
        cur_heading = input.compassHeading()
        while (false) {
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, 30)
            if (cur_heading - input.compassHeading() > 90 || cur_heading - input.compassHeading() < 90) {
                break;
            }
        }
    }
})
