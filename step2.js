//runtime complexity= O(n^2)
//space Complexity= O(1)
function addToZero(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === 0) {
        return true;
      }
    }
  }
  return false;
}
addToZero([]);// -> False
addToZero([1]);// -> False
addToZero([1, 2, 3]);// -> False
addToZero([1, 2, 3, -2]);// -> True


//runtime Complexity= O(n^2)
//space Complexity= O(1)
function hasUniqueCharacters(word) {
  for (let i = 0; i < word.length; i++) {
    for (let j = i + 1; j < word.length; j++) {
      if (word[i] === word[j]) {
        return false;
      }
    }
  }
  return true;
}
console.log(hasUniqueCharacters('hello')); // false
hasUniqueCharacters("Monday"); // -> True
hasUniqueCharacters("Moonday");// -> False



//runtime Complexity= O(n)
//space Complexity= O(1)
function isPangram(sentence) {
  // Convert the sentence to lowercase and remove all non-letter characters
  const cleanedSentence = sentence.toLowerCase().replace(/[^a-z]/g, '');
  // Create an array of booleans to keep track of the letters that have been seen
  const seenLetters = new Array(26).fill(false);
  for (let i = 0; i < cleanedSentence.length; i++) {
    seenLetters[cleanedSentence.charCodeAt(i) - 97] = true;
  }
  // Check if all letters have been seen
  for (let i = 0; i < 26; i++) {
    if (!seenLetters[i]) {
      return false;
    }
  }
  return true;
}
console.log(isPangram('The quick brown fox jumps over the lazy dog.')); // true



//runtime Complexity= O(n)
//space Complexity= O(1)
function findLongestWord(words) {
  let longestLength = 0;
  for (let i = 0; i < words.length; i++) {
    longestLength = Math.max(longestLength, words[i].length);
  }
  return longestLength;
}
console.log(findLongestWord(['cat', 'dog', 'elephant'])); // 8