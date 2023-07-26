class Teacher {
  constructor(name, subjectTaught, universityAttended, yearsAsTeacher) {
      this.name = name,
      this.subjectTaught = subjectTaught,
      this.universityAttended = universityAttended,
      this.yearsAsTeacher = yearsAsTeacher
  }
  updateName (name) {
    this.name = name;
  }

  changeSubjectTaught (subject){
    this.subjectTaught = subject;
  }

  updateYearsAsTeacher (){
    this.yearsAsTeacher += 1;
  }

}

module.exports = Teacher;