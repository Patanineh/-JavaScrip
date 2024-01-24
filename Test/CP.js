function canMove(piece, start, target) {
    const startFile = start.charAt(0).charCodeAt(0) - 'A'.charCodeAt(0) + 1;
    const startRank = parseInt(start.charAt(1));

    const targetFile = target.charAt(0).charCodeAt(0) - 'A'.charCodeAt(0) + 1;
    const targetRank = parseInt(target.charAt(1));

    // ตรวจสอบว่าทั้ง start และ target อยู่ในกรอบของช่องหน้าเช็ค
    if (startFile < 1 || startFile > 8 || startRank < 1 || startRank > 8 ||
        targetFile < 1 || targetFile > 8 || targetRank < 1 || targetRank > 8) {
        return false;
    }

    const fileDiff = Math.abs(targetFile - startFile);
    const rankDiff = Math.abs(targetRank - startRank);

    switch (piece) {
        case "Pawn":
            // ไม่รวม pawn capture moves และ en passant
            return fileDiff === 0 && (targetRank === startRank + 1 || (startRank === 2 && targetRank === startRank + 2));
        case "Knight":
            return (fileDiff === 1 && rankDiff === 2) || (fileDiff === 2 && rankDiff === 1);
        case "Bishop":
            return fileDiff === rankDiff;
        case "Rook":
            return fileDiff === 0 || rankDiff === 0;
        case "Queen":
            return fileDiff === 0 || rankDiff === 0 || fileDiff === rankDiff;
        case "King":
            return fileDiff <= 1 && rankDiff <= 1;
        default:
            return false;
    }
}

// ทดสอบ
console.log(canMove("Rook", "A8", "H8")); // true
console.log(canMove("Bishop", "A7", "G1")); // true
console.log(canMove("Queen", "C4", "D6")); // false
