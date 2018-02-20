import { expect } from "chai";
import { Calculator } from "../src/calculator";

describe("Calculator", () => {
  it("has a default result", () => {
    const calculator = new Calculator()
    expect(calculator.result()).to.eql(0)
  });

  it("can add a number", () => {
    const calculator = new Calculator()
    calculator.add(2)
    expect(calculator.result()).to.eql(2)
  });
});
