import { expect } from "chai";
import { add, minus, times } from "../src/operations";

describe("Operations", () => {
  it("adds two integers", () => {
    expect(add(1, 2)).to.eql(3)
    expect(add(2, 3)).to.eql(5)
    expect(add(3, 2)).to.eql(5)
    expect(add(-2, 3)).to.eql(1)
    expect(add(2, -3)).to.eql(-1)
    expect(add(-5, -3)).to.eql(-8)
  });

  it("subtracts two integers", () => {
    expect(minus(3, 1)).to.eql(2)
    expect(minus(5, 2)).to.eql(3)
    expect(minus(2, 5)).to.eql(-3)
    expect(minus(2, 3)).to.eql(-1)
    expect(minus(-2, 1)).to.eql(-3)
    expect(minus(1, -2)).to.eql(3)
    expect(minus(-5, -2)).to.eql(-3)
    expect(minus(-2, -5)).to.eql(3)
  });

  it("multiplies two integers", () => {
    expect(times(1, 2)).to.eql(2)
    expect(times(3, 2)).to.eql(6)
    expect(times(2, 3)).to.eql(6)
    expect(times(-2, 5)).to.eql(-10)
    expect(times(5, -2)).to.eql(-10)
    expect(times(-2, -4)).to.eql(8)
  });
});
