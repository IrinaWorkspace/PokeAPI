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

// function reverseNumber(n) {
//   if (typeof n !== 'number' || isNaN(n)) {
//     console.error("Input must be a number.");
//     return;
//   }
//   const sign = Math.sign(n);

//   const reversed = parseInt(Math.abs(n).toString().split("").reverse().join("")) * sign;

//   console.log(reversed);
// }

// // Examples
// reverseNumber(123);  // 321
// reverseNumber(-123); // -321
// reverseNumber(120);  // 21
// reverseNumber('abc'); // Error: Input must be a number.

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

// *******************************************************************************

// 21. Refactor Sum of Odd Numbers
// You are assigned to find and fix the bugs in an existing piece of code, using the debugger. You should trace the program execution to find the lines of code that produce incorrect or unexpected results.
// You are given a program (existing source code) that prints the next n odd numbers (starting from 1) and on the last row, prints the sum of them.

function sumOddNumbers(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    let oddNumber = 2 * i + 1;
    console.log(oddNumber);
    sum += oddNumber;
  }

  console.log(`Sum: ${sum}`);
}

// Example usage:
sumOddNumbers(5);
sumOddNumbers(3);

// *******************************************************************************

// 22.Numbers up to 1000, ending in 7
// Write a program that prints the numbers in the range [1... 1000], which end in 7.

function printNumbersEndingIn7() {
  for (let i = 7; i <= 1000; i += 10) {
    console.log(i);
  }
}

// Example usage:
printNumbersEndingIn7();

// *******************************************************************************

// 23. Numbers up to 1000, ending in n
// Write a program that prints the numbers in the range [1... 1000], which end in n.

function printNumbersEndingInN(n) {
  for (let i = n; i <= 1000; i += 10) {
    console.log(i);
  }
}

// Example usage:
console.log("f(6):");
printNumbersEndingInN(6);
console.log("f(8):");
printNumbersEndingInN(8);

// *******************************************************************************

// 24.Encoding
// Write a program that receive an integer. On the console should be printed as many lines as there are digits in the number. Each line is formed from the digits of the reversed number. A symbol must be printed on each line with the following conditions:
// the symbol to be printed is from the ASCII table. Its decimal ASCII code is formed as 33 is added to the digit of the number entered that corresponds to a given line.
// The symbol is printed as many times as the digit
// if for a given line corresponds digit 0 on this line print "ZERO"

function encodeNumber(number) {
  let num = number;

  while (num > 0) {
    let lastDigit = num % 10;
    num = Math.floor(num / 10);

    if (lastDigit === 0) {
      console.log("ZERO");
    } else if (lastDigit === 4) {
      let percent = "";
      for (let i = 0; i < 4; i++) {
        percent += "%%";
      }
      console.log(percent);
    } else {
      let asciiCode = lastDigit + 33;
      let symbol = String.fromCharCode(asciiCode);
      console.log(symbol.repeat(lastDigit));
    }
  }
}

// Example usage
encodeNumber(2049);
encodeNumber(9347439);

// *******************************************************************************

// 25.Coins and Notes
// We have banknotes and coins of 1lv., 2lv. and 5lv. Write a program that receives number of banknotes and coins and the target amount and displays all possible ways in which the amount can be paid with the available money.
// The input contains exactly 4 parameters:
// Number of coins of 1lv. - positive integer;
// Number of coins of 2lv. - positive integer;
// Number of  banknotes of BGN 5 - positive integer;
// Sum - positive integer in the range [1... 1000];
// Print all combinations of the given denominations forming the sum, formatted as follows:
// "{1 count} * 1 lv. + {2 count} * 2 lv. + {5 count} * 5 lv. = {sum} lv."

function coinsAndNotes(coins1lv, coins2lv, banknotes5lv, targetSum) {
  for (let i = 0; i <= coins1lv; i++) {
    for (let j = 0; j <= coins2lv; j++) {
      for (let k = 0; k <= banknotes5lv; k++) {
        let sum = i * 1 + j * 2 + k * 5;
        if (sum === targetSum) {
          console.log(
            `${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${targetSum} lv.`
          );
        }
      }
    }
  }
}

