// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array//



// • Tests for equality and inequality with strings
let fruit: string = "apple";
console.log("Is fruit is equal to apple");
console.log(fruit === "apple");

// • Tests using the lower case function
let huzaifa: string = "HUZAIFA";
console.log("lower case:", huzaifa.toLowerCase());

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let number1: number = 10;
console.log("greater", 10 > 8);
console.log("less than", 8 < 10);

// • Tests using "and" and "or" operators

let A: number = 10;
let B: number = 20;
if (A > 0 && B > 0) {
  console.log("A & B greater are then is 0");
} else {
  console.log("A & B not greater than is 0");
}
let admin: boolean = true;
let use1: boolean = false;
if (admin || use1) {
  console.log("user are the fb login in");
} else {
  console.log("user are the not login in");
}

// • Test whether an item is in a array
let huArray: number[] = [1, 2, 3, 4, 5];
if (huArray.includes(2)) {
  console.log("2 is the myarray");
} else {
  console.log("2is the not myarray");
}
// • Test whether an item is not in a array
let hu2Array: number[] = [1, 2, 3, 4, 5];
if (!hu2Array.includes(2)) {
  console.log("2 is the myarray");
} else {
  console.log("2is the not myarray");
}
