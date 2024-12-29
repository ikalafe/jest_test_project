import { getStringInfo, StringUtils, toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {
  describe("StringUtils tests", () => {
    let sut: StringUtils;

    beforeEach(() => {
      sut = new StringUtils();
      console.log("Setup");
    });

    afterEach(() => {
      // clearing mocks
      console.log("Teardown");
    });

    it("Should return correct upperCase", () => {
      const actual = sut.toUpperCase("daniyal");
      expect(actual).toBe("DANIYAL");
      console.log("actual test");
    });
  });

  describe.only("StringUtils toLowerCase tests", () => {
    let sut: StringUtils;

    beforeEach(() => {
      sut = new StringUtils();
    });

    afterEach(() => {});

    it("Should return correct lowerCase", () => {
      const actual = sut.toLowerCase("DANIYAL")
      expect(actual).toBe("daniyal");
    });
  });

  it("Should return uppercase of valid string", () => {
    // arrange:
    const sut = toUpperCase;
    const expected = "DANIYAL";

    // act:
    const actual = sut("daniyal");

    // assert:
    expect(actual).toBe(expected);
  });

  describe("ToUpperCase exampls", () => {
    it.each([
      { input: "daniyal", expected: "DANIYAL" },
      { input: "My-String", expected: "MY-STRING" },
      { input: "arta", expected: "ARTA" },
      { input: "asal", expected: "ASAL" },
    ])("$input toUpperCase should be $expected", ({ input, expected }) => {
      const actual = toUpperCase(input);
      expect(actual).toBe(expected);
    });
  });

  describe("getStringInfo for argument My-String should", () => {
    it("return right length", () => {
      const actual = getStringInfo("My-String");
      expect(actual.characters).toHaveLength(9);
    });

    it("retrun right lower case", () => {
      const actual = getStringInfo("My-String");
      expect(actual.lowerCase).toBe("my-string");
    });

    it("return right upper case", () => {
      const actual = getStringInfo("My-String");
      expect(actual.upperCase).toBe("MY-STRING");
    });

    it("return right characters", () => {
      const actual = getStringInfo("My-String");
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
      expect(actual.characters).toEqual(
        expect.arrayContaining(["S", "t", "r", "i", "n", "g", "M", "y", "-"])
      );
    });

    it("return defined extra info", () => {
      const actual = getStringInfo("My-String");
      expect(actual.extraInfo).toBeDefined();
    });

    it("return right extra info", () => {
      const actual = getStringInfo("My-String");
      expect(actual.extraInfo).toEqual({});
    });
  });
});
