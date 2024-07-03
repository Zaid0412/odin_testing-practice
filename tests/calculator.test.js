import { calculator } from "../code/calculator";

it("Add 4 and 7", () => {
  expect(calculator.add(4, 7)).toBe(11);
});

it("Subtract 3 from 10", () => {
  expect(calculator.subtract(10, 3)).toBe(7);
});

it("Divide 25 by 5", () => {
  expect(calculator.divide(25, 5)).toBe(5);
});

it("Multiply 3 and 4", () => {
  expect(calculator.multiply(3, 4)).toBe(12);
});

it("If Add input is undefined ", () => {
  expect(calculator.add()).toBe(NaN);
});

it("If Subtract input is undefined ", () => {
  expect(calculator.subtract()).toBe(NaN);
});

it("If Divide input is undefined ", () => {
  expect(calculator.divide()).toBe(NaN);
});

it("If Multiply input is undefined ", () => {
  expect(calculator.multiply()).toBe(NaN);
});
