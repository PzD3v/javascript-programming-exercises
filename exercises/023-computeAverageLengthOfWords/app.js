// Write your function here
function computeAverageLengthOfWords(word1,word2) {
    let wordLenght1 = word1.length
    let wordLenght2 = word2.length

    return (wordLenght1+wordLenght2)/2

}

let output = computeAverageLengthOfWords('code', 'programs');
console.log(output); // --> 6