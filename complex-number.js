class Real {
  #value

  constructor(value) {
    this.#value = value;
  }

  add(other) {
    const sum = this.#value + other.#value;
    return new Real(sum);
  }

  getValue() {
    return this.#value;
  }

  toString() {
    return `${this.#value}`;
  }
}

class Imaginary {
  #value

  constructor(value) {
    this.#value = value;
  }

  add(other) {
    const sum = this.#value + other.#value;
    return new Imaginary(sum);
  }

  getValue() {
    return this.#value;
  }

  toString() {
    return `${this.#value}i`;
  }
}


class Complex {
  #real
  #imaginary

  constructor(real, imaginary) {
    this.#real = real;
    this.#imaginary = imaginary;
  }

  add(other) {
    const real = this.#real.add(other.#real);
    const imaginary = this.#imaginary.add(other.#imaginary);

    return new Complex(real, imaginary);
  }

  toString() {
    return `${this.#real.toString()} + ${this.#imaginary.toString()}`;
  }
}


const r = new Real(2);
const i = new Imaginary(3);

const c = new Complex(r, i);
const ans = c.add(c);

console.log(ans.toString());
