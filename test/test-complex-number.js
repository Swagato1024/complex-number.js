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
  })

  it('sum of two complex number is the sum of corresponding real and imaginary part', function() {
    c1.assign(2, 5);
    c2.assign(4, 3);
    const sum = c1.add(c2);
    const [real, imaginary] = [sum.getReal(), sum.getImaginary()];
    deepStrictEqual([real, imaginary], [6, 8]);
  });

  /*
  it('multiplication two complex number is the sum of corresponding real and imaginary part', function() {
    deepStrictEqual(complex.multiply({real: 2, imaginary: 3}, {real: 1, imaginary: 2}),
      {real: -4, imaginary: 7});
  });
   */
});
