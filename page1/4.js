let largestPallindrom = 11;

for ( i = 100; i < 999; i ++) {
	for (j = 100; j < 999; j ++) {

		const multiple = i * j;

		if (String(multiple).split("").reverse().join("") === String(multiple)
			&& multiple > largestPallindrom
			) {
			console.log("Found: ", largestPallindrom);

			largestPallindrom = multiple;
		}
	}
}

console.info("Largest pallindrom: ", largestPallindrom);