import sum from "./sum";

describe("sum", () => {
  it.each<number[]>([
    [1, 2, 3],
    [0, 1, 1],
    [-9, 1, -8],
  ])(
    "should return sum of two input from %d + %d = %d",
    (input1, input2, expected) => {
      const result = sum(input1, input2);

      expect(result).toBe(expected);
    }
  );
});
