const NUM = 600851475143;
let biggestFactor = 3;

function primeFactors (num) {
	let factors = [];
	let i = 2;

	while (i < (num / 2)) {
		if (((num % i ) == 0) && (i > biggestFactor) && !primeFactors(i).length) {
			console.log("Factor found: ", i);

			factors.push(i);
		}

		i++;
	}

	return factors;
}

console.log("factors", primeFactors(NUM));