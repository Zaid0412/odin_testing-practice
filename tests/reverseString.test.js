import { reverseString } from "../code/reverseString";

it("Reverse string", () => {
  expect(capitalize("reverse")).toBe("esrever");
});

it("Input is null", () => {
  expect(reverseString(null)).toBe("");
});

it("Input is undefined", () => {
  expect(reverseString()).toBe("");
});
