//for loop

/* for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element==5) {
        console.log("5 is best number");
        
    }
    console.log(element);

} */

// console.log(element); //scope not here 


/* for (let i = 1;i <= 10; i++) {
    console.log("outter loop", i);
    
    for (let j  = 1; j  <= 10; j ++) {
        // console.log(`inner loop value ${j} and inner loop ${i}`);
         console.log(i + '*' + j + '= '+ i*j);
          
    }
    
} */

    /* let myArrays = [ "flash", "batman", "superman"]
    console.log(myArrays.length);
    

    for (let index = 0; index < myArrays.length; index++) {
        const element = myArrays[index];
        console.log(element);
        
    } */

//break and continue

/* for (let index = 1; index<=20 ; index++) {
    if (index == 5) {
        console.log("Delected 5");
        break;
    }
    console.log(`value od i is ${index}`);
} */


for (let index = 1; index<=20 ; index++) {
    if (index == 5) {
        console.log("Delected 5");
        continue; //just skip one time
    }
    console.log(`value od i is ${index}`);
}