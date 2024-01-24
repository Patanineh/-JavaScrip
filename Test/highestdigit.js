function highestdigit(number) {
    // แปลงตัวเลขเป็นสตริงเพื่อให้สามารถเข้าถึงแต่ละหลักได้
    let numberString = number.toString();

    // ใช้ spread operator เพื่อแปลงสตริงเป็นอาร์เรย์ของตัวอักษร
    let digits = [...numberString];

    // ใช้ Math.max และ spread operator เพื่อหาตัวเลขที่มีค่ามากที่สุด
    let highestDigit = Math.max(...digits.map(Number));

    return highestDigit;
}

console.log(highestdigit(379));    // 9
console.log(highestdigit(2));      // 2
console.log(highestdigit(377401)); // 7
