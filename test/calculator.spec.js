import { expect } from "chai";
import { Calculator } from "../src/calculator";

describe("Calculator", () => {
  it("has a default result", () => {
    const calculator = new Calculator()
    expect(calculator.result()).to.eql(0)
  });
});
