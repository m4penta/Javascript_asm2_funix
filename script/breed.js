'use strict';
const submitBtn = document.getElementById("submit-btn");
const inputBleed = document.getElementById('input-breed');
const  inputType = document.getElementById('input-type');
const tableBodyEl = document.getElementById("tbody");
function getFromStorage(key){
    return JSON.parse(localStorage.getItem(key));
}

function saveToStorage(key, value){
    localStorage.setItem(key,JSON.stringify(value));
}


const Pet = getFromStorage("petArr");
console.log(Pet)
const Breed = getFromStorage('breedArr')

console.log(Breed)


function validateData(data) {
    let isValidate = true
    if (data.type === "Select Type") {
        alert("chon loai");
        isValidate = false;
      }
      if (data.breed === "") {
        alert("Please select Breed!");
        isValidate = false;
      }
    return isValidate
}
function clearInput() {
    inputType.value = "Select type";
    inputBleed.value = "Select Breed";
  }
  function renderTableData(bleedArr) {
    tableBodyEl.innerHTML = "";
      for (let i = 0; i < bleedArr.length; i++) {
        console.log(bleedArr[i].bleed)
        let date = bleedArr[i].date
        date = new Date(bleedArr[i].date);

        if (isDate(date)) {
            const row = document.createElement("tr");
            row.innerHTML = `
          <tr>
                                    <th scope="row">${bleedArr[i].id}</th>
                                    <td>${bleedArr[i].type}</td>
                                    <td>${bleedArr[i].bleed}</td>
                                    <td><button type="button" class="btn btn-danger" 
                                    onclick="deletePet('${bleedArr[i].id}')" >Delete</button>
                                    </td>
                                </tr>
        `;
            tableBodyEl.appendChild(row);
        }else{console.log("Không render")}

    }
    
  }