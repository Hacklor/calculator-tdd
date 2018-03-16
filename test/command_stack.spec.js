import { expect } from 'chai';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import { CommandStack } from '../src/command_stack';
import { Calculator } from '../src/calculator';

describe("CommandStack", () => {
  let calculator, stack;

  before(() => {
    chai.use(sinonChai)
  });

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

  it("delays subtracting a number", () => {
    const spy = sinon.spy(calculator, 'subtract');

    stack.subtract(4)
    expect(spy).not.to.be.called

    expect(stack.execute()).to.eql(-4)
  });

  context("undo", () => {
    it("does nothing when commands list is empty", () => {
      stack.undo()

      expect(stack.execute()).to.eql(0)
    });
  });
});
