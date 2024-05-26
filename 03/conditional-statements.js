// 01. Check for an excellent rating
// Write a console program that reads a rating (decimal number) entered by the user and prints "Excellent!" if the rating is 5.50 or higher.

function checkRating(rating) {
  const isValidRating = validateRating(rating);

  if (!isValidRating) {
    console.error("Invalid input. Please enter a valid decimal number.");
    return;
  }

  if (rating >= 5.5) {
    console.log("Excellent!");
  }
}

function validateRating(rating) {
  return typeof rating === "number" && !isNaN(rating);
}

// Example usage:
checkRating(6); // Output: Excellent!
checkRating(5); // Output: no output
checkRating(5.51); // Output: Excellent!
checkRating(5.501); // Output: Excellent!
checkRating("invalid"); // Output: Invalid input. Please enter a valid decimal number.

// **************************************************************************************************************************************************

// 02. Larger number
// Write a function that reads accepts two integers and prints the larger of the two.

function findLargerNumber(num1, num2) {
  if (!isValidInteger(num1) || !isValidInteger(num2)) {
    console.error("Invalid input. Please enter two integers.");
    return;
  }

  const largerNumber = Math.max(num1, num2);
  console.log(largerNumber);
}

function isValidInteger(num) {
  return Number.isInteger(num);
}

// Example usage:
findLargerNumber(2, 4); // Output: 4
findLargerNumber(7, 12); // Output: 12
findLargerNumber(-1, -5); // Output: -1
findLargerNumber(3.5, 5); // Output: Invalid input. Please enter two integers.

// **************************************************************************************************************************************************

// 03. Number from 0 to 9 in words
// Write a function that gets an integer in the range [0... 9] and spells it out in words in English. If the number is out of range, it spells out "too big".

function spellNumber(num) {
  const numberWords = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  // Check if the input is a valid number
  if (!Number.isInteger(num)) {
    console.error("Error: Input is not a valid integer.");
    return;
  }

  // Check if the number is within the range [0, 9]
  if (num < 0 || num > 9) {
    console.log(
      "Error: Number is out of range. Please provide a number between 0 and 9 (inclusive)."
    );
    return;
  }

  console.log(numberWords[num]);
}

// Example usage:
spellNumber(7); // Output: seven
spellNumber(5); // Output: five
spellNumber(10); // Output: Error: Number is out of range. Please provide a number between 0 and 9 (inclusive).
spellNumber("test"); // Output: Error: Input is not a valid integer.

// **************************************************************************************************************************************************

// 04.Face of figures
// Write a function that takes the look and dimensions of a geometric figure and calculates its face.
// The figures are of four types: square, rectangle, circle, and triangle. The first parameter is the type of figure (square, rectangle, circle, or triangle).
// If the figure is a square, the next parameter is a number - the length of its side.
// If the figure is a rectangle, the next two parameters produce two numbers - the lengths of its sides.
// If the figure is a circle, the next parameter is a number - the radius of the circle.
// If the figure is a triangle, the next two parameters produce two numbers - the length of its side and the length of the height to it.
// Round the result to 2 decimal places.

function calculateFigureArea(figureType, ...params) {
  const figureTypes = {
    square: {
      paramCount: 1,
      paramTypes: ["number"],
      errorMsg:
        "Invalid parameters for square. Please provide a single number.",
    },
    rectangle: {
      paramCount: 2,
      paramTypes: ["number", "number"],
      errorMsg: "Invalid parameters for rectangle. Please provide two numbers.",
    },
    triangle: {
      paramCount: 2,
      paramTypes: ["number", "number"],
      errorMsg: "Invalid parameters for triangle. Please provide two numbers.",
    },
    circle: {
      paramCount: 1,
      paramTypes: ["number"],
      errorMsg: "Invalid parameter for circle. Please provide a single number.",
    },
  };

  const figure = figureTypes[figureType];
  if (!figure) {
    console.error("Invalid figure type.");
    return;
  }

  if (
    params.length !== figure.paramCount ||
    !params.every((param, index) => typeof param === figure.paramTypes[index])
  ) {
    console.error(figure.errorMsg);
    return;
  }

  const area = calculateArea(figureType, params);
  console.log(area.toFixed(2));
}

function calculateArea(figureType, params) {
  switch (figureType) {
    case "square":
      return calculateSquareArea(params[0]);
    case "rectangle":
      return calculateRectangleArea(params[0], params[1]);
    case "triangle":
      return calculateTriangleArea(params[0], params[1]);
    case "circle":
      return calculateCircleArea(params[0]);
  }
}

function calculateSquareArea(side) {
  return side * side;
}

function calculateRectangleArea(length, width) {
  return length * width;
}

function calculateTriangleArea(base, height) {
  return 0.5 * base * height;
}

function calculateCircleArea(radius) {
  return Math.PI * radius * radius;
}

// Example usage:
calculateFigureArea("square", 5); // Output: 25.00
calculateFigureArea("rectangle", 10, 3.5); // Output: 35.00
calculateFigureArea("triangle", 4.5, 20); // Output: 45.00
calculateFigureArea("circle", 10); // Output: 314.16

