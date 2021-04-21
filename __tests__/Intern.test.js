const Employee = require("../library/Employee");
const Intern = require("../library/Intern");

describe("Testing Intern constructor", () => {
  test("Test school property", () => {
    const school = new Intern("University of Arizona");
    expect(school.name).toBe("University of Arizona");
  });
});