// Example usage:
console.log("f(3, 2, 3, 10):");
coinsAndNotes(3, 2, 3, 10);
console.log("f(5, 3, 1, 7):");
coinsAndNotes(5, 3, 1, 7);

// *******************************************************************************

// 26. Even Pairs
// Write a program that generates and prints on the console four-digit numbers in which the first and second pairs of digits form two-digit primes (an example of such a number 1723). The final value to which the pairs should be generated is determined by another 2 digits received as input, which determine how much the final value is greater than the initial
// The input contains exactly 4 parameters:
// In the first row – the initial value of the first first pair of numbers –  a positive integer in the range [10... 90]
// In the second row – the initial value of the second pair of numbers –  a positive integer in the range [10... 90]
// In the third row – the difference between the initial and final values of the first pair of numbers –  a positive integer in the range [1... 9]
// In the fourth row – the difference between the initial and final values of the second pair of numbers – a positive integer in the range [1... 9]
// Print four-digit numbers in which the first two and second two digits are prime two-digit numbers.

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

function generateEvenPairs(
  initialFirstPair,
  initialSecondPair,
  firstPairDifference,
  secondPairDifference
) {
  let result = [];
  for (
    let i = initialFirstPair + 1;
    i < initialFirstPair + firstPairDifference + 1;
    i++
  ) {
    for (
      let j = initialSecondPair + 1;
      j < initialSecondPair + secondPairDifference + 1;
      j++
    ) {
      let firstPair = i * 100;
      let secondPair = j;
      let number = firstPair + secondPair;
      if (isPrime(i) && isPrime(j) && number.toString().length === 4) {
        result.push(number);
      }
    }
  }
  return result;
}

// Example usage:
console.log(generateEvenPairs(10, 20, 5, 5));
console.log(generateEvenPairs(10, 30, 9, 6));

// *******************************************************************************

// 27. Change
// Write a function that accepts an amount - the change that needs to be returned and calculates how many coins are needed.
// Sample input:
// input
// output
// explanation
// f(1.23)
// 4
// Our change is 1 lev and 23 stotinki. 4 coins: 1 lev coin, 20 stotinki coin, 2 stotinki coin and 1 stotinka coin
// f(2)
// 1
// Our change is 2 leva. 1 coin of 2 leva.
// f(0.56)
// 3
// Our change is 56 cents. 3 coins: a 50 stotinki coin, a 5 stotinki coin, and a 1 stotinka coin.
// f(2.73)
// 5
// Our change is 2 leva and 73 stotinki. The machine returns it to us with 5 coins: a 2 leva coin, a 50 stotinki coin, a 20 stotinki coin, a 2 stotinki coin, and a 1 stotinki coin.

function calculateCoins(amount) {
  let coins = 0;
  let denominations = [200, 100, 50, 20, 10, 5, 2, 1];

  amount *= 100;

  for (let denomination of denominations) {
    coins += Math.floor(amount / denomination);
    amount %= denomination;
  }

  return coins;
}

// Example usage
console.log(calculateCoins(1.23)); // Output: 4
console.log(calculateCoins(2)); // Output: 1
console.log(calculateCoins(0.56)); // Output: 3
console.log(calculateCoins(2.73)); // Output: 5

// *******************************************************************************

// 28.Pyramid of numbers
// Write a function that takes an integer n and prints a pyramid of numbers as in the examples:

function printPyramid(n) {
  let count = 1;
  let row = 1;
  let output = "";

  while (count <= n) {
    for (let i = 0; i < row; i++) {
      if (count > n) {
        break;
      }
      output += count;
      if (i !== row - 1) {
        output += " ";
      }
      count++;
    }
    output += "\n";
    row++;
  }

  console.log(output);
}

// Example usage:
printPyramid(7);
printPyramid(10);
printPyramid(15);

// *******************************************************************************

// 29.Unique codes
// Write a function that generates three-digit codes, with the digits of each code in a certain interval. For a code to be valid, it must meet the following conditions:
// The first and third digits must be even.
// The second digit must be a prime number in the range [2...7].
// Input
// You take 3 parameters:
// The upper limit of the first number - an integer in the range [1...9]
// The upper limit of the second number - an integer in the range [1...9]
// The upper limit of the third number - an integer in the range [1...9]
// Output
// Print on the console all valid three-digit codes whose digits correspond to the appropriate intervals.

