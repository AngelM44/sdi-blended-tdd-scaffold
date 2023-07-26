const { indexOf } = require("lodash");

class Student {
    constructor(name, age, gradeLevel, testScores, graduationYear, activities) {
        this.name = name,
        this.age = age,
        this.gradeLevel = gradeLevel,
        this.testScores = testScores,
        this.graduationYear = graduationYear,
        this.activities = activities
    }

    updateStudentName (name) {
        this.name = name;
    }

    incrementAge (){
        this.age += 1;
    }

    incrementGradeLevel (){
        this.gradeLevel += 1;
    }

    addTestScore (score){
        this.testScores.push(score);
    }
    
    calculateTestAverages () {


        const sum =this.testScores.reduce((add,current) => add + current, 0)
        const average = sum/this.testScores.length
        const result = Math.floor(average)
        return result;

    }

    changeGraduationYear (year) {
        this.graduationYear = year;
    }

    addActivity (activity){
        this.activities.push(activity);
    }

    removeActivity (activity){
        this.activities.splice(this.activities.indexOf(activity),1);
    }

  }
  
  


  module.exports = Student;