/** --------------

                    *
                   **
                  ***
                 ****
                *****
               ******
              *******
             ********
            *********


            ----------------*/

let y = 10;
let x = 10;

let str = "";

for (let i = 1; i < y; i++) {
  for (let j = 1; j < x; j++) {
    if (i + j >= y) {
      str = str.concat("*");
    } else {
      str = str.concat(" ");
    }
  }
  str = str.concat("\n");
}

console.log(str);

/**_______________________



            *********
             ********
              *******
               ******
                *****
                 ****
                  ***
                   **
                    *


             _______________________*/

let str2 = "";

for (let i = 1; i < y; i++) {
  for (let j = 1; j < x; j++) {
    if (i <= j) {
      str2 = str2.concat("*");
    } else {
      str2 = str2.concat(" ");
    }
  }
  str2 = str2.concat("\n");
}

console.log(str2);

/**----------------------


            *
            **
            ***
            ****
            *****
            ******
            *******
            ********


             -------------------------*/

let str3 = "";

for (let i = 1; i < y; i++) {
  for (let j = 1; j < x; j++) {
    if (i >= j) {
      str3 = str3.concat("*");
    }
  }
  str3 = str3.concat("\n");
}

console.log(str3);

/**-------------------------


             *********
             ********
             *******
             ******
             *****
             ****
             ***
             **
             *

             ---------------------------*/
let str4 = "";

for (let i = 1; i < y; i++) {
  for (let j = 1; j < x; j++) {
    if (j >= i) {
      str4 = str4.concat("*");
    }
  }
  str4 = str4.concat("\n");
}

console.log(str4);

/**--------------------
             Diamond of Asterisks

                 *
                ***
               *****
              *******
             *********
              *******
               *****
                ***
                 *


             ---------------------*/

let str5 = "";

for (let i = 1; i < y; i++) {
  for (let j = 1; j < x; j++) {
    if (i <= y / 2 && j >= y / 2 - (i - 1) && j <= y / 2 + (i - 1)) {
      str5 = str5.concat("*");
    } else if (i >= y / 2 && j > (y / 2 - i) * -1 && j < y - (y / 2 - i) * -1) {
      str5 = str5.concat("*");
    } else {
      str5 = str5.concat(" ");
    }
  }
  str5 = str5.concat("\n");
}

console.log(str5);

// function hourglas(n) {
//   const printLine = (spaces, stars) => {
//     console.log(" ".repeat(spaces) + "*".repeat(stars));
//   };

//   // Downside pyramid
//   for (let i = 0; i < n; i++) {
//     printLine(i, (n - i) * 2 - 1);
//   }

//   // Upside pyramid
//   for (let i = 1; i < n; i++) {
//     printLine(n - i - 1, 2 * (i + 1) - 1);
//   }
// }

// hourglas(5);
function hourglas(n) {
  const printLine = (spaces, stars, hollow = false) => {
    if (!hollow || stars <= 2) {
      console.log(" ".repeat(spaces) + "*".repeat(stars));
    } else {
      console.log(" ".repeat(spaces) + "*" + " ".repeat(stars - 2) + "*");
    }
  };

  // Downside pyramid
  for (let i = 0; i < n; i++) {
    if (i === 0 || i === n - 1) {
      printLine(i, (n - i) * 2 - 1);
    } else {
      printLine(i, (n - i) * 2 - 1, true);
    }
  }

  // Upside pyramid
  for (let i = 1; i < n; i++) {
    if (i === n - 1) {
      printLine(n - i - 1, 2 * (i + 1) - 1);
    } else {
      printLine(n - i - 1, 2 * (i + 1) - 1, true);
    }
  }
}

hourglas(5);
function hourglass(n) {
  const printLine = (spaces, stars, hollow = false) => {
    if (!hollow || stars <= 2) {
      console.log(" ".repeat(spaces) + "*".repeat(stars));
    } else {
      console.log(" ".repeat(spaces) + "*" + " ".repeat(stars - 2) + "*");
    }
  };

  // Downside pyramid
  for (let i = 0; i < Math.ceil(n / 2); i++) {
    if (i === 0 || i === Math.ceil(n / 2) - 1) {
      printLine(i, (n - i) * 2 - 1);
    } else {
      printLine(i, (n - i) * 2 - 1, true);
    }
  }

  // Upside pyramid
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    if (i === 0) {
      printLine(i, (n - i) * 2 - 1);
    } else {
      printLine(i, (n - i) * 2 - 1, true);
    }
  }
}

hourglass(5);

