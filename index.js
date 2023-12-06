/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
let tongueTwister = s1 + " " + s2 + " " + s3 + " " + s4 + " " + s5;

let reverse = " " + s3 + " " + s2 + " " + s1 + " " + s4;

// Print out the concatenated string
console.log(tongueTwister + reverse);

/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

const char1 = part1[3].toUpperCase();
const char2 = part2[5].toUpperCase();
const strpart1 = part1.slice(0, 3);
const strpart2 = part2.slice(0, 5);

// Print the cameLtaiL-formatted string
console.log(strpart1 + char1 + strpart2 + char2);

/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const billTotal = 84;

let tipAmount = billTotal * 0.15;

// Print out the tipAmount

console.log(tipAmount);

/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
const randomNumber = Math.floorconsole.log(randomNumber);

// Print the generated random number
Math.random() * 10 + 1;

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
false;

const expression2 = a || b;
true;

const expression3 = !a && b;
false;

const expression4 = !(a && b);
true;

const expression5 = !a || !b;
true;

const expression6 = !(a || b);
false;

const expression7 = a && a;
true;
