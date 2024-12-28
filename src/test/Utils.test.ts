import { toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {
  test("Should return uppercase", () => {
    const result = toUpperCase("daniyal");
    expect(result).toBe("DANIYAL");
  });
});
