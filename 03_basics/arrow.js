const user={
    userName:"Deep",
    price:199,

    welcomeMessage: function () {
        console.log(`${this.userName}, Welcome to website`);
        // console.log(this);
        
    }


}

/* user.welcomeMessage()
user.userName = "sam"
user.welcomeMessage() */

// console.log(this);

/* function chai() {
    let userName ="Hitesh"
    console.log(this.userName);
    
}
chai(); */


/* 
const chai = function name(params) {
    let userName ="Hitesh"
    console.log(this.userName);
}
chai(); */


const chai = () => {
    let userName ="Hitesh"
    console.log(this);
    console.log(this.userName);
}

chai();
/* 
const addtwo=(num1,num2)=>{
    return num1+num2
}

console.log(addtwo(2,6)); */

/* const addtwo=(num1,num2)=> num1+num2

console.log(addtwo(2,6)) */

// const addtwo=(num1,num2)=>( num1+num2 )

const addtwo=(num1,num2)=>({userName: "Deep"})

console.log(addtwo(2,6))

const myArray = [2,5,8,9,5,9]

// myArray.forEach(()=>)


