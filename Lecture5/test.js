function canFormWord(word, characters) {
  const charCount = {};

  // Count characters in the characters array
  for (const char of characters) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Check if characters can form the word
  for (const char of word) {
    if (charCount[char] && charCount[char] > 0) {
      charCount[char]--;
    } else {
      return false;
    }
  }

  return true;
}

// Example usage
const words = ["cherry", "date", "honeydew", "orange", "papaya"];
const characters = ['o', 'r', 'a', 'n', 'g', 'e', 'h', 'y', 'd', 'w', 't', 't', 't', 'e', 'w'];

const wordsFormed = words.filter(word => canFormWord(word, characters));
console.log(wordsFormed);
