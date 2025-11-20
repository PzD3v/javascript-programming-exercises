// Write your function here
function isOddLength(word) {
    let wordLenght = word.length
    if (wordLenght%2 !==0 ) {
        return true
        
    }else{
        return false
    }
}

let output = isOddLength('special');
console.log(output); // true