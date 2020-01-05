function factorial(number) {
	let multiple = 1;

	for (let i = 1; i <= number; i ++) {
		multiple *= i;
	}

	return multiple;
}

function toFixed(x) {
  if (Math.abs(x) < 1.0) {
    var e = parseInt(x.toString().split('e-')[1]);
    if (e) {
        x *= Math.pow(10,e-1);
        x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
    }
  } else {
    var e = parseInt(x.toString().split('+')[1]);
    if (e > 20) {
        e -= 20;
        x /= Math.pow(10,e);
        x += (new Array(e+1)).join('0');
    }
  }
  return x;
}

const permutations = factorial(40) / (factorial(20) * 2);
console.log("ans: ", toFixed(permutations));