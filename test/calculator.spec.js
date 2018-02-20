import { expect } from "chai";
import { Calculator } from "../src/calculator";

describe.only("Calculator", () => {
  it("creates an instance", () => {
    new Calculator();
  });

  it("has a default result", () => {
    const calculator = new Calculator()
    expect(calculator.result()).to.eql(0)
  });
});
