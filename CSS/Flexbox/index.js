const str = "Hello World";
str.charAt(2); // "H"

str.charCodeAt(0);//72

const str1 = "Hello";
const str2 = " World";
str1.concat(str2); // "Hello World"
str.endsWith("World"); // true
str.indexOf("World"); // 6

str.replace("l", "*"); // "He*lo World"
str.replaceAll("l", "*"); // "He**o Wor*d"
str.slice(6); // "World"
str.slice(6,9);// "Wo"
str.split(" "); // ["Hello", "World"]
str.startsWith("Hello"); // true
str.substring(1, 2); // "e"
str.toLowerCase();
str.toUpperCase();
const str3 = "  Hello World  ";
str.trim(); // "Hello World"

//template literal

let s="MERN Stack";
console.log(`Welcome to ${s} course`);

// Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
Array.splice()

// Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.
Array.slice()
Array.reverse()
Array.sort()
let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
const person2 = {};
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
let arr=[1,2,3,3,4,5,6];
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  
}
 


const func=()=>{}
