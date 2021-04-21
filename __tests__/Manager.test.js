const Manager = require("../library/Manager");
describe("Testing manager constructor", () => {
  test("Test name property", () => {
    const Abby = new Employee("Abby", 1, "abigailgadams0@gmail.com");
    expect(Abby.name).toBe("Abby");
  });
});
