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

  const display = function() {
    if(imaginary === 0)  return real;
    if(real === 0) return `${imaginary}i`;

    const sign = imaginary > 0 ? '+' : '-';
    const imaginaryAbs = Math.abs(imaginary);

    return `${real} ${sign} ${imaginaryAbs}i`;
  }

  return {getReal, getImaginary, add, multiply, display};
}


exports.complexNumber = complexNumber;

