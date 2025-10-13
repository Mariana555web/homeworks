// 1.  Write a function that takes a string as an argument and returns the number of characters in the string.
function countCharacters(str) {
    let count = 0;
    for (let i in str) {
        count++;
    }
    return count;
}

console.log(countCharacters("Mauradyan Marianna "));

// 2. Create a function that converts a given string to uppercase.
function toUppercase(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        if (code >= 97 && code <= 122) {
            result += String.fromCharCode(code - 32);
        } else {
            result += str[i];
        }
    }
    return result;
}

console.log(toUpper("picsart academy"));

//3. Write a function that accepts two numbers and returns their sum.
function sumElements (a, b) {
    return a + b;
}

console.log(sum(5, 7));

//4.Reverse the string "hello" without using a built-in function.
function reverseStr(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString("hello"));

//5.Merge the arrays let array1 = [1, 2]; and let array2 = [3, 4]; into a new array
function mergeArrays(arr1, arr2) {
    let merged = [];
    for (let i = 0; i < arr1.length; i++) {
        merged[merged.length] = arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        merged[merged.length] = arr2[i];
    }
    return merged;
}

let array1 = [1, 2];
let array2 = [3, 4];
console.log(mergeArrays(array1, array2));

//6. Check if the string "Learning JavaScript" contains the substring "Java"
function contains(str, sub) {
    for (let i = 0; i <= str.length - sub.length; i++) {
        let found = true;
        for (let j = 0; j < sub.length; j++) {
            if (str[i + j] !== sub[j]) {
                found = false;
                break;
            }
        }
        if (found) return true;
    }
    return false;
}

console.log(contains("Learning JavaScript", "Java"));

//7.Find the index of the value 9 in the array let numList = [3, 6, 9, 12];.
function indexOf(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}

let numList = [3, 6, 9, 12];
console.log(indexOf(numList, 9));

//8. Compute the sum of all elements in the array let expenses = [50, 75, 100];.
function sumArray(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

let expenses = [50, 75, 100];
console.log(sumArray(expenses));

//9. Write a function to check if a given string contains another substring.

//

//10 Write a function that returns the sum of all elements in an array of numbers.
function sumOfArray(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

console.log(sumOfArray([1, 2, 3, 4]));

//11 Create a function that accepts a number and returns whether it is even or odd
function evenOrOdd(num) {
    if (num % 2 === 0) 
        return "Even";
    else
        return "Odd";
}

console.log(evenOrOdd(4)); 
console.log(evenOrOdd(7)); 
