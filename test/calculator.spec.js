import { expect } from "chai";
import { add } from "../src/calculator";

describe("Calculator", () => {
  it("adds two numbers", () => {
    expect(add(1, 2)).to.eql(3)
    expect(add(2, 3)).to.eql(5)
  });
});
