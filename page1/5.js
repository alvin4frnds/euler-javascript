let number = 0;
const MAX = 20;
let temp = 2;

while (! number) {

	for ( i = 1; i <= MAX; i ++) {
		if ((temp % i) > 0 ) break;

		if (i == MAX) number = temp;
	}

	temp ++;
}

console.info("ans: ", number);