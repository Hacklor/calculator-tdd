import { expect } from 'chai';
import { CommandStack } from '../src/command_stack';

describe("CommandStack", () => {
  it("creates an instance", () => {
    new CommandStack();
  });

  it("executes and gets the default result from the calculator", () => {
    const stack = new CommandStack();

    expect(stack.execute()).to.eql(0)
  });
});
