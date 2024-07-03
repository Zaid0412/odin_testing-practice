import { caesarCipher } from "../code/caesarCipher";

it("Caesar Cipher", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

it("Caesar Cipher (testing with uppercase letters)", () => {
  expect(caesarCipher("heLLo", 3)).toBe("khOOr");
});

it("Caesar Cipher (testing with punctuation)", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
