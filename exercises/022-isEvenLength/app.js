// Write your function here
function isEvenLength(word) {
    let wordLenght = word.length
    if (wordLenght%2 ==0 ) {
        return true
        
    }else{
        return false
    }
}
let output = isEvenLength('wow');
console.log(output); // --> false