"use strict";

console.log("hello chaining");

// Using one single line of JavaScript code, complete the following tasks on the array of integers below.

// Sort the numbers in descending order (10, 9, 8, 7, etc). use .sort(compare function)
// Remove any integers greater than 19. Use .filter
// Multiply each remaining number by 1.5 and then subtract 1. Use .map
// Then output (either in the DOM or the console) the sum of all the resulting numbers. Use .reduce

var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

var arrayChain = integers.sort(function(a, b){return b-a}) //.sort method: compares to values; returns
// console.log("arrayChain", arrayChain); checked and works
	.filter(function(newList){return newList <=19})
// console.log("newList", arrayChain); checked and works
	.map(function(math){return (math * 1.5) - 1})
// console.log("math", arrayChain) checked and works
	.reduce(function(a, b){return a + b});
	console.log("reduce", arrayChain);

let output = document.getElementById("output");
output.innerHTML = arrayChain;