// 01. Sum First and Last Array Element

// Write a function that receives an array of strings and prints the sum of the first and last
// element in that array.

function sumFirstAndLastElement(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    console.error("Input must be a non-empty array of strings.");
    return;
  }

  // Convert the first and last elements to numbers
  const firstElement = Number(arr[0]);
  const lastElement = Number(arr[arr.length - 1]);

  // Check if the conversion resulted in valid numbers
  if (isNaN(firstElement) || isNaN(lastElement)) {
    console.error("Array elements must be valid numbers in string format.");
    return;
  }

  // Calculate the sum
  const sum = firstElement + lastElement;

  // Print the result
  console.log(sum);
}

// Example usage:
sumFirstAndLastElement(["20", "30", "40"]); // Output: 60
sumFirstAndLastElement(["10", "17", "22", "33"]); // Output: 43
sumFirstAndLastElement(["11", "58", "69"]); // Output: 80

// **************************************************************************************************
// 02. Write a program which receives a number and prints the corresponding name of the day
// of week. If the number is not a valid day, print "Invalid day";

function getDayOfWeek(dayNumber) {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  if (dayNumber < 1 || dayNumber > 7) {
    console.log("Invalid day!");
  } else {
    console.log(daysOfWeek[dayNumber - 1]);
  }
}

// Example usage:
getDayOfWeek(3); // Output: Wednesday
getDayOfWeek(6); // Output: Saturday
getDayOfWeek(11); // Output: Invalid day!

// ****************************************************************************************
// 03.Reverse an Array of Numbers

// Receive a number n and an array of elements, create a new array with n numbers,
// reverse it and print its elements on a single line, space separated.
function reverseArrayElements(n, arr) {
  if (!Array.isArray(arr) || typeof n !== "number" || n <= 0) {
    console.error("Invalid input");
    return;
  }

  const subArray = arr.slice(0, n);

  const reversedArray = subArray.reverse();

  console.log(reversedArray.join(" "));
}

// Example usage:
reverseArrayElements(3, [10, 20, 30, 40, 50]); // Output: 30 20 10
reverseArrayElements(4, [-1, 20, 99, 5]); // Output: 5 99 20 -1
reverseArrayElements(2, [66, 43, 75, 89, 47]); // Output: 43 66

// ******************************************************************************************************
// 04.Reverse an Array of Strings

// Receive an array of strings (space separated values), reverse it, and print its elements.
// Swap elements. For example, the first element should be last, and the last element
function reverseArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    console.error("Input must be a non-empty array of strings.");
    return;
  }

  const reversedArray = arr.reverse();

  console.log(reversedArray.join(" "));
}

// Example usage:
reverseArray(["a", "b", "c", "d", "e"]); // Output: e d c b a
reverseArray(["abc", "def", "hig", "klm", "nop"]); // Output: nop klm hig def abc
reverseArray(["33", "123", "0", "dd"]); // Output: dd 0 123 33

// function reverseArray(arr) {
//   if (!Array.isArray(arr) || arr.length === 0) {
//     console.error("Input must be a non-empty array of strings.");
//     return;
//   }

//   const reversedArray = [];

//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversedArray.push(arr[i]);
//   }

//   console.log(reversedArray.join(' '));
// }

// *****************************************************************************
// 5. Sum Even Numbers

// Receive an array of strings parse them to numbers and sum only the even numbers.
function sumEvenNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let num = parseInt(arr[i]);
    if (!isNaN(num) && num % 2 === 0) {
      sum += num;
    }
  }
  return sum;
}

// Example usage:
const input1 = ["1", "2", "3", "4", "5", "6"];
console.log(sumEvenNumbers(input1)); // Output: 12

const input2 = ["3", "5", "7", "9"];
console.log(sumEvenNumbers(input2)); // Output: 0

const input3 = ["2", "4", "6", "8", "10"];
console.log(sumEvenNumbers(input3)); // Output: 30

// *****************************************************************
// 6. Even and Odd Subtraction

// Write a program that calculates the difference between the sum of the even and the sum
// of the odd numbers in an array.

function evenOddSubtraction(arr) {
  let evenSum = 0;
  let oddSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenSum += arr[i];
    } else {
      oddSum += arr[i];
    }
  }

  return evenSum - oddSum;
}

// Example usage:

