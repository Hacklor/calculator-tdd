import { expect } from "chai";
import { add } from "../src/calculator";

describe("Calculator", () => {
  it("runs the test and shows the result", () => {
    expect(true).to.eql(true)
  });

  it("calls the add function", () => {
    add();
  });
});
