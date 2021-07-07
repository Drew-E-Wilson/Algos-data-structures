// Factorial
// 4!(factorial)  is the same thing as 4*3*2*1
// Where do things go wrong?
// 1. forget a base case or wrong base case
// 2. Forgetting to return or returning the wrong thing
// 3. Stack overflow - (error on chrome - "Maximum call stack size exceeded") when too many functions are trying to be called on the stack. Tends to happen when stuck in a loop

// Old method
function factorial(num) {
    let total = 1;
    for (i = num; i > 0; i--) {
        total *= i;
    }
    console.log(total)
    return total
}
factorial(4)


// NEW METHOD
const factorialSum = (num) => {
    if (num === 1) return 1;
    return num * factorialSum(num - 1);
}

console.log(factorialSum(5));