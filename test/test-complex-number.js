const {strictEqual, deepStrictEqual} = require('assert');
const {describe, it} = require('node:test');
const {complexNumber} = require('../src/complex-number.js');

describe('complex number', function() {

  describe('getReal', function() {
    it('should return real part of a complex nuber', function() {
      const c = complexNumber(2, 3);
      const actual = c.getReal();
      const expected = 2;

      strictEqual(actual, expected);
    });
  });

  describe('getImaginary', function() {
    it('should return imaginary part of a complex nuber', function() {
      const c = complexNumber(2, 3);
      const actual = c.getImaginary();
      const expected = 3;

      strictEqual(actual, expected);
    });
  });

  describe('add', function() {
    it('sum of two complex number is the sum of corresponding real and imaginary part', function() {
      const c1 = complexNumber(2, 5);
      const c2 = complexNumber(4, 3);
      const sum = c1.add(c2);
      const [real, imaginary] = [sum.getReal(), sum.getImaginary()];
      strictEqual(real, 6);
      strictEqual(imaginary, 8);
    });
  });

  describe('multiply', function() {
    it('should give multiplication of two complex number', function() {
      const c1 = complexNumber(1, 1);
      const c2 = complexNumber(1, 1);

      const product = c1.multiply(c2);
      const [real, imaginary] = [product.getReal(), product.getImaginary()];

      deepStrictEqual([real, imaginary], [0, 2]);
    });
  });

  describe('format', function() {
    it('should format an imaginary number', function() {
      const c = complexNumber(4, -6);
      const actual = c.format();
      const expected = '4 - 6i';

      strictEqual(actual, expected);
    });
  });

});
