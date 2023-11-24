let gameName = "ujwal-Opc";

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('j'));

// const newString = gameName.substring(0,4);
// console.log(newString);

// const anotherString = gameName.slice(-7,4)
// console.log(anotherString);

const newString = "    Ujwal   ";
console.log(newString);
console.log(newString.trim());

const url = "https://ujwal.com/ujwal%20kelkar";
console.log(url.replace('%20','_'));

console.log(url.includes('Ujwal'));

console.log(gameName.split('-'));

let name ="ujwal";
let job = "Web Developer";

const myName = (`my name is ${name} and currently looking for ${job} position`);
console.log(myName);
