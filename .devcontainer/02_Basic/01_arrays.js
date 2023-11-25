const arr = [1, 2, 3, 4, 5, 6];

for( i=0; i<arr.length; i++){
   // console.log(arr[i]);
}

//array methods
arr.push(8);//to add element at last index

arr.pop(); //to remove element from last index


arr.push(7)
arr.unshift(10)//to add element at first place

arr.shift()//to remove  element from 1st index

//console.log(arr);

// console.log(arr.includes(5));
// console.log(arr.indexOf(4));

const newArray = arr.join();//it joins array plus also it converts it to string
// console.log(arr);
// console.log(typeof newArray);

console.log("A",arr);
const myn1 = arr.slice(1, 3);// it does changes with just copy of array

console.log(myn1);
console.log("B", arr);

const myn2 = arr.splice(1, 3);// it makes changes in original array
console.log("C", arr);
console.log(myn2);