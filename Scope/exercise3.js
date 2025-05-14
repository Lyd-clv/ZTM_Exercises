// change everything below to the newer Javascript!

// let + const
let a = 'test';
const b = true;
const c = 789;
a = 'test2';
// const is used by default for variables that won’t be reassigned = b and c hold fixed values that don’t change
// Use let only when reassignment is needed: a is declared with let because its value changes later



// Destructuring
const person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

// var firstName = person.firstName;
// var lastName = person.lastName;
// var age = person.age;
// var eyeColor = person.eyeColor;

const { firstName, lastName, age, eyeColor } = person;



// Object properties
const a = 'test';
const b = true;
const c = 789;

// const okObj = {
//   a: a,
//   b: b,
//   c: c
// };

const okObj = { a, b, c};



// Template strings
// const message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";

const firstName = "Sally";
const city = "Paris";

const message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;



// default arguments
// default age to 10;
function isValidAge(age = 10) {
    return age
}
// shorter, cleaner version:
const isValidAge = (age = 10) => age;


// Symbol
// Create a symbol: "This is my first Symbol"

const sym = Symbol('This is my first Symbol');


// Arrow functions
// function whereAmI(username, location) {
//     if (username && location) {
//         return "I am not lost";
//     } else {
//         return "I am totally lost!";
//     }
// }

const whereAmI = (username, location) => {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}