function isPrime4(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

function generateCodes(firstLimit, secondLimit, thirdLimit) {
  for (let i = 2; i <= firstLimit; i += 2) {
    for (let j = 2; j <= secondLimit; j++) {
      if (isPrime4(j)) {
        for (let k = 2; k <= thirdLimit; k += 2) {
          console.log(`${i} ${j} ${k}`);
        }
      }
    }
  }
}

// Example usage:
generateCodes(3, 5, 5);
generateCodes(6, 2, 6);

// *******************************************************************************

// 30.Square of Asterisks
// Write a function that takes a number n and draws a square of n * n asterisks.  Between each two asterisks there is a whitespace.

function drawSquare(n) {
  // Iterate over each row
  for (let i = 0; i < n; i++) {
    let row = "";
    // Iterate over each column
    for (let j = 0; j < n; j++) {
      // Append an asterisk to the row string
      row += "* ";
    }
    // Print the row to the console
    console.log(row);
  }
}

// Example usage:
drawSquare(2);
drawSquare(3);

// *******************************************************************************

// 31.Half-Rhombus from asterisks
// Write a program that accepts a positive integer n and prints a rhombus of asterisks of size n as in the examples below:
// Sample input:
// input
// output
// f(1)
// *
// f(2)
// *
// * *
// *
// f(3)

// *
// * *
// * * *
// * *
// *
// f(4)

// *
// * *
// * * *
// * * * *
// * * *
// * *
// *

function printHalfRhombus(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += "* ";
    }
    console.log(row);
  }

  for (let i = n - 1; i > 0; i--) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

// Example usage:
printHalfRhombus(1);
printHalfRhombus(2);
printHalfRhombus(3);
printHalfRhombus(4);

// *******************************************************************************

// 32.Rhombus from asterisks
// Write a program that accepts a positive integer n and prints a rhombus of asterisks of size n as in the examples below:
// Sample input:
// input
// output
// f(1)
// *
// f(2)
//  *
// * *
//  *
// f(3)

//   *
//  * *
// * * *
//  * *
//   *
// f(4)

//    *
//   * *
//  * * *
// * * * *
//  * * *
//   * *
//    *

