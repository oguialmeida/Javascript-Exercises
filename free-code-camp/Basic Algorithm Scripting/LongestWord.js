// Find the Longest Word in a String
function findLongestWordLength(str) {
  let words = str.split(" ");
  let arr = [];

  for (let i = 0; i < words.length; i++) {
    arr.push(words[i].length);
  }
  let longest = Math.max.apply(null, arr);

  return longest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
