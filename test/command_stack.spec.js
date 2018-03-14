import { expect } from 'chai';
import { CommandStack } from '../src/command_stack';
import { Calculator } from '../src/calculator';

describe("CommandStack", () => {
  it("executes and gets the default result from the calculator", () => {
    const stack = new CommandStack();

    expect(stack.execute()).to.eql(0)
  });

  it("delays adding a number", () => {
    const calculator = new Calculator();
    const stack = new CommandStack(calculator);

    stack.add(4);

    expect(stack.execute()).to.eql(4)
  });
});