function printRhombus(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 0; j < n - i; j++) {
      row += " ";
    }

    for (let j = 0; j < i; j++) {
      row += "* ";
    }
    console.log(row);
  }

  for (let i = n - 1; i > 0; i--) {
    let row = "";

    for (let j = 0; j < n - i; j++) {
      row += " ";
    }

    for (let j = 0; j < i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

// Example usage:
printRhombus(1);
printRhombus(2);
printRhombus(3);
printRhombus(4);

// *******************************************************************************

// 33. Tree Pattern
// Input: A positive integer 'n' representing the height of the tree.
// Input
// Output
// f(6)
//      *
//     ***
//    *****
//   *******
//  *********
// ***********
//      *

// f(4)
//    *
//   ***
//  *****
// *******
//    *

// f(3)
//   *
//  ***
// *****
//   *

function printTree(n) {
  // Print branches
  for (let i = 1; i <= n; i++) {
    let row = "";
    // Add spaces
    for (let j = 0; j < n - i; j++) {
      row += " ";
    }
    // Add asterisks
    for (let j = 0; j < 2 * i - 1; j++) {
      row += "*";
    }
    console.log(row);
  }

  // Print trunk
  let trunkSpaces = " ".repeat(n - 1);
  console.log(trunkSpaces + "*");
}

// Example usage:
printTree(6);
printTree(4);
printTree(3);

// *******************************************************************************

// 34.Square frame
// Write a program that reads a positive integer  n and draws a square frame of size  n as in the examples below:

// f(3)
// + - +
// | - |
// + - +
// f(4)
// + - - +
// | - - |
// | - - |
// + - - +
// f(5)
// + - - - +
// | - - - |
// | - - - |
// | - - - |
// + - - - +

// f(6)
// + - - - - +
// | - - - - |
// | - - - - |
// | - - - - |
// | - - - - |
// + - - - - +

function drawSquareFrame(n) {
  console.log("+" + " -".repeat(n - 2) + " +");

  for (let i = 0; i < n - 2; i++) {
    console.log("|" + " -".repeat(n - 2) + " |");
  }

  if (n > 1) {
    console.log("+" + " -".repeat(n - 2) + " +");
  }
}

// Example usage:
drawSquareFrame(3);
drawSquareFrame(4);
drawSquareFrame(5);
drawSquareFrame(6);

// *******************************************************************************

// 35.Christmas Tree
// Write a program that receives a number  n  (1  ≤ n  ≤ 100) and prints a Christmas tree of size n as in the examples below:

// f(1)
//   |
// * | *
// f(2)
//    |
//  * | *
// ** | **
// f(3)
//     |
//   * | *
//  ** | **
// *** | ***
// f(4)
//      |
//    * | *
//   ** | **
//  *** | ***
// **** | ****

function christmasTree(n) {
  // Reads number of rows to be printed

  for (let i = 1; i <= n; i++) {
    // Prints leading spaces
    let spaces = "";
    for (let j = i; j < n; j++) {
      spaces += " ";
    }

    // Prints the left half of the pyramid pattern
    let leftHalf = "";
    for (let j = 1; j <= (2 * i - 1) / 2; j++) {
      leftHalf += "*";
    }

    // Prints the vertical bar in the middle
    let verticalBar = "|";

    // Prints the right half of the pyramid pattern
    let rightHalf = "";
    for (let j = (2 * i - 1) / 2 + 1; j <= 2 * i - 1; j++) {
      rightHalf += "*";
    }

    console.log(spaces + leftHalf + verticalBar + rightHalf);
  }
}

// Example usage
christmasTree(1);
console.log();
christmasTree(2);
console.log();
christmasTree(3);
console.log();
christmasTree(4);

// *******************************************************************************

// 36.Sunglasses
// Write a program that reads an integer n (3  ≤ n  ≤ 100) and prints sunglasses of size 5*n  x n as in the examples:
// Input
// Output
// f(3)
// ******   ******
// *////*|||*////*
// ******   ******
// f(4)
// ********    ********
// *//////*||||*//////*
// *//////*    *//////*
// ********    ********
// f(5)
// **********     **********
// *////////*     *////////*
// *////////*|||||*////////*
// *////////*     *////////*
// **********     **********

// Tips:
// Print the top row of glasses:
// 2*n asterisks; n spaces; 2*n asterisks
// Print the middle n-2 lines:
// asterisk; 2*n-2 slashes; asterisk; n spaces; asterisk; 2*n-2 slashes; asterisk
// On row (n-1) / 2 - 1, print n vertical bars instead of n spaces.
// Print the bottom row of glasses:
// 2*n asterisks; n spaces; 2*n asterisks

function sunglasses(n) {
  console.log("*".repeat(2 * n) + " ".repeat(n) + "*".repeat(2 * n));

  for (let i = 2; i <= n - 1; i++) {
    let middleRow = "*";
    middleRow += "/".repeat(2 * n - 2);
    middleRow += "*";
    if (i === Math.ceil(n / 2)) {
      middleRow += "|".repeat(n);
    } else {
      middleRow += " ".repeat(n);
    }
    middleRow += "*";
    middleRow += "/".repeat(2 * n - 2);
    middleRow += "*";
    console.log(middleRow);
  }

  // Print the bottom row of glasses
  console.log("*".repeat(2 * n) + " ".repeat(n) + "*".repeat(2 * n));
}

// Example usage
sunglasses(3);
console.log();
sunglasses(4);
console.log();
sunglasses(5);

// *******************************************************************************

// 37.House Pattern
// Input: A positive odd integer 'n' representing the height of the house.
// Input
// Output
// f(7)
//    *
//   ***
//  *****
// *******
// *     *
// *     *

// f(4)
//   * *
// * * * *
// *     *
// *     *
// f(3)
//   *
// * * *
// *   *
// *   *

function printHouse(n) {
  // Function to print a specific row of the pyramid
  function printRow(numStars, maxLength) {
    let numSpaces = (maxLength - numStars) / 2;
    console.log(" ".repeat(numSpaces) + "*".repeat(numStars));
  }

  let maxLength = n;

  if (n % 2 === 0) {
    // n is even, print rows with even indices (starting from 2)
    for (let row = 2; row <= n; row += 2) {
      printRow(row, maxLength);
    }
  } else {
    // n is odd, print rows with odd indices (starting from 1)
    for (let row = 1; row <= n; row += 2) {
      printRow(row, maxLength);
    }
  }
  // Print the two bottom rows with asterisks only at the ends
  const bottomRow = "*" + " ".repeat(n - 2) + "*";
  console.log(bottomRow);
  console.log(bottomRow);
}

// Example usage

printHouse(4);
printHouse(5);

//********************************************************************
// 38. Pyramid with Increasing Digits
// Input: A positive integer n; representing the number of rows.
function printPyramid2(n) {
  if (typeof n !== "number" || n <= 0) {
    console.error("Input must be a positive integer.");
    return;
  }

  for (let i = 1; i <= n; i++) {
    let row = "";

    row += " ".repeat(n - i);

    for (let j = i; j < 2 * i; j++) {
      row += j;
    }

    for (let j = 2 * i - 2; j >= i; j--) {
      row += j;
    }

    console.log(row);
  }
}

// Example usage
printPyramid2(5);
printPyramid2(4);
printPyramid2(3);

// **************************************************************************
// 39.Arrow Pattern
// Input: A positive integer n; representing the number of rows.

function createArrowPattern(n) {
  for (let i = 1; i <= n; i++) {
    let row = " ".repeat(n - i);
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }

  for (let i = 1; i <= n; i++) {
    const empty = n - Math.ceil((n + 1) / 2);
    let row = " ".repeat(empty) + "*".repeat(n);
    console.log(row);
  }
}

// Example usage:
createArrowPattern(8);

// *************************************************
// 40.Staircase Pattern
// Input: A positive integer &#39;n&#39; representing the number of steps.

function leftAlignedStaircaseWithSpaces(n) {
  let spaces = 0;

  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(spaces) + "*".repeat(i));

    if (i >= 2) {
      spaces += i - 1;
    }
  }
}

