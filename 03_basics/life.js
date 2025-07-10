//Immediately Invoked function expressions (IIFE)

(function chai() {
    //named IIFE
    console.log(`DB connected`);
    
})(); //; is imp to stop this

(function aurcode(){
    console.log(`DB CONNECTED TWO`);
})() ;

((name) =>{
    console.log(`DB CONNECTED THREE ${name}`);
})('Deep') 