console.log(evenOddSubtraction([1, 2, 3, 4, 5, 6])); // Output: 3

console.log(evenOddSubtraction([3, 5, 7, 9])); // Output: -24

console.log(evenOddSubtraction([2, 4, 6, 8, 10])); // Output: 30

// ***************************************************************
// 7. Equal Arrays

// Receive two string arrays and print on the console whether they are identical or not.
// Arrays are identical if their elements are equal. If the arrays are identical find the sum of
// the first one and print on the console the following message: &#39;Arrays are identical.
// Sum: {sum}&#39;, otherwise find the first index where the arrays differ and print on the
// console following message:
// &#39;Arrays are not identical. Found difference at {index} index&#39;.

function compareArrays(arr1, arr2) {
  const areIdentical = JSON.stringify(arr1) === JSON.stringify(arr2);

  if (areIdentical) {
    const sum = arr1.reduce((acc, curr) => acc + parseInt(curr), 0);
    console.log(`Arrays are identical. Sum: ${sum}`);
  } else {
    let index = -1;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        index = i;
        break;
      }
    }
    console.log(
      `Arrays are not identical. Found difference at ${
        index === -1 ? arr1.length : index
      } index`
    );
  }
}

// Example usage:
compareArrays(["10", "20", "30"], ["10", "20", "30"]); // Output: Arrays are identical. Sum: 60

compareArrays(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]); // Output: Arrays are not identical. Found difference at 2 index

compareArrays(["1"], ["10"]); // Output: Arrays are not identical. Found difference at 0 index

// ******************************************************************
// 8. Condense Array to Number

// Write a program to receive an array of numbers and condense them by summing
// adjacent couples of elements until a single number is obtained. For example, if we have
// 3 elements {2, 10, 3}, we sum the first two and the second two elements and obtain
// {2+10, 10+3} = {12, 13}, then we sum again all adjacent elements and obtain {12+13}
// = {25}.

function condenseArray(nums) {
  while (nums.length > 1) {
    let condensed = [];
    for (let i = 0; i < nums.length - 1; i++) {
      condensed.push(nums[i] + nums[i + 1]);
    }
    nums = condensed;
  }
  return nums[0];
}

// Example usage:
console.log(condenseArray([2, 10, 3])); // Output: 25

console.log(condenseArray([5, 0, 4, 1, 2])); // Output: 35

console.log(condenseArray([1])); // Output: 1

// ****************************************************************
// 9. Print every N-th Element from an Array
// Write a program that collects every element of an array on a given step.
// The input comes as array of strings and N - the step.
// The collections are every element on the N-th step starting from the first one, until you
// reach the end of the array. Then, print elements in a row, separated by single space.
function collectElements(arr, step) {
  let result = [];
  for (let i = 0; i < arr.length; i += step) {
    result.push(arr[i]);
  }
  return result.join(" ");
}

// Example usage:
const input4 = ["5", "15", "31", "14", "20"];
console.log(collectElements(input4, 2)); // Output: 5 31 20

const input5 = ["dsa", "asd", "demo", "test"];
console.log(collectElements(input5, 2)); // Output: dsa demo

const input6 = ["1", "2", "3", "4", "5"];
console.log(collectElements(input6, 6)); // Output: 1

// ***************************************************************
// 10. Add and Remove Elements from Array

// Write a program that adds and removes numbers to/from an array. You will receive a
// command which can either be &quot;add&quot; or &quot;remove&quot;.
// The initial number is 1. Each input command should increase that number, regardless of
// what it is.
// Upon receiving an &quot;add&quot; command you should add the current number to your array.
// Upon receiving the &quot;remove&quot; command you should remove the last entered number,
// currently existent in the array.
// The input comes as array of strings. Each element holds a command.
// Print elements in a row, separated by single space. In case of an empty array, just print
// &quot;Empty&quot;.

function addAndRemoveElements(commands) {
  let result = [];
  let number = 1;

  for (let command of commands) {
    if (command === "add") {
      result.push(number);
      number++; // Increment the number only when 'add' command is encountered
    } else if (command === "remove") {
      if (result.length > 0) {
        result.pop();
      }
    }
  }

  if (result.length === 0) {
    console.log("Empty");
  } else {
    console.log(result.join(" "));
  }
}

// Example usage:

addAndRemoveElements(["add", "add", "add", "add"]); // Output: 1 2 3 4

