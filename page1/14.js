const collatzSequences = {};

function getSequence(number) {
	const orig = number;
	let sequence = [number];

	while (number != 1) {
		if (collatzSequences[number]) {
			sequence = sequence.concat(collatzSequences[number])
			return sequence;
		}

		if ((number % 2) == 0) number = number / 2;
		else number = ( 3 * number ) + 1;

		sequence.push(number);
	}

	collatzSequences[orig] = sequence;

	return sequence;
}

let i = 1, biggestSequenceNo = 1, biggestSequenceLength = 1;
while (i < 1000000) {
	const sequence = getSequence(i).length;
	if (sequence > biggestSequenceLength) {
		biggestSequenceNo = i;
		biggestSequenceLength = sequence;

		console.log("new biggest sequence: ", biggestSequenceNo, biggestSequenceLength);
	}

	i++;
}

console.log("ans: ", biggestSequenceNo);