// **************************************************************************************************************************************************

// 05.Day of the week
// Write a function that receives an integer and prints a day of the week (in English), within the limits [1...7] or prints "Error" in case the entered number is invalid.

function printDayOfWeek(number) {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  if (Number.isInteger(number) && number >= 1 && number <= 7) {
    console.log(daysOfWeek[number - 1]);
  } else {
    console.log("Error");
  }
}

// Example usage:
printDayOfWeek(1); // Output: Monday
printDayOfWeek(2); // Output: Tuesday
printDayOfWeek(3); // Output: Wednesday
printDayOfWeek(4); // Output: Thursday
printDayOfWeek(5); // Output: Friday
printDayOfWeek(6); // Output: Saturday
printDayOfWeek(7); // Output: Sunday
printDayOfWeek(8); // Output: Error

// **************************************************************************************************************************************************

// 06. Even or odd
// Write a function that receives an integer and prints on the console, whether even or odd.

function checkEvenOrOdd(number) {
  if (Number.isInteger(number)) {
    if (number % 2 === 0) {
      console.log("even");
    } else {
      console.log("odd");
    }
  } else {
    console.error("Invalid input. Please provide an integer.");
  }
}

// Example usage:
checkEvenOrOdd(2); // Output: even
checkEvenOrOdd(3); // Output: odd
checkEvenOrOdd(25); // Output: odd
checkEvenOrOdd(1024); // Output: even
checkEvenOrOdd("test"); // Output: Invalid input. Please provide an integer.

// **************************************************************************************************************************************************

// 07.Speed
// Write a program that receives speed (real number) and prints speed information.

function printSpeedInformation(speed) {
  if (typeof speed !== "number" || isNaN(speed)) {
    console.error("Invalid input. Please provide a valid number.");
    return;
  }

  if (speed <= 10) {
    console.log("slow");
  } else if (speed <= 60) {
    console.log("average");
  } else if (speed <= 120) {
    console.log("fast");
  } else if (speed <= 160) {
    console.log("super-fast");
  } else {
    console.log("turbo-fast");
  }
}

// Example usage:
printSpeedInformation(10); // Output: slow
printSpeedInformation(59); // Output: average
printSpeedInformation(120); // Output: fast
printSpeedInformation(121); // Output: super-fast
printSpeedInformation(183); // Output: turbo-fast
printSpeedInformation(59.99); // Output: average
printSpeedInformation(60.001); // Output: fast

// **************************************************************************************************************************************************

// 08.Alarm after 15 minutes
// Write a function that takes an hour and minutes of a 24-hour day and calculates what time it will be after 15 minutes. Print the result in hours:minutes format.

function calculateAlarmTime(hour, minute) {
  // Convert hour and minute to total minutes
  let totalMinutes = hour * 60 + minute;

  // Add 15 minutes
  totalMinutes += 15;

  // Calculate new hour and minute
  const newHour = Math.floor(totalMinutes / 60) % 24; // Ensure the hour stays within 0-23 range
  const newMinute = totalMinutes % 60;

  // Format the output
  const formattedHour = String(newHour).padStart(2, "0"); // Add leading zero if necessary
  const formattedMinute = String(newMinute).padStart(2, "0"); // Add leading zero if necessary

  // Print the result
  console.log(`${formattedHour}:${formattedMinute}`);
}

// Example usage:
calculateAlarmTime(1, 47); // Output: 2:02
calculateAlarmTime(0, 2); // Output: 0:17
calculateAlarmTime(23, 59); // Output: 0:14
calculateAlarmTime(11, 7); // Output: 11:22
calculateAlarmTime(12, 48); // Output: 13:03

// **************************************************************************************************************************************************

// 09.Address by age and gender
// Write a console program that assumes age (real number) and gender ('m' or 'f'), and prints a reference among the following:
// "Mr." — male (sex 'm') 16 years of age or older
// "Master" – boy (gender 'm') under 16 years
// "Ms." — woman (sex 'f') 16 years of age or older
// "Miss" – girl (gender 'f') under 16

function printAddressByAgeAndGender(age, gender) {
  if (!isValidAge(age) || !isValidGender(gender)) {
    console.error(
      "Invalid input. Please provide a valid age (a number) and gender ('m' or 'f')."
    );
    return;
  }

  if (gender === "m") {
    if (age >= 16) {
      console.log("Mr.");
    } else {
      console.log("Master");
    }
  } else {
    // gender === 'f'
    if (age >= 16) {
      console.log("Ms.");
    } else {
      console.log("Miss");
    }
  }
}

function isValidAge(age) {
  return typeof age === "number" && !isNaN(age) && age >= 0;
}

function isValidGender(gender) {
  return gender === "m" || gender === "f";
}

// Example usage:
printAddressByAgeAndGender(14, "f"); // Output: Miss
printAddressByAgeAndGender(17, "m"); // Output: Mr.
printAddressByAgeAndGender(10, "m"); // Output: Master
printAddressByAgeAndGender(32, "f"); // Output: Ms.

