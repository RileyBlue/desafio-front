//Suppose I wanted to model a group of friends:

var friend1 = "Charlie";
var friend2 = "Liz";
var friend3 = "David";
var friend4 = "Mattias";

// This is a lot of code, and it doesn't let us group the friends together

// This is a perfect use case for an ARRAY

var friends = ["Charlie", "Liz", "David", "Mattias"];

// Arrays let us group data together in list

/*
Charlie   Liz   David   Mattias
   0       1      2        3
*/

var friends = ["Charlie", "Liz", "David", "Mattias"];

console.log(friends[0])   //"Charlie"

friends[1] + " <3 " + friends[2]  //"Liz <3 David"

// We can also update arrays
/*
Charlie   Liz   David   Mattias
   0       1      2        3
*/

var friends = ["Charlie", "Liz", "David", "Mattias"];

friends[0] = "Chuck";
friends[1] = "Lizzie";

/*
Chuck   Lizzie   David   Mattias
   0      1        2        3
*/


// We can also add new data
var friends = ["Charlie", "Liz", "David", "Mattias"];
friends[4] = "Amelie";

/*
Charlie   Liz   David   Mattias
   0       1      2        3
*/


/*
Charlie   Liz   David   Mattias   Amelie
   0       1      2        3         4
*/

// Last Few things
//We can initialize an empty array two ways:
var friends = []; //no friends :(
var friends = new Array() //uncommon

//Arrays can hold any type of data
var random_collection = [49, true, "Hermione", null];

//Arrays have a length property
var nums = [45,37,89,24];
nums.length   //4

// Exercise #1
var numbers = [22, 67, 33, 96, 88];

//What does the following line print?
console.log(numbers[numbers.length])

// Exercise #2 
var friendGroups = [
  ["Harry", "Ron", "Hermione"],
  ["Malfoy", "Crabbe", "Goyle"],
  ["Mooney", "Wormtail", "Prongs"]
];

//What is the result of this line:
console.log(friendGroups[2][0]);

// Arrays Methods
// Arrays come with a few built-in methods that make our life easier. We're going to cover:

// push/pop
// shift/unshift
// indexOf
// slice

// Use push to add to the end of an array
var colors = ["red", "orange", "yellow"];
colors.push("green");
//["red", "orange", "yellow", "green"]

// Use pop to remove the last item in an array
var colors = ["red", "orange", "yellow"];
colors.pop();
//["red", "orange"]

//pop() returns the removed element
var col = colors.pop();  //orange

// Use unshift to add to the front of an array:
var colors = ["red", "orange", "yellow"];
colors.unshift("infrared")
//["infrared", "red", "orange", "yellow"]

// Use shift to remove the first item in an array
var colors = ["red", "orange", "yellow"];
colors.shift();
//["orange", "yellow"]

//shift() also returns the removed element
var col = colors.shift();  //orange

// Use indexOf() to find the index of an item in an array

var friends = ["Charlie", "Liz", "David", "Mattias", "Liz"];

//returns the first index at which a given element can be found
friends.indexOf("David"); //2
friends.indexOf("Liz"); //1, not 4

//returns -1 if the element is not present.
friends.indexOf("Hagrid"); //-1

//Use slice() to copy parts of an array

var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
//use slice to copy the 2nd and 3d fruits
//specify index where the new array starts(1) and ends(3)
var citrus = fruits.slice(1, 3);

//this does not alter the original fruits array
//citrus contains ['Orange','Lemon']
//fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];

//you can also use slice() to copy an entire array
var nums = [1,2,3];
var otherNums = nums.slice();
//both arrays are [1,2,3]

// Use splice to remove

var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
//use slice to copy the 2nd and 3d fruits
//specify index where the new array starts(1) and ends(3)
var citrus = fruits.slice(1, 3);

//this does not alter the original fruits array
//citrus contains ['Orange','Lemon']
//fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];

//you can also use slice() to copy an entire array
var nums = [1,2,3];
var otherNums = nums.slice();
//both arrays are [1,2,3]


// Exercise #1
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
//use slice to copy the 2nd and 3d fruits
//specify index where the new array starts(1) and ends(3)
var citrus = fruits.slice(1, 3);

//this does not alter the original fruits array
//citrus contains ['Orange','Lemon']
//fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];

//you can also use slice() to copy an entire array
var nums = [1,2,3];
var otherNums = nums.slice();
//both arrays are [1,2,3]


