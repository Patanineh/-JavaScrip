function digitalClock(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    // ฟังก์ชัน padStart ใช้เพื่อเติม 0 ข้างหน้าเลขในกรณีที่มีเลขน้อยกว่า 10
    const formatTime = (time) => time.toString().padStart(2, '0');

    return `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(remainingSeconds)}`;
}

// ทดสอบ
console.log(digitalClock(5025)); // "01:23:45"
console.log(digitalClock(61201)); // "17:00:01"
console.log(digitalClock(87000)); // "00:10:00"
