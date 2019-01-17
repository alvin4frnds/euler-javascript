const primeNumbers = [];
let temp = 2;
const STEP = 10001;

function isPrime (num) {
	let factors = [];
	let i = 2;

	if ([2, 3, 5].indexOf(num) > -1) return true;

	while (i <= (num / 2)) {
		if (((num % i ) == 0)) {
			return false;
		}

		i++;
	}

	return true;
}

while (primeNumbers.length < STEP) {
	if ( isPrime(temp) ) {
		primeNumbers.push(temp);

		if (primeNumbers.length === STEP)
			console.log("ans: ", temp);
	}

	temp ++;
}