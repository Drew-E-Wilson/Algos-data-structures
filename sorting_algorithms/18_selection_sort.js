// Going through the array, and selecting the lowest number(the minimum) and then putting it at the beginning.

// Store the first element as the smallest value you've seen so far. 
// Compare this item to the next item in the array until you find a smaller number
// If a smaller number is found, designate that number to be the new "minimum" and continue till the end of the array.
// If the minimum is not the value (index) you started with, swap the two values
// Repeat this with the next element until the array is sorted. 

// Time Complexity = O(N^2)

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let currentLowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[currentLowest] > arr[j]) {
                currentLowest = j;
            }
        }
        if (i !== currentLowest) {
            [arr[i], arr[currentLowest]] = [arr[currentLowest], arr[i]];
        }
    }
    console.log(arr)
}

selectionSort([5, 2, 3, 6, 1, 4]);
// [1, 2, 3, 6, 5, 4]