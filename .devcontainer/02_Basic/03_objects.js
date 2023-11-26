//literal objects


const mySym = Symbol("key1")


let myObj = {
    name: "ujwal",
    surname: "Kelkar",
    "full name": "Ujwal kelkar",
    age : 27,
    location: "Pune",
    email: "ujwal@gmail.com",
    [mySym]:"myKey1",
    isLoggedIn: false,
    lastLogginDays: ["monday", "tuesday", "wednesday"]

}

// console.log(myObj.age);
// console.log(myObj["full name"]);
// console.log(myObj["lastLogginDays"]);
// console.log(myObj[mySym]);

// myObj.email = "ujwalkelkar007@gmail.com";
// Object.freeze(myObj)
// myObj.email = "ujwal@gmail.com"
// console.log(myObj);

myObj.greeting = function(){
    console.log("Hello Object");
}

console.log(myObj.greeting());

myObj.greetingTwo = function (){
    console.log(`Hello User ${this["full name"]}`);
}
console.log(myObj.greetingTwo());