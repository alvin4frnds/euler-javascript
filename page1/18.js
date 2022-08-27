const problemTriangle = `75
95 64
17 47 82
18 35 87 10
20 04 82 47 65
19 01 23 75 03 34
88 02 77 73 07 63 67
99 65 04 28 06 16 70 92
41 41 26 56 83 40 80 70 33
41 48 72 33 47 32 37 16 94 29
53 71 44 65 25 43 91 52 97 51 14
70 11 33 28 77 73 17 78 39 68 17 57
91 71 52 38 17 14 91 43 58 50 27 29 48
63 66 04 68 89 53 67 30 73 16 69 87 40 31
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23`;

toArray = (str) => {
  return str.split('\n').map(row => row.split(' ').map(Number));
};

const printTriangle = (triangle) => {
  return triangle.map(row => row.join(' ')).join('\n');
};

let position = -1, positions = [], sum, numbers = [];
const problemArray = toArray(problemTriangle);
const sortedIndexProblemArray = problemArray.map(row => {
  const sorted = [... row].sort((a, b) => b - a);
  console.log("sorted: ", sorted);
  const sortedIndexes = [];
  sorted.forEach(num => {
    let index = row.indexOf(num);

    if ( sortedIndexes.indexOf(index) > -1 ) {
      index = row.indexOf(num, index + 1);
    }

    sortedIndexes.push(index);
  });

  return sortedIndexes;
});

/*
for ( let i = 0; i < problemArray.length; i ++ ) {
  if ( position === -1 ) {
    position = 0;
    sum = problemArray[i][position];
    positions.push(position);
    numbers.push(sum);
    continue;
  }

  const options = [ position, position + 1 ];
  const maxNumber = Math.max(... options.map(option => problemArray[i][option]));
  position = options.find((option) => maxNumber === problemArray[i][option]);
  sum += maxNumber;

  positions.push(position);
  numbers.push(maxNumber);
}

console.log("sum: ", sum, " numbers: ", numbers.join(' -> '));
*/
