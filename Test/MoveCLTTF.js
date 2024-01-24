function capToFront(str) {
    let upperCaseLetters = str.match(/[A-Z]/g);
    let lowerCaseLetters = str.match(/[a-z]/g);

    if (!upperCaseLetters) {
        // ถ้าไม่มีตัวอักษรตัวใหญ่ในสตริง
        return str;
    }

    // นำตัวอักษรตัวใหญ่มาข้างหน้า + ตัวอักษรตัวเล็ก + ตัวอักษรตัวใหญ่ที่เหลือ
    return upperCaseLetters.join("") + (lowerCaseLetters ? lowerCaseLetters.join("") : "");
}

console.log(capToFront("hApPy"));       // "APPyh"
console.log(capToFront("moveMENT"));    // "MENTmove"
console.log(capToFront("shOrtCAKE"));   // "OCAKEshrt"
