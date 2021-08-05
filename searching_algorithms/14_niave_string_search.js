// Ends up being a nested loop

// PROBLEM 1
// Loop over the longer string
// Loop over the shorter string
// If the characters dont match, break out of the inner loop
// If the characters do match, keep going
// If you complete the inner loop and find a match, increment the count of matches
// Return the count
const naiveSearch = (long, short) => {
    let counter = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if (short[j] !== long[i + j]) {
                break;
            }
            if (j === short.length - 1) {
                counter++;
            }
        }
    }
    console.log(counter)
    return counter;
}
naiveSearch("lorie loled", "lol")