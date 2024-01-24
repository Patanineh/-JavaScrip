function frequencySort(s) {
    // Count the frequency of each character
    const charCount = {};
    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Sort characters based on frequency, uppercase, and alphabetically
    const sortedChars = Object.keys(charCount).sort((a, b) => {
        // Sort by frequency in descending order
        const freqCompare = charCount[b] - charCount[a];
        if (freqCompare !== 0) return freqCompare;

        // If frequency is the same, sort by uppercase
        const caseCompare = a.toLowerCase().localeCompare(b.toLowerCase());
        if (caseCompare !== 0) return caseCompare;

        // If frequency and case are the same, sort alphabetically
        return a.localeCompare(b);
    });

    // Construct the sorted string
    let result = '';
    for (const char of sortedChars) {
        result += char.repeat(charCount[char]);
    }

    return result;
}

// Test cases
console.log(frequencySort("tree"));    // "eert"
console.log(frequencySort("cccaaa"));  // "aaaccc"
console.log(frequencySort("Aabb"));    // "bbAa"
