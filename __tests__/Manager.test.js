const Employee = require("../library/Employee");
const Manager = require("../library/Manager");

describe("Testing manager constructor", () => {
  test("Test name property", () => {
    const officeNumber = new Manager(1010);
    expect(officeNumber.name).toBe(1010);
  });
});
