//if statement

const isUserLoggedIn=true;
const temparature=41;
/* 
if (temparature===40) {
    console.log("less than 50");
    
}
else{
    console.log("Temparature is greater than 50");
}

console.log("execute"); */



/* if (2!==2) {
    console.log("hello");
    
}

if (false) {
    
} */

// 2<2
// 2<=2
// 3!=2
// <,>,<=,>=,==,!=,=== {check the data type also}, !==

/* const score =200

if(score>100){
    const power ="fly"
    console.log(`user power: ${power}`);
    
} */
// console.log(`user power: ${power}`); //scope not here of power

/* const balance =1000
if (balance>500) console.log("test"); */


/* const balance =1000
if (balance>500) console.log("test"),
console.log("test2");  *///immature code


/* const balance = 1000

if (balance<500) {
    console.log("less than 500");
} else if(balance<750){
    console.log("less than 750");  
}else if(balance<900){
    console.log("less than 900");  
}else{
    console.log("less than 1200");
    
} */



const userLoggedIn =true;
const debitCard=true;
const loggedInFromGoogle=false;
const loggedInFromEmail=true;

if (userLoggedIn && debitCard && 2==2) {
    console.log("Allowed to buy courses");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in"); 
}






