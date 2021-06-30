// Problem 1.
// Write a function which takes in a string and returns counts of each character in the string

// UNDERSTANDING THE PROBLEM
// 1. Can I restate the problem in my own words?
"counting how many of each letter there is in the input string, ex. 'abaa' = {a: 3}"
// 2. What are the inputs that go into the problem?
"Are we counting just letters? Are we counting numbers, dollar signs, spaces, etc.? Does upper/lower case matter?"
// 3. What are the outputs that should come from the solution to the problem?
"Do we want to return letters with the number, true, false, object, array"
// 4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
"what happens if someone passes in something that inst a string?"
// 5. How should I label the important peices of data that are a part of the problem?
"function name, the inputs, variable im returning"

// EXPLORE EXAMPLES (ex. that relate to the problem)
// 6. Start with simple examples
// 7. Progress to more complex examples
// 8. Explore examples with empty inputs, edge cases
// 9. Explore examples with invalid inputs (string instead of integer)

// BREAK DOWN THE CODE (PSEUDO CODE)
function charCount(str) {
    // Make object to return at the end
    const result = {};
    // Loop over the string, for each character...
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        // if the character is a number/letter AND key in the object, add 1 to count
        if (/[a-z0-9]/.test(char)) {
            if (result[char] > 0) {
                result[char]++;
                // if the character is a number/letter AND not a key in the object, add it and set value to 1

            } else {
                result[char] = 1;
            };
        };
    }
    // if character is something else (space, period, etc) dont do anything
    // return object at the end
    return result;
}

// SOLVE AND SIMPLIFY

console.log(charCount("Hi there!"))

// LOOK BACK AND REFACTOR
// 10. Can you check the result?
// 11. Can you derive the result differently?
// 12. Can you understand it at a glance?
// 13. Can you use the result or method for some other problem?
// 14. Can you improve the performance of the solution?
// 15. Can you think of other ways to refactor?
// 16. How have other people solved this problem?

function charCounting(string) {
    const result = {};
    for (let character of string) {
        character = character.toLowerCase();
        if (/[a-z0-9]/.test(character)) {
            obj[character] = ++obj[character] || 1;
        };
    }
    return result
}

console.log(charCounting("what up winner!"))



// Problem 2.  
// Write a function which takes two numbers and returns their sum

// UNDERSTANDING THE PROBLEM
// 1. Can I restate the problem in my own words?
"adding two numbers together and returning the total"
// 2. What are the inputs that go into the problem?
"integers?"
"floats? (means it contains a decimal)"
"Maybe a String for a large number?"
// 3. What are the outputs that should come from the solution to the problem?
"int? float? string?"
// 4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
"did they only give one input number? What do you do then? return undefined? null? Can ask interviewer"
// 5. How should I label the important peices of data that are a part of the problem?
"name function Add(), have num1, num1, and sum as the result"

// EXPLORE EXAMPLES (ex. that relate to the problem)
// 6. Start with simple examples
// 7. Progress to more complex examples
// 8. Explore examples with empty inputs, edge cases
// 9. Explore examples with invalid inputs (string instead of integer)

// BREAK DOWN THE CODE (PSEUDO CODE)
const add = (num1, num2) => {
    let sum = num1 + num2;
    return sum
};

// SOLVE AND SIMPLIFY

// LOOK BACK AND REFACTOR

