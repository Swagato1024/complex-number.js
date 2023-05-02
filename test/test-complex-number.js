const {deepStrictEqual} = require('assert');
const {describe, it} = require('node:test');
const {complexNumber} = require('../src/complex-number.js');

describe('complex number arithmetic', function() {
  const complex = complexNumber();

  it('should return real part of a complex nuber', function() {
    const actual = complex.getRealPart({real: 2, imaginary: 3});
    const expected = 2;
    deepStrictEqual(actual, expected);
  })

  let complexNumber1 = {real: 2, imaginary: 6};
  let complexNumber2 = {real: 4, imaginary: 5};

  it('sum of two complex number is the sum of corresponding real and imaginary part', function() {
    deepStrictEqual(complex.add({real: 2, imaginary: 6}, {real: 4, imaginary: 5}),
      {real: 6, imaginary: 11});
  });


  complexNumber1 = {real: 2, imaginary: 3};
  complexNumber2 = {real: 1, imaginary: 2};

  it('multiplication two complex number is the sum of corresponding real and imaginary part', function() {
    deepStrictEqual(complex.multiply(complexNumber1, complexNumber2),
      {real: -4, imaginary: 7});
  });
});
