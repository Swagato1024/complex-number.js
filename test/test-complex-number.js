const {deepStrictEqual} = require('assert');
const {describe, it} = require('node:test');
const {complexNumber} = require('../src/complex-number.js');

describe('complex number arithmetic', function() {
  const complex = complexNumber();
  const c1 = complexNumber();
  const c2 = complexNumber();

  it('should return real part of a complex nuber', function() {
    c1.assign(2, 3);
    const actual = c1.getReal();
    const expected = 2;

    deepStrictEqual(actual, expected);
  });

  it('should return imaginary part of a complex nuber', function() {
    c1.assign(2, 3);
    const actual = c1.getImaginary();
    const expected = 3;

    deepStrictEqual(actual, expected);
  })


  it('sum of two complex number is the sum of corresponding real and imaginary part', function() {
    c1.assign(2, 5);
    c2.assign(4, 3);
    const sum = c1.add(c2);
    const [real, imaginary] = [sum.getReal(), sum.getImaginary()];

    deepStrictEqual([real, imaginary], [6, 8]);
  });


  it('should give multiplication of two complex number', function() {
    c1.assign(1, 1);
    c2.assign(1, 1);

    const product = c1.multiply(c2);
    const [real, imaginary] = [product.getReal(), product.getImaginary()];

    deepStrictEqual([real, imaginary], [0, 2]);
  });
});
