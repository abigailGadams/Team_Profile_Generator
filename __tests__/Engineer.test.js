const Engineer = require("../library/Engineer");
describe("Testing engineer constructor", () => {
  test("Test Github property", () => {
    const github = new Engineer(
      "Abby",
      1,
      "abigailgadams0@gmail.com",
      "abigailGadams"
    );
    expect(github.name).toBe("abigailGadams");
  });
});
