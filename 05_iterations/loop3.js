const myObj={
    js: "javascript",
    cpp: "c++",
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in myObj) {
    //console.log(key);
    // console.log(myObj[key]);
    console.log(`${key} shortcut is for ${myObj[key]}`);
}

const programming=["js","rb","py","c++","java"]

for (const key in programming) {
    console.log(programming[key]);
    
}

const map =new Map()

map.set('IN', "India")
map.set('USA', "United State of America")
map.set('FR', "France")

map.set('IN', "India")

for (const key in map  ) {
    console.log(key); //Maps are not iterable like that
}



