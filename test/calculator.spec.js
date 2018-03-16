import { expect } from "chai";
import { Calculator } from "../src/calculator";

describe("Calculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator()
  });

  it("has a default result", () => {
    expect(calculator.result).to.eql(0)
  });

  describe("Addition", () => {
    it("can add a number", () => {
      calculator.add(2)
      expect(calculator.result).to.eql(2)
    });
  });

  describe("Subtraction", () => {
    it("can subtract a single number", () => {
      calculator.subtract(3)
      expect(calculator.result).to.eql(-3)
    });
  });

  describe("Multiplication", () => {
    beforeEach(() => {
      calculator.add(1)
    });

    it("can multiply a single number", () => {
      calculator.multiply(2)
      expect(calculator.result).to.eql(2)
    });
  });

  describe("Square", () => {
    it("can square a single number", () => {
      calculator.add(2)

      calculator.square()
      expect(calculator.result).to.eql(4)
    });
  });

  describe("Regression test", () => {
    it("can combine multiple chained commands", () => {
      calculator.add(7)
      calculator.subtract(2)
      calculator.square()
      calculator.multiply(4)

      expect(calculator.result).to.eql(100)
    });
  });
});