// **************************************************************************************************************************************************

// 10.Grocery
// A chain of stores opens groceries in several cities and sells at different prices according to the city:

// City / Product
// tea
// water
// juice
// sweets
// chips
// Sofia
// 0.50
// 0.80
// 1.20
// 1.45
// 1.60
// Plovdiv
// 0.40
// 0.70
// 1.15
// 1.30
// 1.50
// Varna
// 0.45
// 0.70
// 1.10
// 1.35
// 1.55

// Write a program that accepts a product (string), city (string) and quantity (decimal number) and calculates and prints how much the corresponding quantity of the selected product costs in the specified city.

function calculateProductCost(product, city, quantity) {
  const prices = {
    Sofia: { tea: 0.5, water: 0.8, juice: 1.2, sweets: 1.45, chips: 1.6 },
    Plovdiv: { tea: 0.4, water: 0.7, juice: 1.15, sweets: 1.3, chips: 1.5 },
    Varna: { tea: 0.45, water: 0.7, juice: 1.1, sweets: 1.35, chips: 1.55 },
  };

  if (!Object.hasOwnProperty.call(prices, city)) {
    console.error("Invalid city.");
    return;
  }

  const cityPrices = prices[city];
  if (!(product in cityPrices)) {
    console.error("Invalid product.");
    return;
  }

  const price = cityPrices[product];
  const totalCost = price * quantity;
  console.log(totalCost.toFixed(2));
}

// Example usage:
calculateProductCost("tea", "Varna", 2); // Output: 0.90
calculateProductCost("chips", "Plovdiv", 1); // Output: 1.50
calculateProductCost("juice", "Sofia", 6); // Output: 7.20
calculateProductCost("sweets", "Plovdiv", 1); // Output: 1.50

// **************************************************************************************************************************************************

// 11.Number in the range
// Write a program that checks whether the received number is in the range [-100, 100] and is different from 0 and outputs "Yes" if it meets the conditions, or "No" if it is outside them.

function checkNumberInRange(number) {
  if (typeof number !== "number") {
    console.error("Invalid input. Please provide a number.");
    return;
  }

  if (number !== 0 && number >= -100 && number <= 100) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

// Example usage:
checkNumberInRange(-25); // Output: Yes
checkNumberInRange(0); // Output: No
checkNumberInRange(25); // Output: Yes

// **************************************************************************************************************************************************

// 12.Simple Calculator
// Write a function that receives two numbers and an operation and prints the result of it.

function simpleCalculator(num1, num2, operation) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    console.error("Invalid input. Please provide valid numbers.");
    return;
  }

  let result = 0;

  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "divide":
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        console.error("Division by zero is not allowed.");
        return;
      }
      break;
    case "multiply":
      result = num1 * num2;
      break;
    default:
      console.error("Invalid operation.");
      return;
  }

  const isWholeNumber = result % 1 === 0;

  let formattedResult;
  if (isWholeNumber) {
    formattedResult = parseInt(result);
  } else {
    formattedResult = parseFloat(result.toFixed(2));
  }

  console.log(formattedResult);
}

// Example usage:
simpleCalculator(5, 5, "add"); // Output: 10
simpleCalculator(10, 12, "subtract"); // Output: -2
simpleCalculator(9, 3, "divide"); // Output: 3
simpleCalculator(5, 2, "divide"); // Output: 2.5
simpleCalculator(3.1, 0.1, "multiply"); // Output: 0.31
simpleCalculator(3.1, "test", "add"); // Output: Invalid input. Please provide valid numbers.
simpleCalculator(3.1, 0, "divide"); // Output: Division by zero is not allowed.
simpleCalculator(3.1, 0, "unknown"); // Output: Invalid operation.

// **************************************************************************************************************************************************

// 13.Vegetable Market
// The vegetable market works on working days at the following prices:
// vegetable
// tomato
// onion
// lettuce
// cucumber
// pepper
// price
// 2.50
// 1.20
// 0.85
// 1.45
// 5.50
// Saturday and Sunday the stock exchange operates at higher prices:
// vegetable
// tomato
// onion
// lettuce
// cucumber
// pepper
// price
// 2.80
// 1.30
// 0.85
// 1.75
// 3.50

// Write a program that accepts vegetable (tomato / onion / lettuce / cucumber / pepper), day of the week (Monday / Tuesday / Wednesday / Thursday / Friday / Saturday / Sunday) and quantity (real number) and calculates the price according to the prices in the tables above.
// Print the result rounded by 2 decimal places.
// In case of an invalid day of the week or invalid vegetable name, print "error".

