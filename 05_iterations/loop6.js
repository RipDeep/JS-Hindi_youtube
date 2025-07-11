const myNums =[1,2,3]

/* const myTotal=myNums.reduce(function(acc,cuurentValue){
    console.log(`acc ${acc} and currVal ${cuurentValue}`);
    
    return acc+cuurentValue
},0) */


/* const myTotal =myNums.reduce((acc, curr)=>{
    console.log(`acc ${acc} and currVal ${curr}`);
    return acc+curr
},0) */


// const myTotal =myNums.reduce((acc, curr)=> acc+curr,0)

//console.log(myTotal);

const shoppingCard =[ 
    {
        itemName : "js course",
        price: 199
    },
    {
        itemName : "py course",
        price: 599
    },
    {
        itemName : "mobule course",
        price: 5699
    },
    {
        itemName : "data science course",
        price: 12999
    }
]


const priceToday=shoppingCard.reduce((acc,item)=>acc+item.price,0)

console.log(priceToday);
