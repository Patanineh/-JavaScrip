function removeDups(arr) {
    // ใช้ Set เพื่อเก็บค่าที่ไม่ซ้ำกัน
    let uniqueItems = new Set(arr);

    // แปลง Set กลับเป็น Array และคืนค่า
    return [...uniqueItems];
}

// ทดสอบ
console.log(removeDups([1, 0, 1, 0])); // [1, 0]
console.log(removeDups(["The", "big", "cat"])); // ["The", "big", "cat"]
console.log(removeDups(["John", "Taylor", "John"])); // ["John", "Taylor"]
