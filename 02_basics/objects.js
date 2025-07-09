//singleton
// Object.create

//object literals

const mySym = Symbol("Key1")

const JsUser ={
    name : "Deep",
    age : 20,
    "full name" : "Deep Das",
    [mySym]: "Mykey1",
    location :"jaipur",
    email: "Deep@gmail.com",
    isLoggedIn: false,
    lastLoggedInDays:["Monday", "Saturday"]
}

console.log(JsUser.email);
//console.log(JsUser[email]);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);

console.log(JsUser[mySym]);
console.log(typeof JsUser.mySym);

JsUser.email="DeepDasChatgpt.com"
//Object.freeze(JsUser)
JsUser.email="DeepDasMicrosoft.com"

console.log(JsUser);


JsUser.greeting=function(){
    console.log("hello wolrd");
    
}
JsUser.greetingTwo=function(){
    console.log(`hello Js User, ${this.name}`);
    
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());


console.log(JsUser.greetingTwo());


