// const userEmail="h@ai"
// const userEmail=""
const userEmail=[]

if (userEmail) {
    console.log("Got user email"); 
}
else{
    console.log("dont have user email."); 
}


//falsy value

// false, 0, -0, BigInt 0n, "",null, undefined, NaN

//truthy value

//"0", 'false', " ", [], ?{}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length===0) {
    console.log("Object is empty");
}

//false == 0 //true

//false = '' //true
//0 == ""   //true


//Nullish Coalescing Operator (??) : null undefined

let val1;
// val1= 5 ?? 10

// val1 = null ?? 10

// val1 =undefined ?? 15

// val1 = null ?? 10 ?? 50
val1 = null ?? undefined ?? 50

console.log(val1);

//Ternary operator 

//syntax
// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80"):console.log("more than 80");
;




