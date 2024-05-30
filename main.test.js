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


describe("calculateGradesAndAverage", () => {
    it("should return an object with grades and average", () => {
        const studentScores = {
            math: 67,
            english: 60,
            swahili: 71,
            physics: 80,
            chemistry: 55,
            religiousEducation: 81,
            computer: 69
        };
        const result =((studentScores.math + studentScores.english + studentScores.swahili + studentScores.physics + studentScores.chemistry + studentScores.religiousEducation + studentScores.computer) / 7)
        expect(calculateGradesAndAverage(studentScores)).toEqual({
            output: {
               
                math: "B", 
                physics: "B", 
                chemistry: "A", 
                religiousEducation: "A",
                Swahili: "C", 
                computer: "A", 
                English: "B"
            },
            averageMarks: 69
        });
    });
});

