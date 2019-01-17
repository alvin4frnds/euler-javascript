let sum = 0;

let a = 0, b = 1, nextFibonocci = 2;
const FOUR_MILLION = 4 * 1000 * 1000;

while (nextFibonocci < FOUR_MILLION) {
	if ((nextFibonocci % 2) === 0)
			sum += nextFibonocci;

	a = b;
	b = nextFibonocci;
	nextFibonocci = a + b;
}

console.log("Sum: ", sum);