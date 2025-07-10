//scope of a variable
// let a=10
// const b =20
// var c =30


var c=300
let a=3000
if (true) {
    let a=10
    const b =20
    var c =30
    console.log("inner",a);
    
}

console.log(a);
// console.log(b);
console.log(c);


function one() {
    const userName="Deep"

    function two() {
        const website="Youtube"
        console.log(userName);
    }
    // console.log(website);
    two();
}

one()

if (true) {
    const user="Deep Das"
    if (user=="Deep Das") {
        const website=" youtube"
        console.log(user+website);
    }
    // console.log(website);
    
}
// console.log(user);


// *********************** interesting ************************
console.log(addone(5));


function addone(num) {
    return num+1
}

// console.log(addone(5));


// addTwo(5)
const addTwo =function(num){
    return num+2
}
addTwo(9)