function calculateVegetablePrice(vegetable, dayOfWeek, quantity) {
  const weekdayPrices = {
    tomato: 2.5,
    onion: 1.2,
    lettuce: 0.85,
    cucumber: 1.45,
    pepper: 5.5,
  };

  const weekendPrices = {
    tomato: 2.8,
    onion: 1.3,
    lettuce: 0.85,
    cucumber: 1.75,
    pepper: 3.5,
  };

  let price = 0;

  switch (dayOfWeek.toLowerCase()) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
      price = weekdayPrices[vegetable];
      break;
    case "saturday":
    case "sunday":
      price = weekendPrices[vegetable];
      break;
    default:
      console.error("Invalid day of the week.");
      return;
  }

  if (price === undefined) {
    console.error("Error: Invalid vegetable name.");
    return;
  }

  console.log((price * quantity).toFixed(2));
}

// Example usage:
calculateVegetablePrice("tomato", "Tuesday", 2); // Output: 5.00
calculateVegetablePrice("onion", "Sunday", 3); // Output: 3.90
calculateVegetablePrice("pepper", "Monday", 10); // Output: 55.00
calculateVegetablePrice("banana", "Friday", 5); // Output: Error: Invalid vegetable name.


// 2 variant

// function calculateVegetablePrice(vegetable, dayOfWeek, quantity) {
//   let price = 0;
//   const lowerCaseDayOfWeek = dayOfWeek.toLowerCase();
//   const lowerCaseVegetable = vegetable.toLowerCase();
  
//   const isWeekday = lowerCaseDayOfWeek === "monday" || lowerCaseDayOfWeek === "tuesday" ||
//                     lowerCaseDayOfWeek === "wednesday" || lowerCaseDayOfWeek === "thursday" ||
//                     lowerCaseDayOfWeek === "friday";
//   const isWeekend = lowerCaseDayOfWeek === "saturday" || lowerCaseDayOfWeek === "sunday";
 
//   if (!isWeekday && !isWeekend) {
//     console.error("Invalid day of the week.");
//     return;
//   }
 
//   if (lowerCaseVegetable === "tomato") {
//     if (isWeekday) {
//       price = 2.5;
//     } else {
//       price = 2.8;
//     }
//   } else if (lowerCaseVegetable === "onion") {
//     if (isWeekday) {
//       price = 1.2;
//     } else {
//       price = 1.3;
//     }
//   } else if (lowerCaseVegetable === "lettuce") {
//     price = 0.85; // same price for both weekday and weekend
//   } else if (lowerCaseVegetable === "cucumber") {
//     if (isWeekday) {
//       price = 1.45;
//     } else {
//       price = 1.75;
//     }
//   } else if (lowerCaseVegetable === "pepper") {
//     if (isWeekday) {
//       price = 5.5;
//     } else {
//       price = 3.5;
//     }
//   } else {
//     console.error("Error: Invalid vegetable name.");
//     return;
//   }
 
//   console.log((price * quantity).toFixed(2));
// }
 
// // Example usage:
// calculateVegetablePrice("tomato", "Tuesday", 2); // Output: 5.00
// calculateVegetablePrice("onion", "Sunday", 3); // Output: 3.90
// calculateVegetablePrice("pepper", "Monday", 10); // Output: 55.00
// calculateVegetablePrice("banana", "Friday", 5); // Output: Error: Invalid vegetable name.

// **************************************************************************************************************************************************

// 14. Holiday
// A young programmer has a certain budget and free time in each season. Write a program that accepts the budget and the season and calculates where the programmer will go on vacation and how much he will spend from his budget.

function holiday(budget, season) {
  let destination = "";
  let typeOfHoliday = "";
  let amountSpent = 0;

  if (budget <= 100) {
    destination = "Bulgaria";
    if (season === "summer") {
      typeOfHoliday = "Camp";
      amountSpent = budget * 0.3;
    } else if (season === "winter") {
      typeOfHoliday = "Hotel";
      amountSpent = budget * 0.7;
    }
  } else if (budget <= 1000) {
    destination = "Europe";
    if (season === "summer") {
      typeOfHoliday = "Camp";
      amountSpent = budget * 0.4;
    } else if (season === "winter") {
      typeOfHoliday = "Hotel";
      amountSpent = budget * 0.8;
    }
  } else {
    destination = "Asia";
    typeOfHoliday = "Hotel";
    amountSpent = budget * 0.9;
  }

  amountSpent = Math.round(amountSpent * 100) / 100;

  console.log(`Somewhere in ${destination}`);
  console.log(`${typeOfHoliday} - ${amountSpent.toFixed(2)}`);
}

// Example usage:
holiday(50, "summer"); // Output:
// Somewhere in Bulgaria
// Camp - 15.00
holiday(75, "winter"); // Output:
// Somewhere in Bulgaria
// Hotel - 52.50
holiday(312, "summer"); // Output:
// Somewhere in Europe
// Camp - 124.80
holiday(678.53, "winter"); // Output:
// Somewhere in Bulgaria
// Hotel - 542.82
holiday(1500, "summer"); // Output:
// Somewhere in Asia
// Hotel - 1350.00

// **************************************************************************************************************************************************

// 15.Makeup Shop
// Write a program that calculates the profit from the order in a makeup shop.

