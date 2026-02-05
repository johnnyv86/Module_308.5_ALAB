/* ---------------------------
    THINKING FUNCTIONALLY
---------------------------- */
// 1. Take an array of numbers and return the sum.
function sumArray(numbers) {                    // (numbers is an array [1, 2, 3, 4, 5])
    let sum = 0                                 // starts sum at 0
    for (const n of numbers) {                  // (for . . . of) iterate through each number
        sum += n;                               // Add each number to sum
    }
    return sum;                                 // Returns the final sum
}


// 2. Take an array of numbers and return the average.
function averageArray(numbers) {
    if (numbers.length === 0) return 0;         // Checks if array is empty (avoids division by zero)
    return sumArray(numbers) / numbers.length;  // sum of all numbers / Divides by `number.length` = returns mean
}

// 3. Take an array of strings and return the longest string.
function longestString(strings) {
    if (strings.length === 0) return "";        // If string is empty, will return an empty string

    let longest = strings[0];                   // Assums first string is the longest
    for (const str of strings) {                // (for . . . of) iterate through each number
        if (str.length > longest.length) {      // If `str.length` is greater, update `longest`
            longest = str;
        }
    }
    return longest; //                          // Return the longest string
}

// 4. Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
function stringsLongerThan(strings, miniLength) { // (srigns): array of strings | (miniLength): number
    const result = [];                            // will loop through each string
    for (const str of strings) {                  // (for . . . of) iterate through each string
        if (str.length > miniLength) {            // If its `.length` is greater than `miniLength`
            result.push(str);                     // push str into `result` to be returned 
        }
    }
    return result;
}

// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].


// 5. Take a number, n, and print every number between 1 and n without using loops. Use recursion