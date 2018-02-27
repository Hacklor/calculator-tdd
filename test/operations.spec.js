import { expect } from "chai";
import { add, subtract, times, square } from "../src/operations";

describe("Operations", () => {
  it("adds two integers", () => {
    expect(add(1, 2)).to.eql(3)
    expect(add(2, 3)).to.eql(5)
    expect(add(3, 2)).to.eql(5)
  });

  it("subtracts two integers", () => {
    expect(subtract(3, 1)).to.eql(2)
    expect(subtract(5, 2)).to.eql(3)
    expect(subtract(7, 3)).to.eql(4)
    expect(subtract(2, 3)).to.eql(-1)
    expect(subtract(-5, -2)).to.eql(-3)
  });

  it("multiplies two integers", () => {
    expect(times(1, 2)).to.eql(2)
    expect(times(3, 2)).to.eql(6)
    expect(times(2, 3)).to.eql(6)
    expect(times(-2, 5)).to.eql(-10)
    expect(times(5, -2)).to.eql(-10)
    expect(times(-2, -4)).to.eql(8)
  });

  it("squares the given integer", () => {
    expect(square(2)).to.eql(4)
    expect(square(4)).to.eql(16)
    expect(square(0)).to.eql(0)
    expect(square(-2)).to.eql(4)
  });

  describe("Regression tests", () => {
    it("combines different operations", () =>
      expect(times(subtract(square(add(2, 3)), 5), 5)).to.eql(100)
    );
  });
});
