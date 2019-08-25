const DaysBar = require('./DaysBar');
const DayDate = require('./DayDate');

describe('DaysBar', () => {
  describe ('for some checked and unchecked days', () => {
    test('returns propers bar', () => {
      const startDayDate = new DayDate('2019-08-10');
      const endDayDate = new DayDate('2019-08-13');
      const daysBar = new DaysBar(startDayDate, endDayDate);

      daysBar.addDayDate(new DayDate('2019-08-10', true));
      daysBar.addDayDate(new DayDate('2019-08-11', false));
      daysBar.addDayDate(new DayDate('2019-08-13', true));

      const greenSpace = '\x1B[42m \x1B[0m';
      const redSpace = '\x1B[41m \x1B[0m';
      const yellowSpace = '\x1B[43m \x1B[0m';

      expect(daysBar.generateBar()).toEqual(
        `${greenSpace}${redSpace}${yellowSpace}${greenSpace}`,
      );
    });
  });
});
