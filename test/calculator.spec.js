import { expect } from "chai";
import { add } from "../src/calculator";

describe("Calculator", () => {
  it("adds 1 and 2 together", () => {
    expect(add(1, 2)).to.eql(3)
  });

  it("adds 2 and 3 together", () => {
    expect(add(2, 3)).to.eql(5)
  });
});
