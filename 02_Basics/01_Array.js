const myArr=[1,2,3,4,5,true,"Pradeep"]
// Array=>colllection of various elements in single variable,array are resizable,mixture of dattype,
//  console.log(myArr[3]);

//  in JS array copy operation creates shallow copy -copy share same reference point

// Array Methods
// push add element at last index and pop remove element from last index

const myArr1= new Array(1,2,3,4)

// Array methods
// myArr.push(8)
// myArr.pop()

// unshift add element at first index and shift remove element from first index
// Problem- all array value shift
// myArr.unshift(9) 
myArr.shift()


// myArr.includes()
// myArr.indexOf()
// myArr.findIndex()

const newArr=myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice,splice

// console.log("A",myArr);
// const myA1=myArr.slice(1,3)

// console.log(myA1);
// console.log("B",myArr);

// const myA2=myArr.splice(1,3)

// console.log(myA2);
// console.log("C",myArr);
// difference between slice and splice
// slice- In slice last range not include and do not change in original array
// splice- In splice  last range include and changes in the original array and return remaining array after splice operation


// array second lecture
const marvel_heros=["thore","ironman","spidermen"]
const dc_heros=["superman","flash","batmen"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros); //[ 'thore', 'ironman', 'spidermen', [ 'superman', 'flash', 'batmen' ] ]
// console.log(marvel_heros[3][0]);
const allHero=marvel_heros.concat(dc_heros) 
// console.log(allHero);

// push method return existing array but concat method return new array

const allNewArr=[...marvel_heros,...dc_heros]
// console.log(allNewArr);
const anotherArr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realArr=anotherArr.flat(2)   //array depth or infinity
// console.log(realArr);


// console.log(Array.isArray("Pradeep")); //check array or not
// console.log(Array.from({}));
// console.log(Array.from("Pradeep")); // convert to array  //[
//     'P', 'r', 'a',
//     'd', 'e', 'e',
//     'p'
//   ]
// console.log(Array.from({name:"Pradeep"}));  //[] interesting first tell make array with key or value

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ]
