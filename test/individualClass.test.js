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
    


  })
  // describe('', () => {

  // })
})