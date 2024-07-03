import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./script";

it("Capitalize first letter of string", () => {
  expect(capitalize("jest")).toBe("Jest");
});

it("Reverse string", () => {
  expect(reverseString("reverse")).toBe("esrever");
});

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

it("Caesar Cipher", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

it("Caesar Cipher (testing with uppercase letters)", () => {
  expect(caesarCipher("heLLo", 3)).toBe("khOOr");
});

it("Caesar Cipher (testing with punctuation)", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

it("Analyze Array function", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
