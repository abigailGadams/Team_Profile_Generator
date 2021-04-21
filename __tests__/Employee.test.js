const Employee = require("../library/Employee");
describe("Testing employeee constructor", () => {
  test("Test name property", () => {
    const Abby = new Employee("Abby", 1, "abigailgadams0@gmail.com");
    expect(Abby.name).toBe("Abby");
  });
});
