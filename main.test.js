const  {sciences,religiousEducation,languages,calculateGradesAndAverage} = require("./main.js");

describe ("sciences" , () => {
    it("should return A if the grade is greater or equal to 70" , () => {
        expect(sciences(70)).toEqual("A");
    } )
    it("should return B if the grade is greater or equal to 60 and less than70" , () => {
        expect(sciences(60)).toEqual("B");
    })
    it("should return c if the grade is greater or equal to 50 and less than60" , () => {
        expect(sciences(50)).toEqual("C");
    })
    it("should return D if the grade is greater or equal to 40 and less than50" , () => {
        expect(sciences(40)).toEqual("D");
    })
    it("should return SUP if the grade is less or equal to 39" , () => {
        expect(sciences(39)).toEqual("sup");
    })

});


describe ("religiousEducation", () => {
    it("should return A if the grade is greater or equal to 80" , () => {
        expect(religiousEducation(80)).toEqual("A");
        } )
        it("should return B if the grade is greater or equal to 70" , () =>{
            expect(religiousEducation(70)).toEqual("B");
        })
        it("should return C if the grade is greater or equal to 60" , () => {
            expect(religiousEducation(60)).toEqual("C");
        })
        it("should return D if the grade is greater or equal to 50" , () => {
                expect(religiousEducation(50)).toEqual("D"); 
        })
        it("should return sup if the grade is less than 49" , () => {
            expect(religiousEducation(40)).toEqual("sup");
        })
        
            
}) 



// const {languages} = require ("./main")

describe ("languages", () => {
    it("should return A if the grade is greater or equal to 75" , () => {
        expect(languages(75)).toEqual("A");
        } )
        it("should return B if the grade is greater or equal to 65" , () =>{
            expect(languages(65)).toEqual("B");
        })
        it("should return C if the grade is greater or equal to 55" , () => {
            expect(languages(55)).toEqual("C");
        })
        it("should return pass if the grade is greater or equal to 45" , () => {
                expect(languages(45)).toEqual("pass"); 
        })
        it("should return sup if the grade is less than 45" , () => {
            expect(languages(40)).toEqual("sup");
        })
        
            
})     

 describe ("calculateGradesAndAverage" , () => {
    it("should return the average and grades for each subject" , () => {
        const result = calculateGradesAndAverage(80, 70, 60, 50, 70, 55, 63
            );
            expect(result).toEqual({
                average: 64,
                grades: {
                    mathematics: "A",
                    science: "B",
                    religiousEducation: "C",
                    languages: "D"
                    }
                    });
        })
 })
    
        