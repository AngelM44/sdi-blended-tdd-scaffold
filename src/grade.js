class Grade {
    constructor(individualClasses, graduationYear) {
        this.individualClasses = individualClasses,
        this.graduationYear = graduationYear

    }
    getStudentCount (grade) {
      let students = 0
      for (let room in this.individualClasses){
        if (grade == this.individualClasses[room].gradeLevel){
            students += this.individualClasses[room].student.length
        }
      }
      return students;
    }
    calculateGradeAverage(grade){
      let counter = 0
      let allscores = 0
      for (let room in this.individualClasses){
        for(let student of this.individualClasses[room]){
          counter += student.testScores.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
          allscores += student.testScores.length
        }
      }
      return math.floor(counter/allscores)
    }
}
    module.exports = Grade;