function hourglass(n) {
  const printLine = (spaces, stars, hollow = false) => {
    if (!hollow || stars <= 2) {
      console.log(" ".repeat(spaces) + "*".repeat(stars));
    } else {
      console.log(" ".repeat(spaces) + "*" + " ".repeat(stars - 2) + "*");
    }
  };

  // Print the first row
  printLine(0, n + 2);

  // Downside pyramid
  for (let i = 0; i < Math.floor(n / 2); i++) {
    if (i === Math.floor(n / 2) - 1) {
      printLine(i + 1, n - 2 * (i + 1) + 2);
    } else {
      printLine(i + 1, n - 2 * (i + 1) + 2, true);
    }
  }

  // Upside pyramid
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    if (i === 0) {
      printLine(i, n + 2);
    } else {
      printLine(i, n + 2, true);
    }
  }

  // Print the last row
  printLine(0, n + 2);
}

hourglass(5);

function hourglass(n) {
  const printLine = (spaces, stars, hollow = false) => {
    if (!hollow || stars <= 2) {
      console.log(" ".repeat(spaces) + "*".repeat(stars));
    } else {
      console.log(" ".repeat(spaces) + "*" + " ".repeat(stars - 2) + "*");
    }
  };

  // Print the first row
  printLine(0, n + 2);

  // Downside pyramid
  for (let i = 0; i < Math.floor(n / 2); i++) {
    if (i === Math.floor(n / 2) - 1) {
      printLine(i + 1, n - 2 * (i + 1) + 2);
    } else {
      printLine(i + 1, n - 2 * (i + 1) + 2, true);
    }
  }

  // Upside pyramid
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    if (i === 0) {
      printLine(i, n + 2);
    } else {
      printLine(i, n + 2, true);
    }
  }

  // Print the last row
  printLine(0, n + 2);
}

hourglass(5);

function hourglass(n) {
  const printLine = (spaces, stars, hollow = false) => {
    if (!hollow || stars <= 2) {
      console.log(" ".repeat(spaces) + "*".repeat(stars));
    } else {
      console.log(" ".repeat(spaces) + "*" + " ".repeat(stars - 2) + "*");
    }
  };

  // Print the first row
  printLine(0, n + 2);

  // Downside pyramid
  const downsideRows = Math.floor((n + 2 - 1) / 2); // Calculate the number of rows for the downside pyramid
  for (let i = 1; i <= downsideRows; i++) {
    if (i === downsideRows) {
      printLine(i, n - 2 * i + 2);
    } else {
      printLine(i, n - 2 * i + 2, true);
    }
  }

  // Upside pyramid
  const upsideRows = Math.ceil((n + 2 - 1) / 2); // Calculate the number of rows for the upside pyramid
  // for (let i = upsideRows; i >= 1; i--) {
  //     if (i === 1) {
  //         printLine(i - 1, n + 2);
  //     } else {
  //         printLine(i - 1, n , true);
  //     }
  // }
  for (let i = 1; i <= downsideRows; i++) {
    let numSpaces = n - 2 * i + 2;
    if (i === downsideRows) {
      printLine(i, numSpaces);
    } else {
      printLine(i, numSpaces, true);
    }
  }
}

hourglass(5);

// Working:
// function hourglass(n) {
//   const printLine = (spaces, stars, hollow = false) => {
//       if (!hollow || stars <= 2) {
//           console.log(" ".repeat(spaces) + "*".repeat(stars));
//       } else {
//           console.log(" ".repeat(spaces) + "*" + " ".repeat(stars - 2) + "*");
//       }
//   };

//   // Print the first row
//   printLine(0, n + 2);

//   // Downside pyramid
//   const downsideRows = Math.floor(((n+2) - 1) / 2); // Calculate the number of rows for the downside pyramid
//   for (let i = 1; i <= downsideRows; i++) {
//       if (i === downsideRows) {
//           printLine(i, (n - 2 * i) + 2);
//       } else {
//           printLine(i, (n - 2 * i) + 2, true);
//       }
//   }

//   // Upside pyramid
//   const upsideRows = Math.ceil(((n+2) - 1) / 2); // Calculate the number of rows for the upside pyramid
//   for (let i = downsideRows; i >= 1; i--) {
//       if (i === downsideRows) {
//           printLine(i, (n - 2 * i) + 2);
//       } else {
//           printLine(i, (n - 2 * i) + 2, true);
//       }
//   }

//   // Print the last row
//   printLine(0, n + 2);
// }

// hourglass(5);

function hourglass(n) {
  const printLine = (spaces, stars, hollow = false) => {
    if (!hollow || stars <= 2) {
      console.log(" ".repeat(spaces) + "*".repeat(stars));
    } else {
      console.log(" ".repeat(spaces) + "*" + " ".repeat(stars - 2) + "*");
    }
  };

  // Print the first row
  printLine(0, n + 2);

  // Downside pyramid
  const downsideRows = Math.floor((n + 2 - 1) / 2); // Calculate the number of rows for the downside pyramid
  for (let i = 1; i < downsideRows; i++) {
    printLine(i, n - 2 * i + 2, true);
  }

  // Upside pyramid
  for (let i = 1; i < downsideRows; i++) {
    printLine(downsideRows - i, n - 2 * (downsideRows - i) + 2, true);
  }

  // Print the last row
  printLine(0, n + 2);
}