function makeupShop(
  renovationPrice,
  powders,
  lipsticks,
  spirals,
  shadows,
  correctors
) {
  const prices = {
    powder: 2.6,
    lipstick: 3,
    spiral: 4.1,
    shadows: 8.2,
    concealer: 2,
  };

  const totalCount = powders + lipsticks + spirals + shadows + correctors;
  let totalPrice =
    powders * prices.powder +
    lipsticks * prices.lipstick +
    spirals * prices.spiral +
    shadows * prices.shadows +
    correctors * prices.concealer;
  let discount = 0;

  if (totalCount >= 50) {
    discount = totalPrice * 0.25;
    totalPrice -= discount;
  }

  const rent = totalPrice * 0.1;
  const profit = totalPrice - rent;

  const remainingMoney = profit - renovationPrice; // Corrected this line

  if (remainingMoney >= 0) {
    console.log(`Yes! ${remainingMoney.toFixed(2)} BGN left.`);
  } else {
    console.log(
      `Not enough money! ${Math.abs(remainingMoney).toFixed(2)} BGN needed.`
    );
  }
}

// Example usage:
makeupShop(40.8, 20, 25, 30, 50, 10); // Output: Yes! 418.20 BGN left.
makeupShop(320, 8, 2, 5, 5, 1); // Output: Not enough money! 238.73 BGN needed.

// **************************************************************************************************************************************************

// 16. At sea
// Calculate how much will cost a vacation. There are the following types of accommodation, with the following prices for staying:
// "single room" – 25.00 BGN per night
// "apartment" – 50.00 BGN per night
// "presidential" – 100.00 BGN per night
// Regarding the number of days of the vacation (example: 11 days = 10 nights) and the type of room chosen, there is a different discount. The discounts are as follows:
// room
// under 10 days
// between 10 and 15
// over 15 days
// single room
// No discount
// No discount
// No discount
// apartment
// 30% of the final price
// 35% of the final price
// 50% of the final price
// presidential
// 10% of the final price
// 15% of the final price
// 20% of the final price

// After the stay, the assessment of the hotel's services may be positive or negative.
// If the assessment is positive, add 25% to the price with the already deducted discount.
// If the assessment is negative, deduct 10% from the price.
// Input
// You take 3 parameters:
// First - days to stay - integer in the range [0...365]
// Second - type of room - "single room", "apartment" or "president apartment"
// Third - assessment - "positive" or "negative"
// Output
// One line should be printed on the console:
// The price for the stay at the hotel, formatted to two decimal places.

function calculateVacationCost(days, roomType, assessment) {
  let nights = days - 1;
  let basePrice = 0;
  let discount = 0;

  switch (roomType) {
    case "single room":
      basePrice = nights * 25.0;
      break;
    case "apartment":
      basePrice = nights * 50.0;
      if (nights < 10) {
        discount = basePrice * 0.3;
      } else if (nights >= 10 && nights <= 15) {
        discount = basePrice * 0.35;
      } else if (nights > 15) {
        discount = basePrice * 0.5;
      }
      break;
    case "presidential":
      basePrice = nights * 100.0;
      if (nights < 10) {
        discount = basePrice * 0.1;
      } else if (nights >= 10 && nights <= 15) {
        discount = basePrice * 0.15;
      } else if (nights > 15) {
        discount = basePrice * 0.2;
      }
      break;
    default:
      console.log("Invalid room type");
      return;
  }

  let priceWithDiscount = basePrice - discount;

  if (assessment === "positive") {
    priceWithDiscount *= 1.25;
  } else if (assessment === "negative") {
    priceWithDiscount *= 0.9;
  }

  console.log(
    `The price for the stay at the hotel is ${priceWithDiscount.toFixed(2)} BGN`
  );
}

// Example usage:
calculateVacationCost(11, "apartment", "positive"); // Output: 264.06
calculateVacationCost(30, "presidential", "negative"); // Output: 2088.00
calculateVacationCost(12, "single room", "positive"); // Output: 343.75
calculateVacationCost(2, "apartment", "positive"); // Output: 43.75

// **************************************************************************************************************************************************

// 17.Leap Year Checker
// Write a console program that takes a year as input and tells the user if it's a leap year or not.

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

function leapYearChecker(year) {
  if (isLeapYear(year)) {
    console.log(`${year} It's a leap year!`);
  } else {
    console.log(`${year} It's not a leap year.`);
  }
}

// Example usage:
leapYearChecker(2020); // Output: 2020 It's a leap year!
leapYearChecker(1900); // Output: 1900 It's not a leap year.
leapYearChecker(2000); // Output: 2000 It's a leap year!
leapYearChecker(2023); // Output: 2023 It's not a leap year.
leapYearChecker(1600); // Output: 1600 It's a leap year!

// **************************************************************************************************************************************************

// 18.Movie Ticket Price
// Write a console program that determines the price of a movie ticket based on age:

// Child (0-12 years): $5
// Teen (13-19 years): $8
// Adult (20+ years): $10

