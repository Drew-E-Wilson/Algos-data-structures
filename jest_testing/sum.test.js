const { test, expect } = require("@jest/globals");
const sum = require("./sum");

test("properly adds two numbers", () => {
    expect(sum(2, 1)).toBe(3)
})