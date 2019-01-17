const MAX = 100;

let sumOfSquare = 0, sum = 0, squareOfSum = 0;

for ( i = 1; i <= MAX; i ++) {
	sumOfSquare += i * i;
	sum += i;
}

squareOfSum = sum * sum;

console.info("diff: ", squareOfSum - sumOfSquare);