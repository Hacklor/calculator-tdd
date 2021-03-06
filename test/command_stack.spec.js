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

  context("Addition", () => {
    it("delays adding a number", () => {
      const spy = sinon.spy(calculator, 'add')

      stack.add(4)
      expect(spy).not.to.be.called

      expect(stack.execute()).to.eql(4)
      expect(spy).to.be.calledWith(4)
    });

    it("can chain the add command", () => {
      stack.add(1).add(2).add(3)

      expect(stack.execute()).to.eql(6)
    });
  });

  context("Subtraction", () => {
    it("delays subtracting a number", () => {
      const spy = sinon.spy(calculator, 'subtract');

      stack.subtract(4)
      expect(spy).not.to.be.called

      expect(stack.execute()).to.eql(-4)
      expect(spy).to.be.calledWith(4)
    });

    it("can chain the command", () => {
      stack.subtract(1).subtract(2).subtract(3)

      expect(stack.execute()).to.eql(-6)
    });
  });

  context("Multiplication", () => {
    it("delays multiplying a number", () => {
      const spy = sinon.spy(calculator, 'multiply');
      stack.add(1)

      stack.multiply(3)
      expect(spy).not.to.be.called

      expect(stack.execute()).to.eql(3)
      expect(spy).to.be.calledWith(3)
    });

    it("can chain the command", () => {
      stack.add(1).multiply(2).multiply(3)

      expect(stack.execute()).to.eq(6)
    });
  });

  context("Multiplication", () => {
    it("delays squaring the result", () => {
      const spy = sinon.spy(calculator, 'square');
      stack.add(2)

      stack.square()
      expect(spy).not.to.be.called

      expect(stack.execute()).to.eql(4)
      expect(spy).to.be.called
    });

    it("can chain the command", () => {
      stack.add(3).square().add(1)

      expect(stack.execute()).to.eq(10)
    });
  });

  context("undo", () => {
    it("does nothing when commands list is empty", () => {
      stack.undo()

      expect(stack.execute()).to.eql(0)
    });

    it("removes only the last command", () => {
      stack.add(3)
      stack.subtract(2)
      stack.add(4)
      stack.undo()

      expect(stack.execute()).to.eql(1)
    });
  });
});
