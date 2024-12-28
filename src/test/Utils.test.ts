import { toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {
  it("Should return uppercase of valid string", () => {
    // arrange:
    const sut = toUpperCase;
    const expected = "DANIYAL";

    // act:
    const actual = toUpperCase("daniyal");

    // assert:
    expect(actual).toBe(expected);
  });
});