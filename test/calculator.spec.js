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

    it("can chain adding multiple numbers", () => {
      calculator.add(1).add(3).add(5)
      expect(calculator.result).to.eql(9)
    });
  });

  describe("Subtraction", () => {
    it("can subtract a single number", () => {
      calculator.subtract(3)
      expect(calculator.result).to.eql(-3)
    });

    it("can chain subtracting multiple numbers", () => {
      calculator.subtract(1).subtract(2).subtract(7)
      expect(calculator.result).to.eql(-10)
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

    it("can chain multipying multiple numbers", () => {
      calculator.multiply(3).multiply(5).multiply(2)
      expect(calculator.result).to.eql(30)
    });
  });

  describe("Square", () => {
    it("can square a single number", () => {
      calculator.add(2)

      calculator.square()
      expect(calculator.result).to.eql(4)
    });

    it("can chain squaring multiple numbers", () => {
      calculator.add(3)

      calculator.square().square()
      expect(calculator.result).to.eql(81)
    });
  });
});