// Example usage:
leftAlignedStaircaseWithSpaces(5);
leftAlignedStaircaseWithSpaces(7);

// ********************************************
// 41.Hourglass Pattern

// Draw an hourglass pattern:

function hourglass(n) {
  const printLine = (spaces, stars, hollow = false) => {
    if (!hollow || stars <= 2) {
      console.log(" ".repeat(spaces) + "*".repeat(stars));
    } else {
      console.log(" ".repeat(spaces) + "*" + " ".repeat(stars - 2) + "*");
    }
  };

  // first row
  printLine(0, n + 2);

  // Downside pyramid
  const downsideRows = Math.floor((n + 2 - 1) / 2); // Calculate the number of rows for the downside pyramid
  for (let i = 1; i < downsideRows; i++) {
    printLine(i, n - 2 * i + 2, true);
  }

  // Middle row
  if (n % 2 !== 0) {
    printLine(downsideRows, 1);
  } else {
    printLine(downsideRows, 2);
  }

  // Upside pyramid
  for (let i = 1; i < downsideRows; i++) {
    printLine(downsideRows - i, n - 2 * (downsideRows - i) + 2, true);
  }

  //last row
  printLine(0, n + 2);
}

hourglass(5);

// ***************************************************************************
// 42.Left Arrow Pattern

// Draw a left arrow pattern:

function drawReversedLeftArrow(rows) {
  for (let i = 1; i <= rows; i++) {
    let line = "";
    for (let j = 1; j <= rows - i; j++) {
      line += " ";
    }
    for (let k = 1; k <= i; k++) {
      line += "*";
    }
    console.log(line);
  }

  for (let i = rows - 1; i >= 1; i--) {
    let line = "";
    for (let j = 1; j <= rows - i; j++) {
      line += " ";
    }
    for (let k = 1; k <= i; k++) {
      line += "*";
    }
    console.log(line);
  }
}

// Example usage
drawReversedLeftArrow(5);

// ***********************************************
// 43. Pyramid of numbers

