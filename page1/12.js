function factors(number) {
	let fact = 0;

	let i = 0
	while (i <= (number / i)) {
		if (((number % i ) == 0)) {
			fact += ( number == i ) ? 1 : 2;
		}

		i++;
	}

	/* for (let i = 0; i <= number; i ++) {
		if ((i > numbBy2) && (i != numbBy2)) 
			continue;

		if ((number % i) == 0) {
			fact += 1;
		} 
	} */

	return fact;
}

let factorsOfN = 0, n = 0, iteration = 0;
// let factorsOfN = 95, n = 7157436, iteration = 3783;
// let factorsOfN = 63, n = 11393151, iteration = 4773;
// let factorsOfN = 63, n = 20183481, iteration = 6353;

while (factorsOfN < 500) {
	iteration += 1;
	n += iteration;

	factorsOfN = factors(n);
	console.log("factors count of n is: ", iteration, n, factorsOfN);
}

console.log("ans: ", n);