//premitive 

//7 type : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id ==anotherId);


const bigNumber=3515616556565n //BigInt


//Reference type (non premitive) 

//Array, Objects, Functions

const heros =["shaktiman", "naagra", "doga"]
console.log(heros);
let myObj={
    name:"Deep",
    ageNumber :22
}

const myFunction=function(){
    console.log("hello world");
}

console.log(typeof bigNumber);

console.log(typeof heros);



