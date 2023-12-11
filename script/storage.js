'use strict';


const navEl = document.getElementById("sidebar");
navEl.addEventListener("click", function(){
    this.classList.toggle("active")
})

//const petArr = [];
const data1 = {
  id: "P001",
  name: "Tom",
  age: 2,
  type: "Cat",
  weight: 5,
  length: 50,
  color: "red",
  bleed: "Tabby",
  vaccinated: true,
  dewormed: true,
  sterilized: true,
  date: new Date(2022, 2, 1),
  bmi: "?",
};
const data2 = {
  id: "p002",
  name: "Mike",
  age: 2,
  type: "Dog",
  weight: 5,
  length: 2,
  color: "black",
  bleed: "Mixed Breed",
  vaccinated: false,
  dewormed: false,
  sterilized: false,
  date: new Date(2022, 2, 1),
  bmi: "?",
};

const breed1 ={
    id:"1",
    breed : "mixed breed",
    type: "dog"
}
const breed2 ={
    id:"2",
    breed : "tabby",
    type: "dog"
}
const breed3 ={
    id:"3",
    breed : "Chó Phú Quốc",
    type: "dog"
}
const breed4 ={
    id:"4",
    breed : "Mào mướp",
    type: "dog"
}
if(getFromStorage("petArr")){
    saveToStorage("petArr",[data1,data2]);
}
const petArr = getFromStorage("petArr");

if(getFromStorage("breedArr")){
    saveToStorage("breedArr",[breed1,breed2,breed3,breed4]);
}
const bleedArr = getFromStorage("breedArr");


function getFromStorage(key){
    return JSON.parse(localStorage.getItem(key));
}

function saveToStorage(key, value){
    localStorage.setItem(key,JSON.stringify(value));
}
