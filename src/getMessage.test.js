const getMessage = require('./getMessage');

// Test jednostkowy

describe('getMessage', () => {
  describe('for number equal 101', () => {
    it('returns "number is greater than 100', () => { // zamiast it może być alias 'test'
      expect(getMessage(101)).toEqual('number is greater than 100');
    });
  });
  describe('for number equal 99', () => {
    it('returns "number is NOT greater than 100', () => {
      expect(getMessage(99)).toEqual('number is NOT greater than 100');
    });
  });
});

test('getMessage (version 2)', () => { // inny zapis - różnica również w wyświetlaniu testu
  expect(getMessage(101)).toEqual('number is greater than 100');
  expect(getMessage(99)).toEqual('number is NOT greater than 100');
});