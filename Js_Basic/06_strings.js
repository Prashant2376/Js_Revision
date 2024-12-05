const name = "Prashant"
const repoCount = 50
//console.log(name + repoCount + " value");

//console.log(`Hello my name is ${name} and my repo count is ${repoCount} `);

const gameName = new String('Prashant')
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf("t"));


const newString = gameName.substring(0,4)  // 4 character
console.log(newString);


const anotherString = gameName.slice(-8,6)  // last se 2 minus 
console.log(anotherString);

const newStringOne = "   prashant  "
console.log(newStringOne.trim());
