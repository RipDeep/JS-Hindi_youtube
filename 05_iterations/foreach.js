const coding=["js","rb","py","c++","java"]

/* coding.forEach(function(item) {
    console.log(item);
    
});

coding.forEach(item => {
    console.log(item);
    
}); */


/* function printMe(item){
    console.log(item);
    
}

coding.forEach(printMe); */

/* coding.forEach( (item,index,arr) => {
    console.log(item,index,arr);
    
}) */

const myCoding =[
    {
        languageName: "js",
        languageFileNAme: "jsjs",
        
    },
    {
        languageName: "java",
        languageFileNAme: "javajava",

    },
    {
        languageName: "jpythons",
        languageFileNAme: "py",

    }
]

myCoding.forEach((item) => {
    console.log(item.languageFileNAme);
    
});