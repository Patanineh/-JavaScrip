function isValidIP(ip) {
    const ipSegments = ip.split('.');

    // ตรวจสอบว่า IP มี 4 ส่วนหรือไม่
    if (ipSegments.length !== 4) {
        return false;
    }

    // ตรวจสอบทุกส่วนของ IP
    for (const segment of ipSegments) {
        // ตรวจสอบว่าเป็นตัวเลข
        if (!/^\d+$/.test(segment)) {
            return false;
        }

        // ตรวจสอบว่าเป็นเลขระหว่าง 1 ถึง 255
        const num = parseInt(segment, 10);
        if (num < 1 || num > 255) {
            return false;
        }

        // ตรวจสอบว่าไม่มี leading zeros
        if (segment.length > 1 && segment[0] === '0') {
            return false;
        }
    }

    return true;
}

// ทดสอบ
console.log(isValidIP("1.2.3.4")); // true
console.log(isValidIP("1.2.3")); // false
console.log(isValidIP("1.2.3.4.5")); // false
console.log(isValidIP("123.45.67.89")); // true
console.log(isValidIP("123.456.78.90")); // false
console.log(isValidIP("123.045.067.089")); // false
