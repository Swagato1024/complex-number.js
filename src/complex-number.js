const complexNumber = function(real, imaginary) {
  const getReal = function() {
    return real;
  }

  const getImaginary = function() {
    return imaginary;
  }

  const add = function(number) {
    const realSum = real + number.getReal();
    const imaginarySum = imaginary + number.getImaginary();

    return complexNumber(realSum, imaginarySum);
  }

  const multiply = function(multiplier) {
    const realPart = real * multiplier.getReal() - imaginary * multiplier.getImaginary();
    const imaginaryPart = real * multiplier.getImaginary() + imaginary * multiplier.getReal();

    return complexNumber(realPart, imaginaryPart);
  }

  const format = function() {
    if(imaginary === 0)  return `${real}`;
    if(real === 0) return `${imaginary}i`;

    const sign = imaginary > 0 ? '+' : '-';
    const imaginaryAbs = Math.abs(imaginary);

    return `${real} ${sign} ${imaginaryAbs}i`;
  }

  return {getReal, getImaginary, add, multiply, format};
}


exports.complexNumber = complexNumber;

