import { expect } from "chai";
import { add } from "../src/calculator";

describe("Calculator", () => {
  it("calls the add function", () => {
    add();
  });

  it("adds 1 and 2 together", () => {
    expect(add(1, 2)).to.eql(3)
  });
});