function movieTicketPrice(age) {
  let price;

  if (age <= 12) {
    price = "$5";
  } else if (age <= 19) {
    price = "$8";
  } else {
    price = "$10";
  }

  console.log(price);
}

// Example usage:
movieTicketPrice(10); // Output: $5
movieTicketPrice(16); // Output: $8
movieTicketPrice(25); // Output: $10
movieTicketPrice(13); // Output: $8

// **************************************************************************************************************************************************

// 19. Days in a Month
// Write a console program that takes a month number (1 to 12) as input and outputs the number of days in that month. Assume it's not a leap year.

function daysInMonth(month) {
  let days;

  switch (month) {
    case 1: // January
    case 3: // March
    case 5: // May
    case 7: // July
    case 8: // August
    case 10: // October
    case 12: // December
      days = 31;
      break;
    case 4: // April
    case 6: // June
    case 9: // September
    case 11: // November
      days = 30;
      break;
    case 2: // February
      days = 28;
      break;
    default:
      console.error(
        "Invalid month number. Please enter a number between 1 and 12."
      );
      return;
  }

  console.log(days);
}

// Example usage:
daysInMonth(1); // Output: 31
daysInMonth(2); // Output: 28
daysInMonth(4); // Output: 30
daysInMonth(7); // Output: 31

// **************************************************************************************************************************************************

// 20.University Admissions
// Write a console program to determine if a student is admitted to the university based on their score and extracurricular activities:
// Score >= 90: Admitted regardless of extracurriculars.
// Score 80-89: Admitted if they have >= 2 extracurriculars.
// Score < 80: Not admitted.

function checkUniversityAdmission(score, extracurriculars) {
  if (score >= 90) {
    return "Admitted";
  } else if (score >= 80 && extracurriculars >= 2) {
    return "Admitted";
  } else {
    return "Not admitted";
  }
}

// Example usage:
console.log(checkUniversityAdmission(85, 3)); // Output: Admitted
console.log(checkUniversityAdmission(88, 1)); // Output: Not admitted
console.log(checkUniversityAdmission(91, 0)); // Output: Admitted
console.log(checkUniversityAdmission(75, 12)); // Output: Not admitted

// **************************************************************************************************************************************************

// 21.Discount Calculator
// Write a console program that calculates the discount a customer receives based on their age and if they have a membership card:
// Age < 18: 10% discount.
// Age 18-64:
// With membership: 20% discount.
// Without membership: 10% discount.
// Age 65+: 30% discount.

function calculateDiscount(age, membership) {
  if (age < 18) {
    return "10% discount";
  } else if (age >= 18 && age <= 64) {
    if (membership === "Yes") {
      return "20% discount";
    } else {
      return "10% discount";
    }
  } else {
    return "30% discount";
  }
}

// Example usage:
console.log(calculateDiscount(20, "Yes")); // Output: 20% discount
console.log(calculateDiscount(15, "No")); // Output: 10% discount
console.log(calculateDiscount(70, "No")); // Output: 30% discount

// **************************************************************************************************************************************************

// 22.Movie Classification
// Determine the movie category a person can watch based on their age:
// Age < 13: Only U-rated movies.
// Age 13-17: U and PG-13 rated movies.
// Age 18+: All movies.

function determineMovieCategory(age) {
  // Age less than 13
  if (age < 13) {
    return "U-rated movies"; // Only U-rated movies for ages under 13
  }
  // Age between 13 and 17
  else if (age >= 13 && age <= 17) {
    return "U and PG-13 rated movies"; // U and PG-13 rated movies for ages 13 to 17
  }
  // Age 18 or older
  else {
    return "All movies"; // All movies for ages 18 and above
  }
}

// Example usage:
console.log(determineMovieCategory(10)); // Output: U-rated movies
console.log(determineMovieCategory(16)); // Output: U and PG-13 rated movies
console.log(determineMovieCategory(21)); // Output: All movies

// **************************************************************************************************************************************************

// 23. Airline Luggage Charges
// Write a console program that calculates luggage charges based on weight and dimensions:

// Work as expected, but not correct:
// function calculateLuggageCharges(weightStart, dimensions) {
//   const totalDimensions = dimensions;
//   let totalFee = 0;
//   let weight = weightStart;
//   const explanations = [];

//   const START_DIMENSION = 159;
//   if (totalDimensions >= START_DIMENSION) {
//     if (
//       totalDimensions > START_DIMENSION + 1 &&
//       totalDimensions <= START_DIMENSION + 20
//     )
//       totalFee += 50; // Slightly oversize fee
//     explanations.push("Slightly oversize");
//   }
//   if (
//     totalDimensions > START_DIMENSION + 20 &&
//     totalDimensions <= START_DIMENSION + 50
//   ) {
//     totalFee += 100; // Oversize fee
//     explanations.push("Oversize");
//   }
//   if (totalDimensions > START_DIMENSION + 50) {
//     totalFee += 200; // Excessive oversize fee
//     explanations.push("Excessive oversize");
//   }

//   if (weight > 50) {
//     totalFee += 100;
//     explanations.push("Overweight");
//   }

