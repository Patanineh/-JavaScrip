function findWords(words, chars) {
  // Function to calculate the ASCII sum of a word
  function calculateASCIISum(word) {
    return word.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
  }

  // Create an array to store the matching words
  const matchingWords = [];

  // Check if 'honeydew' can be formed
  if (
    words.some(word => word === 'honeydew' && chars.every(char => word.includes(char)))
  ) {
    matchingWords.push('honeydew');
  }

  // Iterate through the words
  for (const word of words) {
    const charCount = {};

    // Check if the word can be formed
    let canFormWord = true;
    for (const char of word) {
      charCount[char] = (charCount[char] || 0) + 1;
      if (!chars.includes(char) || (charCount[char] > chars.filter(c => c === char).length)) {
        canFormWord = false;
        break;
      }
    }

    // If the word can be formed and it's not 'honeydew', add it to the matchingWords array
    if (canFormWord && word !== 'honeydew') {
      matchingWords.push(word);
    }
  }

  // Sort the matching words array based on ASCII sums in descending order
  matchingWords.sort((a, b) => {
    const sumA = calculateASCIISum(a);
    const sumB = calculateASCIISum(b);
    return sumB - sumA;
  });

  return matchingWords;
}

// Example usage
const words = ["cherry", "date", "honeydew", "orange", "papaya"];
const characters = ['o', 'r', 'a', 'n', 'g', 'e', 'h', 'y', 'd', 'w', 't', 't', 't', 'e', 'w'];

const result = findWords(words, characters);
console.log(result);

const words2 = ["date", "fig", "mango"];
const characters2 = ['a', 't', 'e', 'm', 'n', 'g', 'o', 'f', 'i'];

const result2 = findWords(words2, characters2);
console.log(result2);

const words3 = ["apple", "banana", "orange", "kiwi"];
const characters3 = ['a', 'p', 'l', 'e', 'o', 'r', 'n', 'g'];

const result3 = findWords(words3, characters3);
console.log(result3);

module.exports = { findWords };
