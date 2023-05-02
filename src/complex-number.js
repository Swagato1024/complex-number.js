const complexNumber = function() {
  let real;
  let imaginary;

  const assign = function(_real, _imaginary) {
    real = _real;
    imaginary = _imaginary;
  }

  const getReal = function() {
    return real;
  }

  const getImaginary = function() {
    return imaginary;
  }

  const add = function(augend) {
    const realSum = real + augend.getReal();
    const imaginarySum = imaginary + augend.getImaginary();

    const sum = complexNumber();
    sum.assign(realSum, imaginarySum);

    return sum;
  }

  const multiply = function() {};

  return {assign, getReal, getImaginary, add, multiply};
}


exports.complexNumber = complexNumber;

