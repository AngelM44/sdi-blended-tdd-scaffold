const { IndividualClass } = require('../src');
const { Student } = require('../src');

const Grade = require('../src').Grade;

describe('Grade', () => {
  describe('insantiates a new Grade', () => {
    const jane = new Student('Jane Doe', 15, 10, [90, 80], 2026, [`band`, `baseball`]);
    const jess = new Student('Jess Doe', 12, 10, [50, 30], 2026, [`band`, `baseball`]);
    const john = new Student('John Doe', 16, 10, [70, 90], 2026, [`band`, `baseball`]);
    const jim = new Student('Jim Doe', 17, 10, [100, 100], 2026, [`band`, `baseball`]);
    const mathClass = new IndividualClass('Math', 10, `Mrs. White`, [john, jim])
    const historyClass = new IndividualClass('History', 10, `Mr. Bob`, [jane, jess])
    const grade = new Grade([mathClass, historyClass], 1995);


    test('takes the following arguments: individualClasses, graduationYear', () => {
      expect(grade.individualClasses).toEqual([mathClass, historyClass]);
      expect(grade.graduationYear).toBe(1995);

    })
    test('get student count', () => {
        expect(grade.getStudentCount(10)).toBe(4)
    })
    test('calculate grade average', () => {
        expect(grade.calculateGradeAverage(10)).toBe(76)
    })
})
})
