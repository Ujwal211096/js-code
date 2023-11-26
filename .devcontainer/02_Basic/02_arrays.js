const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["Superman", "batman", "flash"]

//marvel_heroes.push(dc_heroes)//it push on existing array
//console.log(marvel_heroes);

const myHeroes = marvel_heroes.concat(dc_heroes)//it returns new array

//console.log(myHeroes);

const all_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]]

 let real_another_array = another_array.flat(Infinity);
 console.log(real_another_array);

//console.log(Array.isArray("Superman"));

