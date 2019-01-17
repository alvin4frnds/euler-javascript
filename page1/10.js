const LIMIT = 2 * 1000 * 1000;
let sum = 0;

function isPrime (num) {
	let factors = [];
	let i = 2;

	if ([2, 3, 5].indexOf(num) > -1) return true;

	while (i <= (num / i)) {
		if (((num % i ) == 0)) {
			return false;
		}

		i++;
	}

	return true;
}

for ( i = 2; i < LIMIT; i ++) {
	if (isPrime(i)) sum += i;
}

console.log("ans: ", sum);