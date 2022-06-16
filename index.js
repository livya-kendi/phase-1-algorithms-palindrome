function reverse(word){
  const wordArray = word.split("");
  const reversedWordArray = wordArray.reverse();
  const reversedWord = reversedWordArray.join("");
  return reversedWord;
}
function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reverse(word)
  if (word === reversedWord){
    return true;
  }
  else {
    return false;
  }
}

/* 
  Add your pseudocode here
  iterate from the start of the string to the end of the string
  Compare the letter we're iterating over to the matching letter at the end of the string and return false if the letters don't match.

  Return true if we get to the center and all the letters match.

*/

/*
  Add written explanation of your solution here
  I'm going to create an isPalindrome function that returns true or false. I should return true if the input string is the same forwards and backwards. The function should return true if the first letter is the same as the final letter, the second letter is the same as the second to last letter, and so on (to the middle of the word).
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
