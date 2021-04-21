// const { expect } = require("@jest/globals");
const Employee = require("../library/Employee");
const Engineer = require("../library/Engineer");

describe("Testing engineer constructor", () => {
  test("Test Github property", () => {
    const github = new Engineer("abigailGadams");
    expect(github.name).toBe("abigailGadams");
  });
});
