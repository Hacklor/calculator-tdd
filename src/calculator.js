import { add, subtract } from "./operations";

export class Calculator {
  constructor() {
    this._result = 0;
  }

  get result() {
    return this._result;
  }

  add(number) {
    this._result = add(this._result, number);
    return this;
  }

  subtract(number) {
    this._result = subtract(this._result, number);
    return this;
  }
}
