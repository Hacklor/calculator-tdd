import { expect } from 'chai';
import { CommandStack } from '../src/command_stack';
import { Calculator } from '../src/calculator';
import sinon from 'sinon';

describe("CommandStack", () => {
  let calculator, stack;

  beforeEach(() => {
    calculator = new Calculator()
    stack = new CommandStack(calculator)
  });

  it("executes and gets the default result from the calculator", () => {
    expect(stack.execute()).to.eql(0)
  });

  it("delays adding a number", () => {
    const spy = sinon.spy(calculator, 'add')

    stack.add(4)
    expect(spy).not.to.be.called

    expect(stack.execute()).to.eql(4)
  });
});
