function totalVolume(...boxes) {
    return boxes.reduce((total, box) => total + box.reduce((acc, side) => acc * side, 1), 0);
}

// ทดสอบ
console.log(totalVolume([2, 3, 2], [6, 6, 7], [1, 2, 1])); // 266
console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1])); // 63
console.log(totalVolume([2, 2, 2], [2, 1, 1])); // 10
console.log(totalVolume([1, 1, 1])); // 1
