// RECURSION
// A process that calls intself (a function)

// THE CALL STACK
// A stack data structure. Any time a function is invoked, it is placed (pushed) on top of the call stack
// When JavaScript sees the return keyword, or when the function ends, the compiler will remove it from the stack (pop)
//When we write recursive functions, we keep pushing new functions onto the callstack
// Chrome inspecter => source => Call Stack (mark break point & command + Enter to start)

// Two essential parts of a recursive function
// 1. Base Case - Where the recursion will stop
// 2. Different input - Call the function each time with a different peice of data

//Ex. 1
const countDown = (num) => {
    if (num <= 0) {
        console.log("All Done");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}

countDown(5);

// Ex. 2
function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num - 1);
}

console.log(sumRange(3));