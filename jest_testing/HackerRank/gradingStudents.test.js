const { test, expect } = require("@jest/globals");
const gradingStudents = require("./gradingStudents");

test("If grade is 1 or 2 points away from a 5 or 10, round grade up. unless less than 38", () => {
    expect(gradingStudents([37, 44, 78, 65, 84, 82])).toEqual([37, 45, 80, 65, 85, 82])
    expect(gradingStudents([37, 42, 78, 55, 84, 71])).not.toEqual([])
    expect(gradingStudents([37, 28, 96])).not.toBeNull()
    expect(gradingStudents([73, 78, 66, 69])).not.toBeUndefined()
})