// 01. Numbers from 0 to 100
// Write a function that prints the numbers from 1 to 100, each on a new line.

function printNumbers() {
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
}

printNumbers();

// *******************************************************************************

// 02.Numbers N to 0 in reverse order
// Write a function that accepts a positive number n and prints the numbers from n to 1 in reverse order (from largest to smallest).

function printNumbersReverse(n) {
  if (n <= 0) {
    console.log("Please provide a positive number.");
    return;
  }

  for (let i = n; i >= 1; i--) {
    console.log(i);
  }
}

printNumbersReverse(10);

// *******************************************************************************

// 03. Numbers 1 to N through 2
// Write a function that accepts a number n and prints the numbers from 1 to n through 2 (with step 2).

function printNumbersThroughTwo(n) {
  if (n <= 0) {
    console.log("Please provide a positive number.");
    return;
  }

  for (let i = 1; i <= n; i += 2) {
    console.log(i);
  }
}

printNumbersThroughTwo(10);

// *******************************************************************************

// 04.Numbers 1 to N through M
// Write a function that takes two numbers n and m and prints the numbers from 1 to n through m (with step m).

function printNumbersThroughM(n, m) {
  if (n <= 0 || m <= 0) {
    console.log("Please provide positive numbers for both n and m.");
    return;
  }

  for (let i = 1; i <= n; i += m) {
    console.log(i);
  }
}

// Example usage:
console.log("f(10, 2):");
printNumbersThroughM(10, 2);
console.log("f(8, 3):");
printNumbersThroughM(8, 3);

// *******************************************************************************

// 05.Letters in a word
// Write a function that accepts text and prints each letter on a new line.

function printLetters(text) {
  for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
  }
}

// Example usage:
console.log('f("hello"):');
printLetters("hello");
console.log('f("Bulgaria"):');
printLetters("Bulgaria");

// *******************************************************************************

// 06.Sum of vowels
// Write a function that accepts text (string) and calculates and prints the sum of the values of the vowel letters according to the table below:
// letter
// a
// e
// i
// o
// u
// value
// 1
// 2
// 3
// 4
// 5

function sumOfVowels(text) {
  const vowelValues = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  let sum = 0;

  for (let i = 0; i < text.length; i++) {
    const letter = text[i].toLowerCase();
    if (vowelValues[letter] !== undefined) {
      sum += vowelValues[letter];
    }
  }

  console.log(sum);
}

// Example usage:
console.log('f("hello"):');
sumOfVowels("hello");
console.log('f("hi"):');
sumOfVowels("hi");
console.log('f("bye"):');
sumOfVowels("bye");
console.log('f("zzzz"):');
sumOfVowels("zzzz");

// *******************************************************************************

// 07.Clock
// Write a function that prints the hours of the day from 0:0 to 23:59, each on a separate line. Hours must be written in the format '{hour}:{minutes}'.

function printHours() {
  for (let hour = 0; hour <= 23; hour++) {
    for (let minute = 0; minute <= 59; minute++) {
      console.log(`${hour}:${minute < 10 ? "0" + minute : minute}`);
    }
  }
}

// Example usage:
printHours();

// *******************************************************************************

// 08.Multiplication table
// Print the multiplication table for numbers 1 through 10 in the following format:
// "{first multiplier} * {second multiplier} = {result}".

function printMultiplicationTable() {
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      const result = i * j;
      console.log(`${i} * ${j} = ${result}`);
    }
  }
}

// Example usage:
printMultiplicationTable();

// *******************************************************************************

// 09.Sum of Even Numbers
// Write a program that receives an integer 'n' and calculates the sum of the first 'n' even numbers. Display the result on the console.

function sumOfEvenNumbers(n2) {
  let sum = 0;
  let count = 0;
  let currentNumber = 2;

  while (count < n2) {
    sum += currentNumber;
    count++;
    currentNumber += 2;
  }

  return sum;
}

// Example usage:
const n2 = 5;
const result2 = sumOfEvenNumbers(n2);
console.log("Sum of the first", n2, "even numbers is:", result2);

// *******************************************************************************

