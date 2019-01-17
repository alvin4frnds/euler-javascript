const RESULT = 1000;
let product = 1;

for ( i = 1; i <= RESULT / 2; i ++) {
	for ( j = 1; j <= i; j ++) {
		for ( k = 1; k <= j; k ++) {
			if ((((k * k) + (j * j)) === (i * i)) && (i + j + k) == RESULT ) {
				console.log("ans: ", i * j * k);
			}
		}
	}
}