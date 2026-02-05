/* ---------------------------
    THINKING FUNCTIONALLY
---------------------------- */
// 1. Take an array of numbers and return the sum.
function sumArray(numbers) {        // (number is an array [1, 2, 3, 4, 5])
    let sum = 0                     // starts sum at 0
    for (const n of numbers) {      // (for . . . of) iterate through each number
        sum += n;                   // Add each number to sum
    }
    return sum;                     // Returns the final sum
}


// 2. Take an array of numbers and return the average.


// 3. Take an array of strings and return the longest string.


// 4. Take an array of strings, and a number and return an array of the strings that are longer than the given number. 


// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].


// 5. Take a number, n, and print every number between 1 and n without using loops. Use recursion