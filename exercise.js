// A for-in loop is used to iterate through the properties (key - value pairs) of an object.
// Here is the syntax:

/*for(var in object){
   //your logic
}*/

//Here is example of using a for-in loop to iterate through properties of the following object:
var prepClass = {
	month: "February",
	year:  2018,
	students: 8,
	roster: ["Cyrus", "Tyler", "May", "Yao", "Ben", "Reese", "Jace", "Sean"],
	level: "advance",
	areTheyCool: true
};

for(var prop in prepClass){ //loop through all the properties in the object
	console.log(prop); //prints the keys in the object
	console.log(prepClass[prop]); //prints the values in the object
}


/*1. Create a function that will take in an object and loop through the properties of that object.
Console.log the keys of the object.*/

/*@param {Object}
@return {Object}*/

var donutBox = {
	store: "Safeway",
	location: "Manoa",
	quantity: 12,
	price: 5,
	types: ["old fashion", "glazed", "chocolate", "jelly-filled", "sprinkles", "red velvet"],
	taste: "fabulous"
};

function printKeys(obj) {
	for (var i in obj) {
		console.log("#1:", i);
	}
}

printKeys(donutBox);


/*2.  Create a function that will take in an object and loop through the properties of that object.
Console.log the values of the object. Use the donutBox object from the previous exercise above*/

/*@param {Object}
@return {Object}*/

function printValues(obj) {
	for (var i in obj) {
		console.log("#2:", obj[i]);
	}
}

printValues(donutBox);

/*3. Create a function that will take in an object and will delete the taste property from the donutBox object above.*/

/*@param {Object}
@return {Object}*/

function deleteTaset (obj) {
	
}

/*4. Create a function that will take in an object and will return all the values of the object in an array.*/

/*@param {Object}
@return {Array}*/

var legend = {
	firstName: "Bruce",
	lastName: "Lee",
	birthPlace: "San Francisco, CA",
	occupation: "Bad Ass",
	hobbies: ["martial arts", "fitness", "dancing", "knitting", "coding"]
};


/*5. Create a function that will take in an object and will return the number of properties (key -value pairs) in the object. Use the legend object above.

Hint: You'll need to use  hasOwnProperty method 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
*/

/*@param {Object}
@return {Number}*/



/*6. Create a function that will take in an object and check to see if the legend object has a property of 'occupation'.*/

/*@param {Object}
@return {Object}*/




