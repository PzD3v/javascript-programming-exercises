// Write your function here
function isSameLength(word1,word2){
    let cont1 = word1.length
    let cont2 = word2.length
    if (cont1==cont2) {
        return true
    }else{
        return false
    }

}

let output = isSameLength('words', 'super');
console.log(output); // --> true