//   if (weight > 50 && totalDimensions > 158) {
//     totalFee += 50; // Additional handling fee
//     explanations.push("Handling");
//   }

// console.log(totalFee);
//   // Construct the final explanation string
//   const explanationString = explanations.join(" + ");

//   return `Total charges: $${totalFee} (${explanationString})`;
// }

// Example usage:
// calculateLuggageCharges(52, 160); // Output: $150 (Overweight + Slightly oversize)
// calculateLuggageCharges(48, 180); // Output: $100 (Oversize)
// calculateLuggageCharges(55, 190); // Output: $250 (Overweight + Oversize + Handling)

// Correct logic, but the output is different:
function calculateLuggageCharges(weightStart, dimensions) {
  const totalDimensions = dimensions;
  let totalFee = 0;
  let weight = weightStart;
  const explanations = [];
  let additionalFee = 0;

  if (weight > 50) {
    totalFee += 100; // Overweight fee
    explanations.push("Overweight");
  }

  if (totalDimensions > 158) {
    const oversizeAmount = totalDimensions - 158;
    if (oversizeAmount <= 20) {
      additionalFee += 50; // Slightly oversize fee
      explanations.push("Slightly oversize");
    } else if (oversizeAmount <= 50) {
      additionalFee += 100; // Oversize fee
      explanations.push("Oversize");
    } else {
      additionalFee += 200; // Excessive oversize fee
      explanations.push("Excessive oversize");
    }
  }

  if (weight > 50 && totalDimensions > 158) {
    additionalFee += 50; // Handling fee
    explanations.push("Handling");
  }

  if (totalFee === 0 && additionalFee === 0) {
    console.log("No charges applied.");
    return;
  }

  console.log(
    `Total charges: $${totalFee + additionalFee} (${explanations.join(" + ")})`
  );
}

// Example usage:
calculateLuggageCharges(52, 160); // Output: $150 (Overweight + Slightly oversize)
calculateLuggageCharges(48, 180); // Output: $100 (Oversize)
calculateLuggageCharges(55, 190); // Output: $250 (Overweight + Oversize + Handling)

// **************************************************************************************************************************************************

// 24. Adventure Game: Path Decision
// You're designing a text-based adventure game. At a certain point, players have to choose a path based on the tools they have in right and left hand:
// If they have a 'sword':
// If they also have a 'shield': Take the path to the castle.
// Else: Take the path to the forest.
// If they have a 'map':
// If they also have 'coins': Go to the town.
// Else: Camp at the current spot and prepare for the next day.
// If they don't have any of these tools: Wander aimlessly.

function choosePath(rightHand, leftHand) {
  if (rightHand === "sword" || leftHand === "sword") {
    if (rightHand === "shield" || leftHand === "shield") {
      return "Path to the castle";
    } else {
      return "Path to the forest";
    }
  } else if (rightHand === "map" || leftHand === "map") {
    if (rightHand === "coins" || leftHand === "coins") {
      return "Go to the town";
    } else {
      return "Camp at the current spot and prepare for the next day";
    }
  } else {
    return "Wander aimlessly";
  }
}

// Example usage:
console.log(choosePath("sword", "shield")); // Path to the castle
console.log(choosePath("map", "coins")); // Go to the town
console.log(choosePath("torch", "flower")); // Wander aimlessly
console.log(choosePath("sword", "pouch")); // Path to the forest
console.log(choosePath("map", "compass")); // Camp

// **************************************************************************************************************************************************

// 25. Potion Brewing Decision
// Players have 2 ingredients to brew potions. Decide which potion they can brew:
// If they have 'herbs':
// If they also have 'water': Brew a health potion.
// Else if they have 'oil': Brew a stealth potion.
// Else: Brew a minor stamina potion.
// If they have 'berries':
// If they also have 'sugar': Brew a speed potion.
// Else: Brew a minor energy potion.
// Else: Can't brew any potion.

function brewPotion(ingredient1, ingredient2) {
  if (ingredient1 === "herbs" || ingredient2 === "herbs") {
    if (ingredient1 === "water" || ingredient2 === "water") {
      return "Health potion";
    } else if (ingredient1 === "oil" || ingredient2 === "oil") {
      return "Stealth potion";
    } else {
      return "Minor stamina potion";
    }
  } else if (ingredient1 === "berries" || ingredient2 === "berries") {
    if (ingredient1 === "sugar" || ingredient2 === "sugar") {
      return "Speed potion";
    } else {
      return "Minor energy potion";
    }
  } else {
    return "No potion";
  }
}

// Example usage:
console.log(brewPotion("herbs", "water")); // Health potion
console.log(brewPotion("herbs", "oil")); // Stealth potion
console.log(brewPotion("herbs", "banana")); // Minor stamina potion
console.log(brewPotion("berries", "sugar")); // Speed potion
console.log(brewPotion("berries", "banana")); // Minor energy potion
console.log(brewPotion("herbs", "sugar")); // Minor stamina potion
console.log(brewPotion("sugar", "salt")); // No potion

