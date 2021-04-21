const Intern = require("../library/Intern");
describe("Testing Intern constructor", () => {
  test("Test name property", () => {
    const Abby = new Employee("Abby", 1, "abigailgadams0@gmail.com");
    expect(Abby.name).toBe("Abby");
  });
});