// 10.Factorial Calculation
// Write a program that receives a positive integer 'n' and calculates its factorial.

function factorial(n3) {
  // Base case: factorial of 0 is 1
  if (n3 === 0) {
    return 1;
  }

  // Recursive case: factorial of n is n multiplied by factorial of (n - 1)
  return n3 * factorial(n3 - 1);
}

// Example usage:
const n3 = 5;
const result = factorial(n3);
console.log("Factorial of", n3, "is:", result);

// *******************************************************************************

// 11.Number Reversal
// Write a program that receives an integer 'n' and prints its reverse.

function reverseNumber(n) {
  const reversed = parseInt(n.toString().split("").reverse().join(""));
  console.log(reversed);
}

// Example usage:
console.log("f(123):");
reverseNumber(123);
console.log("f(9876):");
reverseNumber(9876);
console.log("f(505):");
reverseNumber(505);
console.log("f(10203):");
reverseNumber(10203);
console.log("f(7):");
reverseNumber(7);

// *******************************************************************************

// 12.Fibonacci Sequence Sum
// Write a program that receives a positive integer 'n' and calculates the sum of the first 'n' items in the Fibonacci sequence.

function fibonacciSum(n) {
  let sum = 0;
  let prev = 0;
  let curr = 1;

  for (let i = 1; i <= n; i++) {
    sum += curr;
    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return sum;
}

// Example usage:
console.log("f(3):", fibonacciSum(3));
console.log("f(5):", fibonacciSum(5));
console.log("f(1):", fibonacciSum(1));
console.log("f(0):", fibonacciSum(0));
console.log("f(10):", fibonacciSum(10));

// *******************************************************************************

// 13.Palindrome Check
// Write a program that receives a string from the console and checks whether it is a palindrome (reads the same forwards and backwards) or not.

function isPalindrome(str) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Check if the clean string is equal to its reverse
  return cleanStr === cleanStr.split("").reverse().join("");
}

// Example usage:
console.log('f("radar"): ', isPalindrome("radar")); // true
console.log('f("hello"): ', isPalindrome("hello")); // false
console.log('f("racecar"): ', isPalindrome("racecar")); // true
console.log('f("java"): ', isPalindrome("java")); // false
console.log('f("madam"): ', isPalindrome("madam")); // true

// *******************************************************************************

// 14.Armstrong Number Check
// Write a program that receives an integer 'n' and checks whether it is an Armstrong number or not. An Armstrong number is a number that is equal to the sum of its own digits raised to the power of the count of digits.

function isArmstrongNumber(n) {
  const numString = n.toString();
  const numDigits = numString.length;
  let sum = 0;

  for (let digit of numString) {
    sum += Math.pow(parseInt(digit), numDigits);
  }

  return sum === n ? "Armstrong" : "Not Armstrong";
}

// Example usage:
console.log("f(153):", isArmstrongNumber(153)); // true
console.log("f(370):", isArmstrongNumber(370)); // true
console.log("f(123):", isArmstrongNumber(123)); // false
console.log("f(407):", isArmstrongNumber(407)); // true
console.log("f(1634):", isArmstrongNumber(1634)); // true

// *******************************************************************************

// 15.Collatz Conjecture
// Write a program that receives a positive integer 'n' and calculates and prints the Collatz sequence for 'n'. The Collatz sequence is defined as follows:
// If 'n' is even, divide it by 2.
// If 'n' is odd, multiply it by 3 and add 1.
// Repeat the process until 'n' becomes 1.

function collatzSequence(n) {
  let sequence = [];

  while (n !== 1) {
    sequence.push(n);
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
  }

  sequence.push(1); // Add the final 1 to the sequence
  return sequence.join(" ");
}

// Example usage:
console.log("f(6):", collatzSequence(6));
console.log("f(12):", collatzSequence(12));
console.log("f(9):", collatzSequence(9));
console.log("f(200):", collatzSequence(200));
console.log("f(15):", collatzSequence(15));

// *******************************************************************************

// 16.Hollow Rectangle Pattern
// Input: Two positive integers 'n' and 'm' representing the number of rows and columns.