// **************************************************************************************************************************************************

// 26. Survival in the Wilderness
// Players need to decide on their course of action based on time of day, environment, and items:
// If it's 'day':
// If they're in a 'forest':
// If they have 'knife': Hunt for food.
// Else if they have 'container': Collect berries.
// Else: Explore.
// If they're in a 'desert':
// If they have 'hat': Search for water.
// Else: Find shade.
// If it's 'night':
// If they're in a 'forest':
// If they have 'firestarter': Make a campfire.
// Else: Climb a tree for safety.
// If they're in a 'desert':
// If they have 'blanket': Sleep.
// Else: Keep moving to stay warm.

function survivalDecision(timeOfDay, environment, item) {
  if (timeOfDay === "day") {
    if (environment === "forest") {
      if (item === "knife") {
        return "Hunt for food";
      } else if (item === "container") {
        return "Collect berries";
      } else {
        return "Explore";
      }
    } else if (environment === "desert") {
      if (item === "hat") {
        return "Search for water";
      } else {
        return "Find shade";
      }
    }
  } else if (timeOfDay === "night") {
    if (environment === "forest") {
      if (item === "firestarter") {
        return "Make a campfire";
      } else {
        return "Climb a tree for safety";
      }
    } else if (environment === "desert") {
      if (item === "blanket") {
        return "Sleep";
      } else {
        return "Keep moving to stay warm";
      }
    }
  }
}

// Example usage:
console.log(survivalDecision("day", "forest", "knife")); // Hunt for food
console.log(survivalDecision("day", "forest", "container")); // Collect berries
console.log(survivalDecision("night", "forest", "firestarter")); // Make a campfire
console.log(survivalDecision("day", "forest", "bag")); // Explore
console.log(survivalDecision("night", "desert", "blanket")); // Sleep
console.log(survivalDecision("day", "desert", "hat")); // Search for water
console.log(survivalDecision("night", "desert", "sword")); // Keep moving to stay warm
console.log(survivalDecision("night", "forest", "hat")); // Climb a tree for safety

// **************************************************************************************************************************************************

// 27. Climate Zone Identifier
// Different areas on Earth have specific climate zones based on latitude. The first line contains a latitude value (between -90 and 90). The second line contains either "N" for Northern Hemisphere or "S" for Southern Hemisphere. The application should identify the climate zone.
// Arctic Zone: greater than 66.5° (N/S)
// Temperate Zone: between 23.5° and 66.5° (N/S)
// Tropic Zone: between 0° and 23.5° (N/S)
// Equator: exactly 0°

function identifyClimateZone(latitude, hemisphere) {
  if (hemisphere === "N") {
    if (latitude > 66.5 || latitude < -66.5) {
      return "Arctic Zone";
    } else if (latitude > 23.5 || latitude < -23.5) {
      return "Temperate Zone";
    } else if (latitude === 0) {
      return "Equator";
    } else if (latitude >= 0) {
      return "Tropic Zone";
    } else {
      return "Invalid latitude";
    }
  } else if (hemisphere === "S") {
    if (latitude < -66.5 || latitude > 66.5) {
      return "Arctic Zone";
    } else if (latitude < -23.5 || latitude > 23.5) {
      return "Temperate Zone";
    } else if (latitude === 0) {
      return "Equator";
    } else if (latitude >= -23.5 && latitude < 0) {
      return "Tropic Zone";
    } else {
      return "Invalid latitude";
    }
  } else {
    return "Invalid hemisphere input";
  }
}

// Example usage:
console.log(identifyClimateZone(70, "N")); // Arctic Zone
console.log(identifyClimateZone(-45, "S")); // Temperate Zone
console.log(identifyClimateZone(10, "N")); // Tropic Zone
console.log(identifyClimateZone(0, "N")); // Equator
console.log(identifyClimateZone(-85, "S")); // Arctic Zone

// **************************************************************************************************************************************************

// 28.Architectural Era Identifier
// Different eras in history had specific architectural styles. The first line contains the year a building was constructed. The second line contains the primary material used in the building ("wood", "stone", or "steel"). The application should attempt to guess the architectural era.

function identifyArchitecturalEra(year, material) {
  if (year < 500 && material === "stone") {
    return "Ancient";
  }

  if (year >= 500 && year <= 1500 && material === "stone") {
    return "Medieval";
  }

  if (year >= 1500 && year <= 1800 && material === "wood") {
    return "Colonial";
  }

  if (year >= 1800 && year <= 1900 && material === "steel") {
    return "Industrial";
  }

  if (year > 1900 && material === "steel") {
    return "Modern";
  }
  return "Uncertain";
}

// Example usage:
console.log(identifyArchitecturalEra(300, "stone")); // Ancient
console.log(identifyArchitecturalEra(1500, "wood")); // Colonial
console.log(identifyArchitecturalEra(1500, "stone")); // Medieval
console.log(identifyArchitecturalEra(2000, "steel")); // Modern
console.log(identifyArchitecturalEra(1100, "wood")); // Uncertain
