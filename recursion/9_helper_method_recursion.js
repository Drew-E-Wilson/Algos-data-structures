// HELPER MEATHOD RECURSION
// Used when you do recursion but must put data into an array or object.
//An outter function that calls an inner function
//ex. 
const collectOdds = (arr) => {
    let result = [];
    const helper = (helperInput) => {
        if (helperInput.length === 0) {
            return;
        } else if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0]);
        }

        helper(helperInput.slice(1));
    }
    helper(arr);
    console.log(result);
    return result;
}
collectOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]);