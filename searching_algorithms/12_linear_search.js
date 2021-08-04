// Visiting one item at a time starting at the beginning or the end and moving forward/backward checking the next proceeding value, one interval at a time.

// Ex. lets search for 12
[5, 8, 1, 100, 12, 3, 12]
//  mo, no, no ,no, YES, no, YES
// check => in a line



// Problem 1
// Accepts an array and a value
// Loop throught the array and check if the current array element is equal to the value. 
// return the index at which it is found
// If value is not found, return -1
function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
}