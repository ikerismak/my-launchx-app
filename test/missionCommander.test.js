const MissionCommander = require('./../app/missionCommander');




describe("this is a unit test for mission commander class", () => {
    
    test("case 1",() => {
        const myMisssionCommander = new MissionCommander("Woopa")
        expect(myMisssionCommander.name).toBe("Woopa");
    });
})