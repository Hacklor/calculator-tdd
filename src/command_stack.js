export class CommandStack {

  constructor(calculator) {
    this.calculator = calculator
    this.commands = []
  }

  execute() {
    this.commands.forEach( command => command() )

    return this.calculator.result
  }

  undo() {
    this.commands.pop()
  }

  add(number) {
    this.commands.push( () => this.calculator.add(number) )
    return this
  }

  subtract(number) {
    this.commands.push( () => this.calculator.subtract(number) )
    return this
  }

  multiply(number) {
    this.commands.push( () => this.calculator.multiply(number) )
    return this
  }
}
