// BUBBLE SORT. if used with noSwap variable, time complexity is O(N);

// PROBLEM 1
// Start looping from a variable called i, the end of the array towards the beginning
// Start with an inner loop with the variable called j, from the beginning until i - 1;
// if arr[j] is greater than arr[i + 1], swap those two values
// return the sorted array 


const arr = [2, 16, 14, 5, 1, 18, 13, -3];
// const arr = [6, 1, 2, 3, 4, 5];

// Option 1 BEST
const bubbleSwap = (arr) => {
    for (let i = arr.length; i > 0; i--) {
        let noSwaps = true;
        for (let j = 0; j < (i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}
console.log(bubbleSwap(arr));


// option 2, same but more code.
const bubbleSwaps = (arr) => {
    for (let i = arr.length; i > 0; i--) {
        let noSwaps = true;
        //If noSwap is left true meaning no swaps are made in the last itteration, means everything is in order and itll break out of the loop and then you just return the array
        for (let j = 0; j < (i - 1); j++) {
            // console.log(arr, arr[j], arr[j + 1])
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}
console.log(bubbleSwaps(arr));
