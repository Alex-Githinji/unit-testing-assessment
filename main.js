 function sciences(grade)  {
    if (grade >= 70 ) {
      return "A";
    }
    else if (grade >= 60) {
        return "B";
    }
    else if (grade >= 50) {
        return "C";
    }
    else if (grade >= 40) {
        return "D";
    }
    else {
        return "sup";
    }

}

const Math = "83"
const physics = "67"
const chemistry = "53"
// console.log('Math:', sciences(Math));
// console.log('Physics:', sciences(physics));
// console.log('Chemistry:', sciences(chemistry));


function religiousEducation(grade) {
    if (grade >= 80){
        return "A";
    }
    else if (grade >= 70) {
        return "B";
    
    }
    else if (grade >=60) {
        return "C";
    }
    else if (grade >= 50) {
        return "D";
    }
     else {
        return "sup";
     }
}
 
const grade = 55;
// console.log('Religious Education:', religiousEducation(grade));


function languages(grade) {
    if (grade >= 70) {
        return "A";
    }
    else if (grade >= 65) {
        return "B";  
    }
    else if (grade >= 55) {
        return "C";
    }
    else if (grade >= 45) {
        return "pass";
    }
    else { 
        return "sup";
    }
}

const English = 67;
const Swahili = 65;
const computer = 79;
// console.log('English:', languages(English));
// console.log('swahili:', languages(Swahili));
// console.log('computer:', languages(computer));



function calculateGradesAndAverage(studentScores) {

    const output = { name: studentScores.name };

    output.math = sciences(studentScores.Math)
    output.physics = sciences(studentScores.physics)
    output.chemistry = sciences(studentScores.chemistry)
    output.religiousEducation = religiousEducation(studentScores.religiousEducation)
    output.Swahili = languages(studentScores.Swahili)
    output.computer = languages(studentScores.computer)
    output.English = languages(studentScores.English)
    const totalMarks = (studentScores.Math + studentScores.physics + studentScores.chemistry + studentScores.religiousEducation + studentScores.Swahili + studentScores.computer+ studentScores.English);
    const averageMarks = (totalMarks/7)

    return {
        output,
        averageMarks
    };
}

const studentScores = { name: "Dennis Doe", Math: 67, physics: 60, chemistry: 71, religiousEducation: 80, Swahili: 55, computer: 81, English: 69 };

const result = calculateGradesAndAverage(studentScores);

console.log(result.output);  // Output grades for each subject
console.log("averageMarks", result.averageMarks); 


module.exports = {sciences,religiousEducation,languages,calculateGradesAndAverage};

