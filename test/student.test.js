const Student = require('../src').Student;

describe('Student', () => {
  describe('insantiates a new Student', () => {

    const student = new Student('Jane Doe', 15, 10, [90, 80], 2026, [`band`, `baseball`]);

    test('takes the following arguments: name, age, gradeLevel, testScores, graduationYear, activities', () => {
      
      expect(student.name).toBe('Jane Doe');
      expect(student.age).toBe(15);
      expect(student.gradeLevel).toBe(10);
      expect(student.testScores).toEqual([90, 80]);
      expect(student.graduationYear).toBe(2026);
      expect(student.activities).toEqual([`band`, `baseball`])
    })

    test('update student name', () => {
        student.updateStudentName('Laura Pulscher')
        expect(student.name).toBe('Laura Pulscher')
      })

    test('increment studdnt age', () => {
        student.incrementAge()
        expect(student.age).toBe(16)
      })

    test('increment studdnt grade level', () => {
        student.incrementGradeLevel()
        expect(student.gradeLevel).toBe(11)
      })

    test('add test score', () => {
        student.addTestScore(80)
        expect(student.testScores).toEqual([90, 80, 80])
      })

      test('calculate average test score', () => {
        expect(student.calculateTestAverages()).toEqual(83)
      })

      test('change graduation year', () => {
        student.changeGraduationYear(1995)
        expect(student.graduationYear).toEqual(1995)
      })

      test('add activity', () => {
        student.addActivity(`swimming`)
        expect(student.activities).toEqual([`band`, `baseball`, `swimming`])
      })

      test('remove given activity', () => {
        student.removeActivity(`swimming`)
        expect(student.activities).toEqual([`band`, `baseball`])
      })









  })
  // describe('', () => {

  // })
})