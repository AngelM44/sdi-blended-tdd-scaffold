const IndividualClass = require('../src').IndividualClass;

describe('IndividualClass', () => {
  describe('insantiates a new IndividualClass', () => {

    const individualClass = new IndividualClass('Math', 10, `Mrs. White`, ['John Doe', `Jane Doe`]);

    test('takes the following arguments:subject, gradeLevel, teacher, student', () => {
      expect(individualClass.subject).toBe('Math');
      expect(individualClass.gradeLevel).toBe(10);
      expect(individualClass.teacher).toBe('Mrs. White');
      expect(individualClass.student).toEqual(['John Doe', `Jane Doe`]);
    })
    test('update subject', () => {
      individualClass.updateSubject('Science')
      expect(individualClass.subject).toBe('Science')
    })
    test('change teacher', () => {
      individualClass.changeTeacher('Mr. Fernando')
      expect(individualClass.teacher).toBe('Mr. Fernando')
    })
    test('add student', () => {
      individualClass.addStudent('Stephanie')
      expect(individualClass.student).toEqual(['John Doe', `Jane Doe`, 'Stephanie'])
    })
    test('remove student', () => {
      individualClass.removeStudent('John Doe')
      expect(individualClass.student).toEqual([`Jane Doe`, 'Stephanie'])
    })

  })
  // describe('', () => {

  // })
})