hourglass(5);

function staircase(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(i);
    let hashes = "#".repeat(i - 1);
    console.log(spaces + hashes);
  }
}

staircase(5);

function staircase2(n) {
  for (let i = 1; i <= n; i++) {
    console.log("#".repeat(i).padStart(n));
  }
}
staircase2(6);

function staircase6(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let hashes = "#".repeat(i);
    console.log(spaces + hashes);
  }
}

staircase6(5);

function staircase7(n) {
  for (let i = 1; i <= 2; i++) {
    let str = "# ";
    console.log(str.repeat(i));
  }
  for (let i = 3; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let hashes = "#".repeat(i);
    console.log(spaces + hashes);
  }
}

staircase7(5);

function staircase8(n) {
  for (let i = 1; i <= 2; i++) {
    let str = "#";
    console.log(str.repeat(i));
  }
  let counter = 2;
  for (let i = 3; i <= n; i++) {
    let spaces = " ".repeat(counter);
    counter++;
    let hashes = "#".repeat(i);

    console.log(spaces + hashes);
  }
}

staircase8(5);

function staircase8(n) {
  for (let i = 1; i <= 2; i++) {
    let str = "#";
    console.log(str.repeat(i));
  }
  let counter = 2;
  for (let i = 3; i <= n; i++) {
    let spaces = " ".repeat(i - 2);
    counter++;
    let hashes = "#".repeat(counter);

    console.log(spaces + hashes);
  }
}

staircase8(5);
function staircase8(n) {
  for (let i = 1; i <= 2; i++) {
    let str = "#";
    console.log(str.repeat(i));
  }
  let counter = 2;
  for (let i = 3; i <= n; i++) {
    let spaces = " ".repeat(i - counter);
    counter++;
    let hashes = "#".repeat(i);

    console.log(spaces + hashes);
  }
}

staircase8(5);

function staircase8(n) {
  for (let i = 1; i <= 2; i++) {
    let str = "#";
    console.log(str.repeat(i));
  }
  let counter = 2;
  for (let i = 3; i <= n; i++) {
    counter = i - 1;
    let spaces = " ".repeat(i - (i + 1 - counter));

    let hashes = "#".repeat(i);
    if (i === 3) {
      console.log(spaces + hashes);
    } else {
      spaces = " ".repeat(i - (i + 1 - counter) + 2);
      console.log(spaces + hashes);
    }
  }
}

staircase8(5);

let n = 5;
for (let i = 1; i <= n; i++) {
  let spaces = " ".repeat(i - 1);
  let str = "*";
  console.log(spaces + str.repeat(i));
}

let n = 5;
for (let i = 1; i <= n; i++) {
  let str = "*";
  let counter = i - 1;
  console.log(" ".repeat(i - 1) + str.repeat(i));
}

function leftAlignedStaircaseWithSpaces(n) {
  let spaces = 0;
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(spaces) + "*".repeat(i));

    // Adjust the spaces based on the value of i
    if (i === 2) {
      spaces += 1;
    } else if (i === 3) {
      spaces += 2;
    } else if (i === 4) {
      spaces += 3;
    } else if (i === 5) {
      spaces += 4;
    } else if (i === 6) {
      spaces += 5;
    }
  }
}
function compareArrays(arr1, arr2) {
  // Check if arrays are identical
  const areIdentical = JSON.stringify(arr1) === JSON.stringify(arr2);

  if (areIdentical) {
    // Calculate the sum of the first array
    const sum = arr1.reduce((acc, curr) => acc + parseInt(curr), 0);
    console.log(`Arrays are identical. Sum: ${sum}`);
  } else {
    // Find the first index where arrays differ
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
const input1 = ["10", "20", "30"];
const input2 = ["10", "20", "30"];
compareArrays(input1, input2); // Output: Arrays are identical. Sum: 60

const input3 = ["1", "2", "3", "4", "5"];
const input4 = ["1", "2", "4", "4", "5"];
compareArrays(input3, input4); // Output: Arrays are not identical. Found difference at 2 index

const input5 = ["1"];
const input6 = ["10"];
compareArrays(input5, input6); // Output: Arrays are not identical. Found difference at 0 index

function rotateArray(arr, rotations) {
  rotations %= arr.length; // Handle cases where rotations exceed the array length
  const rotatedPart = arr.slice(-rotations); // Extract the last 'rotations' elements
  const restPart = arr.slice(0, -rotations); // Extract the elements except the last 'rotations' ones
  const rotatedArray = rotatedPart.concat(restPart); // Concatenate the rotated and rest parts
  return rotatedArray.join(" "); // Join elements into a single string separated by a space
}

// Example usage:
const input1 = ["1", "2", "3", "4"];
console.log(rotateArray(input1, 2)); // Output: 3 4 1 2

const input2 = ["Banana", "Orange", "Coconut", "Apple"];
console.log(rotateArray(input2, 15)); // Output: Orange Coconut Apple Banana
