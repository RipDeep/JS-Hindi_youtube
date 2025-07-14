const user={
    username:"Deep",
    loginCount:9,
    signedIn:true,
    getUserDetails: function(){
        // console.log("Got user detaails from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);  
    }
}


console.log(user);
console.log(user.getUserDetails());
console.log(user.username)
console.log(this);


function UserNow(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne=new UserNow("Deep", 12, true) //new keyword calls the constructor
/* const userTwo=new UserNow("Chai ", 15, false)
console.log(userOne);
console.log(userOne.greeting());
console.log(userTwo); */

console.log(userOne.constructor);




/* 

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo); */