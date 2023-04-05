let h1=document.querySelector(".red");



const btn = document.querySelector("button");
btn.onclick = function () {
  btn.classList.toggle("green");
  btn.innerHTML="<b>Clicked</b>";
};

const inp=document.querySelector("input");
console.log(inp.getAttribute("type"));
inp.setAttribute("type","color");

let h3 = document.createElement("h3");

h3.innerText = "Hello World";

document.body.appendChild(h3);

btn.addEventListener("click", () => {
  alert("you clicked me!!!");
});
let data={
  name:"Rahul",
  age:"18"
}

btn.onclick = async () => {
  const response = await axios.get("https://pokeapi.co/api/v2/pokemon-species/1");
  console.log(response.data);
}

