function Fizzbuzz() { };

Fizzbuzz.prototype.isDivisibleByThree = function(number) {
	return number % 3 === 0;
};

Fizzbuzz.prototype.isDivisibleByFive = function(number) {
	return number % 5 === 0;
};

Fizzbuzz.prototype.isDivisibleByBoth = function(number) {
	return number % 15 === 0;
};

Fizzbuzz.prototype.itPrintsTheResult = function(number){
	if (this.isDivisibleByBoth(number)) return 'FizzBuzz';
	if (this.isDivisibleByThree(number))return 'Fizz';
	if (this.isDivisibleByFive(number))return 'Buzz';
	// };
};


