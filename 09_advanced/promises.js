const promisesOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log(("Async task is complete"));
        resolve()
    },1000)
})

promisesOne.then(function(){
    console.log("Promised consume");
    
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("async two resolve");
    
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "cahi", email: "bihvhbsfhb"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "coffe", password: "5656"})
        }else{
            reject("Error: Something went Wrong")
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
    
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("The promise is either resolve or resolve")
)


const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "javascript", password: "5656"})
        }else{
            reject("Error: JS went Wrong")
        }
    },1000)
})

async function consumePromiseFive( ){
    try {
        const response=await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}

consumePromiseFive()

/* async function getAllUsers() {
    try {
        const response=await fetch("https://jsonplaceholder.typicode.com/users")
        // console.log(response);
        
        const data =await response.json()

        console.log(data);
    } catch (error) {
        console.log("ERROR : ", error);
        
    }
    
} */
   
// getAllUsers()

fetch("https://api.github.com/users/hiteshchoudhary")
.then((response)=>{
return response.json()
}).then((data)=>{
    console.log(data);
    
}).catch((error)=> console.log(error)
)