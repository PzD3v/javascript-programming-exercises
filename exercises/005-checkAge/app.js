function checkAge(name, age) {
  // your code here
  if (age<21) {
    return (`Go home, ${name}!`)
    
  }else if(age>=21){
    return (`Welcome, ${name}!`)
  }
  
}

let output = checkAge('Adrian', 21);
console.log(output); // --> 'Welcome, Adrian!'