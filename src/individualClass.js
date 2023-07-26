class IndividualClass {
    constructor(subject, gradeLevel, teacher, student) {
        this.subject = subject,
        this.gradeLevel = gradeLevel,
        this.teacher = teacher,
        this.student = student
    }
   
    updateSubject (subject) {
        this.subject = subject;
      }
    changeTeacher (teacher) {
        this.teacher = teacher;
    }
    addStudent (student) {
        this.student.push(student)
    }
    removeStudent (student) {
        this.student.splice(this.student.indexOf(student), 1)
    }
  }
  
  module.exports = IndividualClass;