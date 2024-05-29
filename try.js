const {MathChemistryPhysics} = require ("./main")

describe ("MathChemistryPhysics" , () => {
    it("should return A if the grade is greater or equal to 70" , () => {
        expect(MathChemistryPhysics(70)).toEqual("A");
    } )
    it("should return B if the grade is greater or equal to 60 and less than70" , () => {
        expect(MathChemistryPhysics(60)).toEqual("B");
    })
    it("should return c if the grade is greater or equal to 50 and less than60" , () => {
        expect(MathChemistryPhysics(60)).toEqual("C");
    })
    it("should return D if the grade is greater or equal to 40 and less than50" , () => {
        expect(MathChemistryPhysics(60)).toEqual("D");
    })
    it("should return SUP if the grade is less or equal to 39" , () => {
        expect(MathChemistryPhysics(39)).toEqual("sup");
    })

});