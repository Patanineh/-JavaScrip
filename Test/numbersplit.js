function numbersplit(num) {
    return [Math.floor(num / 2), Math.ceil(num /2)];
} //Math.floorปัดเศษออก Math.ceilเอาเลขมากสุด เช่น11/2=5.5Math.ceilจะทำเป็น6

console.log(numbersplit(4));
console.log(numbersplit(10));
console.log(numbersplit(11));
console.log(numbersplit(-9));
console.log(numbersplit(-4));