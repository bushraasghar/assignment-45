"use strict";
//equality and inequality test 1
console.log("Equality test with string: ", "apple" === "apple");
//equality and inequality test 2
console.log("Inequality test with string: ", "apple" != "orange");
//test using the lower case function
console.log("Lowercase function test:", "EDUCATION".toLocaleLowerCase() === "education");
//number test with equality and non equality
console.log("Equality test with numbers:", 25 === 25);
//greater than and less than
console.log("Greater than test:", 10 < 5);
//greater and equal to
console.log("Greater and eual to tess", 10 >= 5);
//less and equal to
console.log("less and eual to tess", 5 <= 10);
//test using and operator
console.log("and operator test", 10 === 10 && 10 > 4);
//test using or operator
console.log("or operator test", 10 === 10 || false);
//test whether an item is in arrayy
let fruits = ["apple", "mango", "banana"];
console.log("test mango in the array is:", fruits.includes("mango"));
//test whether an item is in arrayy
let fruit = ["apple", "mango", "banana"];
console.log("test grapes in the array is:", fruits.includes("grapes"));
