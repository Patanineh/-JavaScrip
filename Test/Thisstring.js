function secretWord(str, len) {
    const getLetterValue = (letter) => letter.charCodeAt(0) - 'a'.charCodeAt(0) + 1;

    const isArithmeticSeries = (values) => {
        const diff = values[1] - values[0];
        for (let i = 2; i < values.length; i++) {
            if (values[i] - values[i - 1] !== diff) {
                return false;
            }
        }
        return true;
    };

    let result = '';
    for (let i = 0; i <= str.length - len * 3; i++) {
        const triplet = str.slice(i, i + len * 3);
        const values = [];
        for (let j = 0; j < triplet.length; j += 3) {
            const letter = triplet[j + 1];
            values.push(getLetterValue(letter));
        }

        if (isArithmeticSeries(values)) {
            result = triplet.slice(len, len * 2);
            break;
        }
    }

    return result;
}

// ทดสอบ
console.log(secretWord("sadbpsterdvaefikkgoengrt", 5)); // "brake"
console.log(secretWord("aheiayd", 3)); // "hey"
