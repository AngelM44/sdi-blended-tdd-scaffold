class Grade {
    constructor(individualClasses, graduationYear) {
        this.individualClasses = individualClasses,
        this.graduationYear = graduationYear
        
    }
    getStudentCount (grade) {
      let students = 0
      for (let room in grade.individualClasses){
        if (grade == grade.individualClasses[room].grade){
            students = room.students.length
        }
      }
      return students;
    }
}
    module.exports = Grade;