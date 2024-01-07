function findWords(words, chars) {
 
    function calculateASCIISum(word) {
      return word.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
    }
  
    const matchingWords = [];
  
    for (const word of words) {
      const charCount = {};
  
      let canFormWord = true;
      for (const char of word) {
        charCount[char] = (charCount[char] || 0) + 1;
        if (!chars.includes(char) || (charCount[char] > chars.filter(c => c === char).length)) {
          canFormWord = false;
          break;
        }
      }
  
      if (canFormWord) {
        matchingWords.push(word);
      }
    }
  
    matchingWords.sort((a, b) => {
      const asciiSumA = calculateASCIISum(a);
      const asciiSumB = calculateASCIISum(b);
  
      // ถ้า ASCII sum เท่ากันให้เรียงตามลำดับตัวอักษร
      if (asciiSumA === asciiSumB) {
        return a.localeCompare(b);
      }
  
      return asciiSumB - asciiSumA;
    });
  
    return matchingWords;
  }
  
  // ตัวอย่างการใช้งาน
  const words = ["cherry", "date",  "honeydew",   "orange", "papaya"];
  const characters = ['o', 'r', 'a', 'n', 'g', 'e', 'h', 'y', 'd', 'w', 't'];
  const result = findWords(words, characters);
  console.log(result);  // ผลลัพธ์ที่คาดหวัง: [ 'honeydew', 'orange', 'date' ]
  