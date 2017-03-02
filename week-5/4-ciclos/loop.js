// Objetivos
//Understand the purpose of loops
//Define "DRY" code
// Write simple while loops

// What if I wanted to print the numbers from 1-10?
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

//What about 1-10,000?
// This is where loops come in!

// DRY: Don't Repeat Yourself
// 
// We want to keep our code as DRY as possible.  It saves us a lot of time and makes our code cleaner.
"I Will Not Repeat My Code"
"I Will Not Repeat My Code"
"I Will Not Repeat My Code"
"I Will Not Repeat My Code"
"I Will Not Repeat My Code"
"I Will Not Repeat My Code"
"I Will Not Repeat My Code"
"I Will Not Repeat My Code"

// While Loops
// Repeat code WHILE a condition is true
while(someCondition) {
  //run some code
}

// It's very similar to an if statement, except it repeats a given code block instead of just running it once

// While Loops
// Printing numbers from 1-5
var count = 1;

while(count < 6) {
 console.log("count is: " + count);
 count++; 
}

//count is: 1
//count is: 2
//count is: 3
//count is: 4
//count is: 5

// While Loops
// Printing each character in a string
//string we're looping over:
var str = "hello";
//first character is at index 0
var count = 0;    

while(count < str.length) {
 console.log(str[count]);
 count++;
}

//"h"
//"e"
//"l"
//"l"
//"o"

// While Loops
// Infinite loops occur when the terminating condition in a loop is never true
var count = 0;

while(count < 10) {
 console.log(count);
}
// The above example prints "0" over and over because count is never incremented

// While Loops
// Exercise 1
var num = 1;

while(num <= 10) {
  console.log(num);
  num += 2;
}

// Exercise 2
var num = 1

while(num <= 20) {
 if(num % 4 === 0){
   console.log(num);
 }
 num++;
}

// Exercise 3 
var num = 100;

while(num < 150) {
  console.log(num + 1);
  num--;
}

// For Loops
// Another way of repeating code
// for(init; condition; step [Increment]) {
  //run some code
// }

// Printing numbers from 1-5 with a for loop
for(var i = 0; i < 6; i++) {
  console.log(i);
}

// Printing numbers from 1-5 with a for loop

var count = 1;

while(count < 6) {
 console.log("count is: " + count);
 count++;
}

// Printing each character in a string with a for loop
var str = "hello";

for(var i = 0; i < str.length; i++){
  console.log(str[i]);
}

// And with a while loop

var str = "hello";
var count = 0;   
 
while(count < str.length) {
 console.log(str[count]);
 count++;
}

// Exercise 1 
for(var i = 0; i < 16; i+=8){
  console.log(i);
}

// Exercise 2
var str = "ahceclwlxo";

for(var i = 1; i < str.length; i+=2){
  console.log(str[i]);
}

