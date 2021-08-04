// DATA MUST BE SORTED ALREADY. NUMERICALLY OR ALPHABETICALLY.
// Much quicker than linear search

// Problem 1
// This function accepts a sorted array and a value
// create a left pointer at the start of array, and a right pointer at end of array. 
// While the left pointer comes before the right pointer:
// Create a pointer in the middle
// If you find the value you want, return the index
// If the value is too small, move the left pointer up. 
// If the value is too large, move the left pointer down. 
// If value is never found, return -1

function binarySearch(arr, val) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2)
    while (arr[middle] !== val && start <= end) {
        if (val < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2)
    }
    if (arr[middle] === val) {
        return middle;
    } else {
        return -1
    }
}
binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7)

// SIMPLIFIED SOLUTION 2
function binarySearch(arr, val) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2)
    while (arr[middle] !== val && start <= end) {
        val < arr[middle] ? end = middle - 1 : start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === val ? middle : -1;
}