// input
// output
// f(4, 6)
// ******
// *    *
// *    *
// ******
// f(2, 2)
// **
// **
// f(3, 4)
// ****
// *  *
// ****

function hollowRectanglePattern(n, m) {
  // Print the first row
  let pattern = "*".repeat(m) + "\n";

  // Print the middle rows
  for (let i = 2; i < n; i++) {
    pattern += "*" + " ".repeat(m - 2) + "*\n";
  }

  // Print the last row
  pattern += "*".repeat(m);

  console.log(pattern);
}

// Example usage:
console.log("f(4, 6):");
hollowRectanglePattern(4, 6);
console.log("f(2, 2):");
hollowRectanglePattern(2, 2);
console.log("f(3, 4):");
hollowRectanglePattern(3, 4);

// *******************************************************************************

// 17. New Building
// Write a function that displays on the console a building (from top to bottom), while the following conditions are met:
// On each even floor there are only offices
// On each odd floor there are only apartments
// Each apartment is indicated as follows: A{floor number}{apartment number}, apartment numbers start from 0.
// Each office is indicated as follows: O{floor number}{office number}, office numbers also start at 0.
// On the top floor there are always apartments, and they are larger than the others, so in front of their number it says 'L' instead of 'A'. If there is only one floor, then there are only large apartments!
// You accept 2 parameters - the number of floors and the number of rooms per floor.

function displayBuilding(floors, roomsPerFloor) {
  let building = "";

  for (let floor = floors; floor > 0; floor--) {
    let floorRooms = "";

    if (floor === floors && floors > 1) {
      // Top floor has large apartments
      for (let room = 0; room < roomsPerFloor; room++) {
        floorRooms += "L" + floor + room + " ";
      }
    } else {
      // For other floors
      let roomType = floor % 2 === 0 ? "O" : "A";
      for (let room = 0; room < roomsPerFloor; room++) {
        floorRooms += roomType + floor + room + " ";
      }
    }

    building += floorRooms.trim() + "\n";
  }

  console.log(building);
}

// Example usage:
console.log("f(6, 4):");
displayBuilding(6, 4);
console.log("f(3, 3):");
displayBuilding(3, 3);
console.log("f(4, 4):");
displayBuilding(4, 4);

// *******************************************************************************

// 18.Magic Number
// Write a function that checks all possible combinations of a pair of numbers in the range of two given numbers. Print in which line is the combination whose sum of the numbers is equal to a given magic number. If there is no combination matching the condition print a message that magic number was not found.
// Three parameters:
// First – beginning of the interval – integer in the range [1...999]
// Second – end of the interval – integer in the interval [greater than the first number... 1000]
// Third – the magic number – an integer in the range [1...10000]
// Output
// One line should be printed on the console, according to the result:
// If a combination whose sum of numbers is equal to the magic number is found
// "Combination {sequence number} - ({first number} + {second number} = {magic number})"
// If no combination was found matching the condition
// "{the number of combinations} combinations - neither equals {magic number}"

function findMagicNumber(start, end, magicNumber) {
  let combinationFound = false;
  let combinations = 0;

  for (let i = start; i <= end; i++) {
    for (let j = start; j <= end; j++) {
      combinations++;
      if (i + j === magicNumber) {
        console.log(
          `Combination ${combinations} - (${i} + ${j} = ${magicNumber})`
        );
        combinationFound = true;
        return;
      }
    }
  }

  if (!combinationFound) {
    console.log(`${combinations} combinations - neither equals ${magicNumber}`);
  }
}

// Example usage:
console.log("f(1, 10, 5):");
findMagicNumber(1, 10, 5);
console.log("f(23, 24, 20):");
findMagicNumber(23, 24, 20);
console.log("f(1, 2, 3):");
findMagicNumber(1, 2, 3);

// *******************************************************************************

