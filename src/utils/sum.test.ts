import sum from "./sum";

describe("sum", () => {
  it("should return sum of two input", () => {
    const result = sum(1, 2);

    expect(result).toBe(3);
  });
});
