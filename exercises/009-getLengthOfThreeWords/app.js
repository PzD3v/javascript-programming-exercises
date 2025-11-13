function getLengthOfThreeWords(word1, word2, word3) {
  // your code here
  // your code here
  let cont1 = word1.length
  let cont2 = word2.length
  let cont3 = word3.length
  return cont1+cont2+cont3
  
}

let output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output); // --> 14
