describe ("Fizzbuzz", function() {

	var fizzbuzz; 

	beforeEach(function() {
			fizzbuzz = new Fizzbuzz();
	});

	it ("should know if a number is divisible by three", function(){
			expect(fizzbuzz.isDivisibleByThree(3)).toBe(true)
	})

	it ("should know if a number is divisible by five", function(){
			expect(fizzbuzz.isDivisibleByFive(5)).toBe(true)
	})

	it ("should know if a number is divisible by fifteen", function(){
			expect(fizzbuzz.isDivisibleByBoth(15)).toBe(true)
	})

	it ("should print 'Fizz' if the number is divisible by three", function(){
			expect(fizzbuzz.itPrintsTheResult(3)).toEqual('Fizz');
	})

	it ("should print 'Buzz' if the number is divisible by five", function(){
			expect(fizzbuzz.itPrintsTheResult(5)).toEqual('Buzz');
	})

	it ("should print 'FizzBuzz' if the number is divisible by both", function(){
			expect(fizzbuzz.itPrintsTheResult(15)).toEqual('FizzBuzz');
	})


});