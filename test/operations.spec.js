import { expect } from "chai";
import { add } from "../src/operations";

describe("Operations", () => {
  it("adds two integers", () => {
    expect(add(1, 2)).to.eql(3)
    expect(add(2, 3)).to.eql(5)
    expect(add(3, 2)).to.eql(5)
  });

  it("calls the minus function", () =>
    minus()
  );
});
