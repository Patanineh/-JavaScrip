function numbersplit(num) {
    return [Math.floor(num / 2), Math.ceil(num /2)];
}

console.log(numbersplit(4));
console.log(numbersplit(10));
console.log(numbersplit(11));
console.log(numbersplit(-9));
console.log(numbersplit(-4));