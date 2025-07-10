//function




function sayMyName(){
    console.log("H");
    console.log("E");
    console.log("L");
    console.log("L");
    console.log("O");
}

// sayMyName()


// function addTwoNumber(number1,number2) {

//     console.log(number1 + number2 );
    
// }

addTwoNumber(3,4)
addTwoNumber(3,"4")
addTwoNumber(3,"a")
addTwoNumber(3,null)


function addTwoNumber(number1,number2) {

    // let sum = number1 + number2;    
    // return sum; 
    return number1 + number2; 
    
}
const result = addTwoNumber(3,9);

console.log(result); // undefined, because the function does not return anything


// function loggedInUserMessage(userName) {
//     if (userName === undefined ) {
//         console.log("please enter a username.");
//         return
//     }
//         return `${userName} just logged in.`;
    
// }
function loggedInUserMessage(userName="sam") {
    if (userName === undefined ) {
        console.log("please enter a username.");
        return
    }
        return `${userName} just logged in.`;
    
}

console.log(loggedInUserMessage("John")); // "John just logged in."  
console.log(loggedInUserMessage());   
console.log(loggedInUserMessage("")); // " just logged in."







