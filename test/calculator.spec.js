import { expect } from "chai";
import { Calculator } from "../src/calculator";

describe("Calculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator()
  });

  it("has a default result", () => {
    expect(calculator.result()).to.eql(0)
  });

  it("can add a number", () => {
    calculator.add(2)
    expect(calculator.result()).to.eql(2)
  });

  it("can chain adding multiple numbers", () => {
    calculator.add(1).add(3).add(5);
    expect(calculator.result()).to.eql(9)
  });
});