// Write a function that takes an integer n and prints a pyramid of numbers, as in the
// examples:
// Sample input:
// 1
// 2 3
// 4 5 6
// 7
function printNumberPyramid3(n) {
  let number = 1;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += number + " ";
      number++;
      if (number > n) break;
    }
    console.log(row);
    if (number > n) break;
  }
}

// Example usage
printNumberPyramid3(5);

// *************************************
//  44. Alternative conditions
function printNumberPyramid8(n) {
  let number = 1;
  const maxRowLength = (n * (n + 1)) / 2; // Maximum total characters in the last row

  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += number + " ";
      number++;
      if (number > n) break;
    }

    let rowLength = row.trim().length;
    let padding = " ".repeat(maxRowLength - rowLength);
    console.log(padding + row.trim());

    if (number > n) break;
  }
}

// Example usage:
printNumberPyramid8(5);
printNumberPyramid8(10);
// ******************************************
// 45.Equal sum of odd and even positions

// Write a function that accepts two six-digit integers ranging from 100000 to 300000.
// Always the first number entered will be less than the second. On the console to print all
// numbers that are located between the two meeting the following condition:
//  the sum of the digits of even and odd positions shall be equal.
// If there are no numbers matching the console condition, “None” is displayed.

function findEqualSumNumbers(start, end) {
  const results = [];

  for (let num = start; num <= end; num++) {
    const numStr = num.toString();
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < numStr.length; i++) {
      const digit = parseInt(numStr[i]);
      if (i % 2 === 0) {
        oddSum += digit; // 0-based index: even positions are 0, 2, 4
      } else {
        evenSum += digit; // 0-based index: odd positions are 1, 3, 5
      }
    }

    if (oddSum === evenSum) {
      results.push(num);
    }
  }

  if (results.length === 0) {
    console.log("None");
  } else {
    results.forEach((number) => console.log(number));
  }
}

// Example usage:
findEqualSumNumbers(100000, 100050);
findEqualSumNumbers(299900, 300000);
findEqualSumNumbers(100115, 100120);

// ***************************************
// 46.Password Generator

// Write a function that takes two integers n and l and generates alphabetically all possible
// passwords that consist of the following 5 characters:
//  Symbol 1: digit from 1 to n.
//  Symbol 2: digit from 1 to n.
//  Symbol 3: lowercase letter among the first l letters of the Latin alphabet.
//  Symbol 4: a lowercase letter among the first l letters of the Latin alphabet.
//  Symbol 5: a digit from 1 to n, greater than the first 2 digits.
function generatePasswords(n, l) {
  const passwords = [];
  const letters = "abcdefghijklmnopqrstuvwxyz".substring(0, l);

  for (let d1 = 1; d1 <= n; d1++) {
    for (let d2 = 1; d2 <= n; d2++) {
      for (let c1 of letters) {
        for (let c2 of letters) {
          for (let d5 = 1; d5 <= n; d5++) {
            if (d5 > d1 && d5 > d2) {
              passwords.push(`${d1}${d2}${c1}${c2}${d5}`);
            }
          }
        }
      }
    }
  }

  return passwords;
}

// Example usage:
const n = 2;
const l = 4;
console.log(generatePasswords(n, l));

// *******************************
// 47. Special numbers

// Write a function that takes an integer n and generates all possible &quot;special&quot; numbers from
// 1111 to 9999. For a number to be &quot;special,&quot; it must meet the following condition:
// • n to be divided by each of its digits without a remainder.
// For example, n = 16, 2418 is a special number:
// • 16 / 2 = 8 without remainder
// • 16 / 4 = 4 without remainder
// • 16 / 1 = 16 without remainder
// • 16 / 8 = 2 without remainder

function specialNumbers(n) {
  const specialNums = [];

  for (let number = 1111; number <= 9999; number++) {
    const numStr = number.toString();
    let isSpecial = true;

    for (let digit of numStr) {
      if (digit === "0" || n % parseInt(digit) !== 0) {
        isSpecial = false;
        break;
      }
    }

    if (isSpecial) {
      specialNums.push(number);
    }
  }

  return specialNums;
}

// Example usage:

console.log(specialNumbers(3));
