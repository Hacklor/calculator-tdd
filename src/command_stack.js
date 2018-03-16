export class CommandStack {

  constructor(calculator) {
    this._calculator = calculator
    this._commands = []
  }

  execute() {
    this._commands.forEach( command => command() )

    return this._calculator.result
  }

  undo() {
    this._commands.pop()
  }

  add(number) {
    this._commands.push( () => this._calculator.add(number) )
    return this
  }

  subtract(number) {
    this._commands.push( () => this._calculator.subtract(number) )
    return this
  }

  multiply(number) {
    this._commands.push( () => this._calculator.multiply(number) )
    return this
  }

  square() {
    this._commands.push( () => this._calculator.square() )
    return this
  }
}
