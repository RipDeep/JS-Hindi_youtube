//function 

function calculateCardPrice(...num1){
    return num1
}

// console.log(calculateCardPrice(200,400,500, 100, 900));
 

const user ={
    userNAme: "Deep",
    prices:999
}

function handleObject(anyobj){
    console.log(`user name is ${anyobj.userNAme} and the price is ${anyobj.price}`); 
}

handleObject(user)
handleObject({
    userNAme:"sam",
    price:399
})

const myNewArray = [ 200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[2];
}

console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([400,80,10,90,70]));


