// Generate c spaces
module.exports = (c) => {
  let string = '';
  for (let x = 1; x < c; x += 1) {
    string += ' ';
  }
  return string;
};
