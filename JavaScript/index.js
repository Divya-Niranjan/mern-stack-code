const square2 = (x) =>{
  return x*x;
}
square2(4)

function funcAsArg(func) {
  func();
  func();
}

function sayHello() {
  console.log("Hello");
}

funcAsArg(sayHello);

let deets = {
  firstName: "Divya",
  lastName: "Niranjan",
  fullName:function(){
    console.log(this);
    return this.firstName + " " + this.lastName;
  },
  shoutName: function () {
    setTimeout(() => {
      console.log(this);
      console.log(this.fullName());
    }, 3000);
  }
};

deets.fullName(); // "Divya Niranjan"

try {
  sayHello.upperCase();
} catch (err) {
  console.log("An error occurred");
}

let nums = [1, 2, 3, 4, 5];

nums.forEach(function (num) {
  console.log(num * 2);
});

let names = ["John", "Jane", "Joe"];

//here you return content you want to add to the new array

let modifiedNames = names.map(function (name) {
  return name.toUpperCase();
});

//return type is an array
//here you return a boolean and the element is added to the new array if true
let filteredNums = nums.filter(function (num) {
  return num % 2 === 0;
});

let square = (x) => {
  return x * x;
};

let cube = (x) => x * x * x;

//implicit return
let even = (x) => x % 2 === 0; //true or false

//setTimeout(callback function, delay)

console.log("Start");
setTimeout(function () {
  console.log("After the delay");
}, 5000);
console.log("waiting for the delay to end");

//setInterval(callback function, delay)

// let counter = 0;
// let interval = setInterval(function () {
//   console.log(counter);
//   counter++;
// }, 1000);

let words = ["hello", "world", "this", "is", "a", "sentence"];

words.every((word) => word.length > 3); //false

//checks if there is any word with length greater than 3
words.some((word) => word.length > 3); //true

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce(function (result, item) {
  return result + item;
}, 0);
console.log(sum); // 10

var pets = ["dog", "chicken", "cat", "dog", "chicken", "chicken", "rabbit"];

var petCounts = pets.reduce(function (obj, pet) {   obj={}
  if (!obj[pet]) {
    obj[pet] = 1;
  } else {
    obj[pet]++;
  }
  return obj;
}, {});

console.log(petCounts);
/*
Output:
 { 
    dog: 2, 
    chicken: 3, 
    cat: 1, 
    rabbit: 1 
 }
 */

Math.max(numbers); //returns NAN
Math.max(...numbers); //returns max value

let obj = { ...[1, 2, 3, 4] }; //returns {0:1,1:2,2:3,3:4}

let obj2 = {
  fruits: ["apple", "banana", "orange"],
  vegetables: ["carrot", "tomato", "onion"],
  dairy: ["yogurt", "cheese"],
};
//destructuring
let { fruits, vegetables } = obj2; //fruits=["apple", "banana", "orange"], vegetables=["carrot", "tomato", "onion"]

const images = document.getElementsByTagName("img");

for (let i = 0; i < images.length; i++) {
  images[i].src = "https://source.unsplash.com/random";
}

document.getElementById("b")
let button=document.getElementsByTagName("button")
let division=document.getElementsByClassName("div")

// button.setAttribute("class","red")


//finds the first element that matches the selector

//finds first element with class of red
let h1=document.querySelector(".red");

h1.style.backgroundColor = "red";
h1.getAttribute("class");
// h1.setAttribute("class", "red"); //replaces the class to red

h1.classList.add("red"); //adds red to list of class

h1.classList.remove("red"); //removes red from list of class

h1.classList.toggle("red"); //adds red if not present, removes if present

let h3 = document.createElement("h3");

h3.innerText = "Hello World";

document.body.appendChild(h3); //adds h3 to the end of the body

const newB = document.createElement("b");
newB.append("this is bold text");

//<button onClick="alert('you clicked me')">Click Me</button>

const btn = document.querySelector("button");
btn.onclick = function () {
  alert("you clicked me");
};

btn.addEventListener("click", () => {
  alert("you clicked me!!!");
});

//Using onclick we cannot add more than one event but using addEventListener we can add multiple events

/* PROMISES */

// Whenever we perform an async operation it might either succeed or fail.
// Because it is an async operation, we do not know what will happen
// Promise is an object representing the "eventual" completion or failure of an async call

const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500);
    setTimeout(() => {
      if (delay > 3000) {
        reject("Conection timed out");
      } else {
        resolve("Successfully fetched data");
      }
    }, delay);
  });
};


//fetch api
fetch("https://pokeapi.co/api/v2/pokemon-species/1").then((res) => {
  return res.json() 
}).then((data) => {

}).catch((err) => {
  console.log(err);
})

// but we don't usually work with promises directly. we will make use of the async await syntax

const asyncFunc = async () => {
  const response = await axios.get("SOME_URL");
}

//https://pokeapi.co/api/v2/pokemon-species/1