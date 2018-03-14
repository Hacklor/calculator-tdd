export class CommandStack {

  constructor(calculator) {
    this.calculator = calculator
  }

  execute() {
    return this.calculator.result
  }

  add(number) {
    this.calculator.add(number)
  }
}
