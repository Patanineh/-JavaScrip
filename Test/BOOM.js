function bomb(sensors) {
    const speedOfSound = 0.343;  // ความเร็วของเสียงในอากาศ (km/sec)

    // คำนวณระยะทางและเวลาสำหรับแต่ละเซนเซอร์
    const distances = [];
    const times = [];
    for (const sensor of sensors) {
        const [x, y, recordedTime] = sensor;
        const distance = Math.sqrt(x**2 + y**2);
        const calculatedTime = distance / speedOfSound;
        
        distances.push(distance);
        times.push(calculatedTime);
    }

    // หาเวลาเฉลี่ย
    const averageTime = times.reduce((sum, time) => sum + time, 0) / times.length;

    // หาเซนเซอร์ที่มีความต่างเวลาน้อยที่สุด
    const closestSensorIndex = times.findIndex(time => Math.abs(time - averageTime) === Math.min(...times.map(time => Math.abs(time - averageTime))));

    // คืนค่าตำแหน่งของระเบิด
    return sensors[closestSensorIndex].slice(0, 2);
}

// ทดสอบ
console.log(bomb([[0, 0, 72.886], [0, 50, 72.886], [25, 25, 72.886]]));  // [0, 25]
console.log(bomb([[0, 50, 145.773], [50, 50, 206.154], [50, 0, 145.773]]));  // [0, 0]
console.log(bomb([[5, 8, 48.872], [12, 21, 35.107], [24, 20, 22.203]]));  // [21, 13]
console.log(bomb([[18, 42, 35.558], [39, 16, 106.004], [7, 24, 32.202]]));  // [8, 35]