addAndRemoveElements(["add", "add", "remove", "add", "add"]); // Output: 1 3 4

addAndRemoveElements(["remove", "remove", "remove"]); // Output: Empty

// *********************************************************************
// 11. Rotate Array

// The array should be rotated to the right side, meaning that the last element should become
// the first, upon rotation.
// You receive an array of strings and count of rotation you need to perform.
// The output is the resulting array after the rotations. The elements should be printed on one
// line, separated by a single space.

function rotateArray(arr, rotations) {
  rotations %= arr.length;
  const rotatedPart = arr.slice(-rotations);
  const restPart = arr.slice(0, -rotations);
  const rotatedArray = rotatedPart.concat(restPart);
  return rotatedArray.join(" ");
}

// Example usage:

console.log(rotateArray(["1", "2", "3", "4"], 2)); // Output: 3 4 1 2

console.log(rotateArray(["Banana", "Orange", "Coconut", "Apple"], 15)); // Output: Orange Coconut Apple Banana

// **************************************************
// 12. Extract a Non-Decreasing Subsequence from an Array
// Extracts only those numbers that form a non-decreasing subsequence. Start from the
// first element and continue to the end of the given array of numbers. Any number which
// is LESS THAN the current biggest one is ignored, alternatively if it’s equal or higher than
// the current biggest one you set it as the current biggest one and you continue to the next
// number.
// The input comes as an array of numbers.

// The output is the processed array after the filtration, which should be a non-decreasing
// subsequence. The elements should be printed on one line, separated by a single space.
function nonDecreasingSubsequence(arr) {
  let result = [];
  let currentBiggest = Number.NEGATIVE_INFINITY;

  for (let num of arr) {
    if (num >= currentBiggest) {
      result.push(num);
      currentBiggest = num;
    }
  }

  return result.join(" ");

  // or:
  // let result = [];
  // let currentBiggest = arr[0];

  // for (let num of arr) {
  //     if (num >= currentBiggest) {
  //         result.push(num);
  //         currentBiggest = num;
  //     }
  // }

  // return result.join(' ');
}

// Example usage:

console.log(nonDecreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24])); // Output: 1 3 8 10 12 24

console.log(nonDecreasingSubsequence([1, 2, 3, 4])); // Output: 1 2 3 4

console.log(nonDecreasingSubsequence([20, 3, 2, 15, 6, 1])); // Output: 20

// ***********************************************************
// 13. Negative / Positive Numbers

// Write a program that processes the elements in an array one by one and produces a new
// array. Prepend each negative element at the front of the result and append each positive (or
// 0) element at the end of the result.
function separateNumbers(arr) {
  let result = [];

  for (let num of arr) {
    if (num < 0) {
      result.unshift(num);
    } else {
      result.push(num);
    }
  }

  return result;
}

// Example usage:

console.log(separateNumbers([7, -2, 8, 9]).join("\n"));
// Output:
// -2
// 7
// 8
// 9

console.log(separateNumbers([3, -2, 0, -1]).join("\n"));
// Output:
// -2
// -1
// 3
// 0

// ********************************************************
// 14. First and Last K Numbers

// Write a program that prints the first k and the last k elements from an array of numbers.
// The input comes as an array of number elements and k.
// The output is printed on the console on two lines. On the first line print the first k elements,
// separated by space. On the second line print the last k elements, separated by space.
function printFirstAndLastKNumbers(arr, k) {
  // Slice the first k elements and join them with a space
  const firstK = arr.slice(0, k).join(" ");

  // Slice the last k elements and join them with a space
  const lastK = arr.slice(-k).join(" ");

  // Print the results
  console.log(firstK);
  console.log(lastK);
}

// Example usage:

printFirstAndLastKNumbers([7, 8, 9], 2);
// Output:
// 7 8
// 8 9

printFirstAndLastKNumbers([6, 7, 8, 9], 3);
// Output:
// 6 7 8
// 7 8 9

// ************************************************************************************
// 15. Last K Numbers Sequence

// You are given two integers n and k. Write a program that generates and prints the following
// sequence:
//  The first element is 1
//  Every following element equals the sum of the previous k elements
//  The length of the sequence is n elements

// The input comes as two number arguments. The first element represents the number n, and
// the second – the number k.
// The output is printed on the console on a single line, separated by space.

