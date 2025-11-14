// Write your function here
function computeAverageOfNumbers(arr) {
    cont = 0
    if (arr=="") {
        return 0
        
    }else{
        for (let index of arr) {
        cont +=index
    }
    }
    
    return cont/arr.length
    
}

let input = [1, 2, 3, 4, 5];
let output = computeAverageOfNumbers(input);
console.log(output); // --> 3