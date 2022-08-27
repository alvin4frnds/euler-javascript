const value = Math.pow(2, 1000);

console.log(value, parseInt(value), (value + "").length, toFixed(value));

// get exact value from calculation result js
function toFixed(value) {
    return value.toFixed(100).toString();
}