// 19. Padawan Equipment
// Yoda is starting his newly created Jedi academy. So, he asked Master George Lucas to buy the needed equipment. The number of items depends on how many students will sign up. The equipment for the Padawan contains lightsabers, belts, and robes.
// You will be given the amount of money George Lucas has, the number of students, and the prices of each item. You must help George Lucas calculate if the money he has is enough to buy all of the equipment or how much more money he needs.
// Because the lightsabers sometimes break, George Lucas should buy 10% more, rounded up to the next integer. Also, every sixth belt is free.
// The input data consist of exactly 5 lines:
// The amount of money George Lucas has – the floating-point number in the range [0.00…1,000.00].
// The count of students – integer in the range [0…100].
// The price of lightsabers for a single saber – the floating-point number in the range [0.00…100.00].
// The price of robes for a single robe – the floating-point number in the range [0.00…100.00].
// The price of belts for a single belt – the floating-point number in the range [0.00…100.00].
// The output should be printed on the console.
// If the calculated price of the equipment is less or equal to the money George Lucas has:
// "The money is enough - it would cost {the cost of the equipment}lv."
// If the calculated price of the equipment is more than the money George Lucas has:
// "George Lucas will need {neededMoney}lv more."
// All prices must be rounded to two digits after the decimal point.

function calculatePadawanEquipment(
  money,
  studentsCount,
  saberPrice,
  robePrice,
  beltPrice
) {
  const sabersNeeded = Math.ceil(studentsCount * 1.1);
  const sabersPrice = sabersNeeded * saberPrice;
  const robesPrice = studentsCount * robePrice;
  const freeBelts = Math.floor(studentsCount / 6);
  const beltsPrice = (studentsCount - freeBelts) * beltPrice;
  const totalPrice = sabersPrice + robesPrice + beltsPrice;

  if (totalPrice <= money) {
    console.log(
      `The money is enough - it would cost ${totalPrice.toFixed(2)}lv.`
    );
  } else {
    const neededMoney = totalPrice - money;
    console.log(`George Lucas will need ${neededMoney.toFixed(2)}lv more.`);
  }
}

// Example usage
calculatePadawanEquipment(100, 2, 1.0, 2.0, 3.0);
calculatePadawanEquipment(100, 42, 12.0, 4.0, 3.0);

// *******************************************************************************

// 20.Rage Expenses
// As a MOBA challenger player, Peter has the bad habit of trashing his PC when he loses a game and rage quits. His gaming setup consists of a headset, mouse, keyboard, and display. You will receive Peter's lost games count.
// Every second lost game, Peter trashes his headset.
// Every third lost game, Peter trashes his mouse.
// When Peter trashes both his mouse and headset in the same lost game, he also trashes his keyboard.
// Every second time he trashes his keyboard, he also trashes his display.
// You will receive the price of each item in his gaming setup. Calculate his rage expenses for renewing his gaming equipment.
// On the first input line - lost games count – integer in the range [0, 1000].
// On the second line – headset price - the floating-point number in the range [0, 1000].
// On the third line – mouse price - the floating-point number in the range [0, 1000].
// On the fourth line – keyboard price - the floating-point number in the range [0, 1000].
// On the fifth line – display price - the floating-point number in the range [0, 1000].
// As output, you must print Peter's total expenses: "Rage expenses: {expenses} lv."

function calculateRageExpenses(
  lostGames,
  headsetPrice,
  mousePrice,
  keyboardPrice,
  displayPrice
) {
  let headsetCount = 0;
  let mouseCount = 0;
  let keyboardCount = 0;
  let displayCount = 0;

  for (let i = 1; i <= lostGames; i++) {
    if (i % 2 === 0) {
      headsetCount++;
    }
    if (i % 3 === 0) {
      mouseCount++;
    }
    if (i % 6 === 0) {
      keyboardCount++;
      if (i % 12 === 0) {
        displayCount++;
      }
    }
  }

  const totalExpenses =
    headsetCount * headsetPrice +
    mouseCount * mousePrice +
    keyboardCount * keyboardPrice +
    displayCount * displayPrice;

  console.log(`Rage expenses: ${totalExpenses.toFixed(2)} lv.`);
}

// Example usage
calculateRageExpenses(7, 2, 3, 4, 5);
calculateRageExpenses(23, 12.5, 21.5, 40, 200);
