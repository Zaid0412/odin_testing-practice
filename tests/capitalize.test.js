it("Capitalize first letter of string", () => {
  expect(capitalize("jest")).toBe("Jest");
});

it("Input is null", () => {
  expect(capitalize(null)).toBe("");
});

it("Input is undefined", () => {
  expect(capitalize()).toBe("");
});
