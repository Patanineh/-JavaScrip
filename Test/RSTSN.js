function sumTwoSmallestNums(nums) {
    // กรองเลือกเฉพาะตัวเลขบวก
    let positiveNumbers = nums.filter(num => num > 0);

    // เรียงลำดับจำนวนเลขบวก
    positiveNumbers.sort((a, b) => a - b);

    // นำผลรวมของสองจำนวนเลขบวกที่น้อยที่สุด
    return positiveNumbers[0] + positiveNumbers[1];
}

// ทดสอบ
console.log(sumTwoSmallestNums([19, 5, 42, 2, 771])); // 7
console.log(sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453])); // 3453455
console.log(sumTwoSmallestNums([2, 9, 6, -1])); // 8
console.log(sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587])); // 6
console.log(sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385])); // 4519
