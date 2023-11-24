let myDate = new Date();

// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);
// console.log(myDate.toLocaleDateString());

let myCreatedDate = new Date(2023,0,23,5,3);
// console.log(myCreatedDate.toLocaleString());

// let CreatedDate = new Date("01-14-2015");
// console.log(CreatedDate.toLocaleString());

// let newDate = new Date("5-06-2023");
// console.log(newDate.toLocaleString());

let myTimeStrap = Date.now()
// console.log(myTimeStrap);
// console.log(myCreatedDate.getTime());

//console.log(Math.floor(Date.now()/1000));

myDate.toLocaleString("default",{
    weekday:"long"
})
console.log(myDate);