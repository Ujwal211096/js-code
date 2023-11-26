//const tinderUser = new Object();// singleton object

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name ="Sammy";
tinderUser.isLoggedin= false;

//console.log(tinderUser);

const regularUser = {
    email:"ujwal@gmail.com",
    fullname: {
        userFullName:{
            firstName: "ujwal",
            lastName: "Kelkar"
        }
    }
}

// //console.log(regularUser.fullname.userFullName.firstName);

// const obj1 = {1 :"a", 2:"b"};
// const obj2 = {3:"c", 4: "d"};


// //const obj3 = {obj1, obj2}

// //const obj3 = Object.assign({}, obj1, obj2)// to merge different objects
// //  {} is target and other is source


// //
// //const obj3 = {...obj1, ...obj2}//combine using spread operator


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty("IsLoggin"));

const course ={
    courseName : "JS in Hindi",
    price: 999,
    courseInstructor: "Hitesh"
}

//course.courseInstructor;

const {courseInstructor : ins} = course;  //object destructoring
console.log(ins);

/* const navbar = ({company}) =>{
    
}
navbar(company = "google") */ //this is props in react that follows concept of destructoring



// {
//     "name": "ujwal",
//     "course": "JS in hindi",
//     "price": "free"

// }