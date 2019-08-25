module.exports = class Streak { // zmiana nazwy na te z nazwy pliku, składnia exportu w node
  constructor() {
    this.start = null;
    this.last = null;
    this.current = null;
  }

  getStart() {
    return this.start;
  }

  getLast() {
    return this.last;
  }

  setStartDate(date) {
    this.start = date;
  }

  setEndDate(date) {
    this.last = date;
  }
}
