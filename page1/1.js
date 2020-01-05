let starttime = new Date().getTime();

let sum = 0;

for ( let i = 1; i < 1000; i ++) {
	if ((i % 3) === 0) sum += i;
	else if ((i % 5) === 0) sum += i;
}

let endtime = new Date().getTime();

console.log(sum);
console.log("Answer in : " + (endtime - starttime));