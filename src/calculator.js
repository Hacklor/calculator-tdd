import { add } from "./operations";

export class Calculator{
  constructor() {
    this.res = 0;
  }

  result() {
    return this.res;
  }

  add() {
    this.res = add(0, 2)
  }
}
