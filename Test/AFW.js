function jumpingFrog(n, stones) {
    // ฟังก์ชันตรวจสอบว่าการกระโดดทำได้หรือไม่
    const isValidJump = (current, jump) => current + jump >= 0 && current + jump < n;

    // ฟังก์ชันเรคเคอร์ซีเพื่อหาจำนวนการกระโดดขั้นต่ำ
    const findMinJumps = (current, jumps) => {
        // กรณีพื้นฐาน: หากจรวดถึงหรือเกินหินสุดท้าย, คืนจำนวนการกระโดด
        if (current >= n) {
            return jumps;
        }

        // ตรวจสอบว่าจรวดสามารถกระโดดไปข้างหน้าได้หรือไม่
        if (isValidJump(current, stones[current])) {
            const forwardJump = findMinJumps(current + stones[current], jumps + 1);
            // หากการกระโดดไปข้างหน้านำไปสู่การแก้ปัญหา, คืนผลลัพธ์
            if (forwardJump !== "no chance :-(") {
                return forwardJump;
            }
        }

        // ตรวจสอบว่าจรวดสามารถกระโดดย้อนกลับได้หรือไม่
        if (isValidJump(current, -stones[current])) {
            const backwardJump = findMinJumps(current - stones[current], jumps + 1);
            // หากการกระโดดย้อนกลับนำไปสู่การแก้ปัญหา, คืนผลลัพธ์
            if (backwardJump !== "no chance :-(") {
                return backwardJump;
            }
        }

        // หากไม่มีการกระโดดที่ถูกต้อง, คืน "no chance :-("
        return "no chance :-(";
    };

    // เริ่มเรคเคอร์ชันจากหินแรก
    return findMinJumps(0, 1);
}

// ทดสอบ
console.log(jumpingFrog(5, [1, 1, 1, 1, 11]));  // 6
console.log(jumpingFrog(5, [1, 3, 1, 1, 1]));   // 4
console.log(jumpingFrog(5, [1, 1, 0, 1, 11]));  // "no chance :-("
