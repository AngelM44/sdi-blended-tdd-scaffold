const Teacher = require('../src').Teacher;

describe('Teacher', () => {
  describe('insantiates a new Teacher', () => {

    const teacher = new Teacher('Jane Doe', 'Biology', 'UCLA', 6);

    test('takes the following arguments: name, subjectTaught, universityAttended, yearsAsTeacher', () => {
      const teacher = new Teacher('Jane Doe', 'Biology', 'UCLA', 6);
      expect(teacher.name).toBe('Jane Doe');
      expect(teacher.subjectTaught).toBe('Biology');
      expect(teacher.universityAttended).toBe('UCLA');
      expect(teacher.yearsAsTeacher).toBe(6);
    })
    test('update teacher name', () => {
      teacher.updateName('Laura Pulscher')
      expect(teacher.name).toBe('Laura Pulscher')
    })

    test('change subject taught', () => {
      teacher.changeSubjectTaught('Math')
      expect(teacher.subjectTaught).toBe('Math')
    })

    test('update years taught', () => {
      teacher.updateYearsAsTeacher()
      expect(teacher.yearsAsTeacher).toBe(7)
    })


  })
  // describe('', () => {

  // })
})