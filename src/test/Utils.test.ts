import { getStringInfo, toUpperCase } from "../app/Utils";

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

  it("Should return info for valid string", () => {
    const actual = getStringInfo("My-String");

    expect(actual.lowerCase).toBe("my-string");
    expect(actual.extraInfo).toEqual({});

    expect(actual.characters.length).toBe(9);
    expect(actual.characters).toHaveLength(9);

    expect(actual.characters).toEqual([
      "M",
      "y",
      "-",
      "S",
      "t",
      "r",
      "i",
      "n",
      "g",
    ]);
    expect(actual.characters).toContain<string>("M");
    expect.arrayContaining(["S", "t", "r", "i", "n", "g", "M", "y", "-"]);

    expect(actual.extraInfo).not.toBe(undefined);
    expect(actual.extraInfo).not.toBeUndefined();
    expect(actual.extraInfo).toBeTruthy();
  });
});
