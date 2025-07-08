const name="Deep"
const repoCount = 50

//console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Deep-Das-com')
console.log(gameName);
console.log(gameName.length);
console.log(gameName[2]);
console.log(gameName.__proto__);


console.log(gameName.toUpperCase()); //Not change original value
console.log(gameName);

console.log(gameName.charAt(3));
console.log(gameName.indexOf('e'));

//const newString = gameName.substring(0,4)
//console.log(newString);

const anotherString =gameName.slice(-8 , 3)

console.log(anotherString);


const newString1="     hitesh      "

console.log(newString1);
console.log(newString1.trim());

const url = "https://hitesh.com/hitesh%20choudhury"

console.log(url.replace('%20','_'));

console.log(url.includes('hitesh'));
console.log(url.includes('deep'));

console.log(gameName.split('-'));






