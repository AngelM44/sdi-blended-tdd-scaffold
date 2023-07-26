const { IndividualClass } = require('../src');

const Grade = require('../src').Grade;

describe('Grade', () => {
  describe('insantiates a new Grade', () => {
    const mathClass = new IndividualClass('Math', 10, `Mrs. White`, ['John Doe', `Jane Doe`])
    const historyClass = new IndividualClass('History', 10, `Mr. Bob`, ['Jim Doe', `Jess Doe`])
    const grade = new Grade([mathClass, historyClass], 1995);

    test('takes the following arguments: individualClasses, graduationYear', () => {
      expect(grade.individualClasses).toEqual(['Math', 10, `Mrs. White`, ['John Doe', `Jane Doe`]]);
      expect(grade.graduationYear).toBe(1995);
      
    })
    test('get student count', () => {
        expect(grade.getStudentCount(10)).toEqual(2)
    })
})
})
