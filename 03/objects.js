// 1. Person Data

// Write a function that takes 3 parameters (name, surname and age) and returns an object.

function createPersonObject(name, surname, age) {
  return {
    firstName: name,
    lastName: surname,
    age: age,
  };
}

// Test cases
console.log(createPersonObject("Ivan", "Ivanov", 29));
console.log(createPersonObject("Maria", "Marinova", 13));

// ***************************************************************
// 2. Town

// Create a function that accepts an object, traverses it, and prints all properties and values
function printObjectProperties(obj) {
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      console.log(`${key}: ${obj[key]}`);
    }
  }
}

// Test case
const town = {
  name: "Sofia",
  population: 1234567,
  country: "Bulgaria",
  postcode: "1000",
};

printObjectProperties(town);

// *********************************************************************
// 3. Convert to Object

// Write a function that accepts text in JSON format and converts it to an object. Print all
// values in the following format: {key}: {value}
function printObjectFromJSON(jsonText) {
  // Parse JSON text into an object
  const obj = JSON.parse(jsonText);

  // Iterate over object properties and print them
  for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
}

// Test cases
const json1 = '{"name": "Ivan", "age": 40, "town": "Sofia"}';
printObjectFromJSON(json1);

const json2 = '{"firstName": "Ivan", "lastName": "Ivanov"}';
printObjectFromJSON(json2);

// ************************************************************
// 4. Convert to JSON

// Write a function that gets a name, surname, and eye color and saves them in an object.
// The created object must be converted to JSON and printed.
function createPersonJSON(name, surname, eyeColor) {
  const person = {
    name: name,
    lastName: surname,
    eyeColor: eyeColor,
  };

  const json = JSON.stringify(person);
  console.log(json);
}

// Test cases
createPersonJSON("Ivan", "Ivanov", "blue");
createPersonJSON("Maria", "Petrova", "brown");

// *******************************************************************
// 5. Phonebook

// Write a function that accepts an array of names and phone numbers. Write down all the
// names in the phone book. If you get an existing name, replace the number with the new
// one.
function createPhonebook(entries) {
  const phonebook = {};

  entries.forEach((entry) => {
    const parts = entry.split(" ");
    const name = parts.shift(); // Extract the name
    const phoneNumber = parts.join(" "); // Reconstruct the phone number
    phonebook[name] = phoneNumber;
  });

  for (let name in phonebook) {
    console.log(`${name} -> ${phonebook[name]}`);
  }
}

// Test cases
const phonebook1 = ["Peter 0888 657 212", "Bob 0899 657 212", "Peter 123123"];
createPhonebook(phonebook1);

const phonebook2 = ["Maria 123", "Samantha 456", "Nicole 789"];
createPhonebook(phonebook2);

// *****************************************************
// 6. Movies

// Write a function that stores information about movies inside an array. The movie&#39;s object
// have name, director, and date. You can receive several commands:
//  &quot;addMovie {movie name}&quot; – adds a movie
//  &quot;{movie name} directedBy {director}&quot; – checks if the movie exists and then
// adds the director
//  &quot;{movie name} onDate {date}&quot; – checks if the movie exists and adds date
// Print only the movies that have full info (director, name and date) in JSON format.
