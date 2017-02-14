var fruits = ["apple","banana","cherry"];

// 1A: Write a function called outputFruitOld that consoles every fruit in a fruit array.

function outputFruitOld(array){
	for (var i = 0; i < array.length; i++) {
		console.log(array[i]);
	}
}

outputFruitOld(fruits);

// 1B: Rewrite using forEach array method.

function outputFruits(element, index, array){
	console.log(element);
	console.log("array[" + index + "] " + array[i]);
}

fruits.forEach(outputFruits);

// fruits.forEach(function(element){
// 	console.log(element);
// });

// 2A: Write a function called backwardFruitsOld that reverse the letters in each word on the fruits array.

function backwardFruitsOld(array){
	var backwardsFruitArray = [];
	for (var i = 0; i < array.length; i++) {
		backwardsFruitArray.push(array[i].split("").reverse().join(""));
	}
	console.log(backwardsFruitArray);
}

backwardFruitsOld(fruits);


// 2B: Rewrite using map array method

var backwardsFruitArray = fruits.map(function(fruit){
	return fruits.split("").reverse().join("");
});
console.log(backwardsFruitArray);

// 3A: Write a function called fiveLettersOnlyOld that only returns fruits that have 5 letters.

function fiveLettersOnlyOld(array){
	var filteredFruits = [];
	for (var i = 0; i < array.length; i++) {
		if(array[i].length === 5){
			filteredFruits.push(array[i]);
		}
	}
	console.log(filteredFruits);
}

fiveLettersOnlyOld(fruits);

// 3B: Rewrite using filter array method.

function filterIt(cat){
	if (cat.length === 5) {
		return cat;
	}
}
var filteredFruits = fruits.filter(filterIt);
console.log(filteredFruits);


var numbers = [0,1,2,3,4];

// 4A:  Write a function called addzOld that returns the sum of an array.

function addzOld(array){
	var sum = 0;
	for (var i = 0; i < array.length; i++) {
		sum += array[i];
	}
	console.log(sum);
}
addzOld(numbers);

// 4B: Rewrite using reduce array method

var sum = [0,1,2,3,4].reduce(function(previousValue, currentValue, index){
	console.log("current index " + index);
	console.log("previousValue ", previousValue);
	console.log("currentValue ", currentValue);
	return previousValue + currentValue;
});
console.log(sum);