import { add, subtract, multiply, square } from "./operations";

export class Calculator {
  constructor() {
    this._result = 0
  }

  get result() {
    return this._result
  }

  add(number) {
    this._result = add(this._result, number)
  }

  subtract(number) {
    this._result = subtract(this._result, number)
  }

  multiply(number) {
    this._result = multiply(this._result, number)
  }

  square() {
    this._result = square(this._result)
  }
}