function generateLastKNumbersSequence(n, k) {
  let sequence = [1]; // Initialize the sequence with the first element being 1

  for (let i = 1; i < n; i++) {
    // Calculate the sum of the previous k elements
    let sum = 0;
    for (let j = Math.max(0, i - k); j < i; j++) {
      sum += sequence[j];
    }
    sequence.push(sum); // Add the sum to the sequence
  }

  return sequence.join(" "); // Join the sequence elements with a space and return
}

// Example usage:
console.log(generateLastKNumbersSequence(6, 3)); // Output: 1 1 2 4 7 13
console.log(generateLastKNumbersSequence(8, 2)); // Output: 1 1 2 3 5 8 13 21

// ***********************************************************************************
// 16. Process Odd Numbers

// You are given an array of numbers. Write a program that prints the elements at odd
// positions from the array, doubled and in reverse order.
// The input comes as an array of number elements.
function processOddNumbers(arr) {
  let result = [];

  // Iterate over the array, starting from the second element (index 1), with a step of 2
  for (let i = 1; i < arr.length; i += 2) {
    result.push(arr[i] * 2); // Double the element at odd position and add to result
  }

  return result.reverse(); // Reverse the result array
}

// Example usage:

console.log(processOddNumbers([10, 15, 20, 25]).join(" ")); // Output: 50 30

console.log(processOddNumbers([3, 0, 10, 4, 7, 3]).join(" ")); // Output: 6 8 0

// *************************************************************************************
// 17. Smallest Two Numbers

// Write a program that prints the two smallest elements from an array of numbers.
// The input comes as an array of number elements.
// The output is printed on the console on a single line, separated by space.
function smallestTwoNumbers(arr) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // Take the first two elements of the sorted array
  const smallest = arr[0];
  const secondSmallest = arr[1];

  return `${smallest} ${secondSmallest}`;
}

// Example usage:

console.log(smallestTwoNumbers([30, 15, 50, 5])); // Output: 5 15

console.log(smallestTwoNumbers([3, 0, 10, 4, 7, 3])); // Output: 0 3

// *****************************************
// 18. List of Products

// You will receive an array of products. Print a numbered array of all the products ordered
// by name.
function listProducts(products) {
  products.sort();

  for (let i = 0; i < products.length; i++) {
    console.log(`${i + 1}.${products[i]}`);
  }
}

// Example usage:

listProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);

// ***************************************************************************
// 19. Array Manipulations
// Write a program that manipulates an array of numbers.
//  Add {number}: add a number to the end of the array
//  Remove {number}: remove number from the array
//  RemoveAt {index}: removes number at a given index
//  Insert {number} {index}: inserts a number at a given index
// Print the final state of the array (separated by spaces)
// The input comes as an array of strings. First input will be a string containing the array to
// manipulate. Every other command you receive will be a string.
// The output is the manipulated array printed on the console on a single line, separated by
// space.
function arrayManipulations(commands) {
  let array = commands.shift().split(" ").map(Number);

  for (let command of commands) {
    let [action, ...args] = command.split(" ");
    let number = Number(args[0]);
    let index = Number(args[1]);

    switch (action) {
      case "Add":
        array.push(number);
        break;
      case "Remove":
        array = array.filter((el) => el !== number);
        break;
      case "RemoveAt":
        array.splice(number, 1);
        break;
      case "Insert":
        array.splice(index, 0, number);
        break;
    }
  }

  console.log(array.join(" "));
}

// Example usage:
const input = [
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
];
arrayManipulations(input);
// Output: 19 53 6 8 43 3

// *********************************************************
// 20. Longest sequence of identical elements

// Write a program that finds the longest sequence of identical elements in an array of integers. If 2 or
// more sequences have the same length, print the one that is on the &quot;right&quot;.
function longestSequence(input) {
  let currentSequence = [];
  let longestSequence = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i + 1]) {
      currentSequence.push(input[i]);
    } else {
      currentSequence.push(input[i]);

      if (currentSequence.length >= longestSequence.length) {
        longestSequence = currentSequence;
      }

      currentSequence = [];
    }
  }

  console.log(longestSequence.join(" "));
}

// Example usage:

longestSequence([2, 2, 2, 3, 4, 4, 2, 2, 2, 1]);
longestSequence([1, 1, 1, 2, 3, 1, 3, 3, 1, 1]);
longestSequence([4, 4, 4, 4]);
