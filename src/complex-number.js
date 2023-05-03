const complexNumber = function(real, imaginary) {
  const getReal = function() {
    return real;
  }

  const getImaginary = function() {
    return imaginary;
  }

  const add = function(augend) {
    const realSum = real + augend.getReal();
    const imaginarySum = imaginary + augend.getImaginary();

    const sum = complexNumber(realSum, imaginarySum);

    return sum;
  }

  const multiply = function(multiplier) {
    const realPart = real * multiplier.getReal() - imaginary * multiplier.getImaginary();
    const imaginaryPart = real * multiplier.getImaginary() + imaginary * multiplier.getReal();

    const product = complexNumber(realPart, imaginaryPart);

    return product;
  }

  return {getReal, getImaginary, add, multiply};
}


exports.complexNumber = complexNumber;

