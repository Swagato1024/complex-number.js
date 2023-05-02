const complexNumber = function() {
  const getRealPart = function({real, imaginary}) {
    return real;
  }

  const add = function(number1, number2) {
    const {real: a, imaginary: b} = number1;
    const {real: c, imaginary: d} = number2;

    return {real: a + c, imaginary: b + d};
  }

  return {getRealPart, add};
}

exports.complexNumber = complexNumber;

