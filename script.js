'use strict';
const submitBtn = document.getElementById("submit-btn");
const healthyBtn = document.getElementById("healthy-btn");
const idInput = document.getElementById("input-id");
const nameInput = document.getElementById("input-name");
const ageInput = document.getElementById("input-age");
const typeInput = document.getElementById("input-type");
const weightInput = document.getElementById("input-weight");
const lengthInput = document.getElementById("input-length");
const colorInput = document.getElementById("input-color-1");
const breedInput = document.getElementById("input-breed");
const vaccinatedInput = document.getElementById("input-vaccinated");
const dewormedInput = document.getElementById("input-dewormed");
const sterilizedInput = document.getElementById("input-sterilized");
const deleteBtn = document.getElementById("delete");
const calculateBmiBtn = document.getElementById("calculate-bmi-btn");
const tableBodyEl = document.getElementById("tbody");
//console.log(petArr);
function isDate(obj) {
    return obj instanceof Date;
  }
  function validateData(data) {
    let isValidate = true;
  
    if (data.id.trim() === "") {
      alert("id không trống");
      isValidate = false;
    }
  
    if (data.name.trim() === "") {
      alert("name không trống");
      isValidate = false;
    }
    if (isNaN(data.age)) {
      alert("age không trống");
      isValidate = false;
    }
    if (isNaN(data.weight)) {
      alert("weight không trống");
      isValidate = false;
    }
    if (isNaN(data.length)) {
      alert("length không trống");
      isValidate = false;
    }
    for (let i = 0; i < petArr.length; i++) {
      if (data.id === petArr[i].id) {
        alert(" id la duy nhat");
        isValidate = false;
        false;
      }
    }
    if (data.age < 1 || data.age > 15) {
      alert("age must be between 1 and 15");
      isValidate = false;
    }
    if (data.type === "Select Type") {
      alert("chon loai");
      isValidate = false;
    }
  
    if (data.weight < 1 || data.weight > 15) {
      alert("Weight must be between 1 and 15!");
      isValidate = false;
    }
    if (data.length < 1 || data.length > 100) {
      alert("Length must be between 1 and 100!");
      isValidate = false;
    }
    if (data.breed === "") {
      alert("Please select Breed!");
      isValidate = false;
    }
  
    return isValidate;
  }
  function clearInput() {
    idInput.value = "";
    typeInput.value = "Select type";
    vaccinatedInput.checked = false;
    ageInput.value = NaN;
    breedInput.value = "Select Breed";
    colorInput.value = "#fff";
    dewormedInput.checked = false;
    lengthInput.value = "";
    nameInput.value = "";
    sterilizedInput.checked = false;
    typeInput.value = "Select Type";
  }
function renderTableData(petArr) {
    tableBodyEl.innerHTML = "";
      for (let i = 0; i < petArr.length; i++) {
        console.log(petArr[i].bleed)
        let date = petArr[i].date
        date = new Date(petArr[i].date);

        if (isDate(date)) {
            const row = document.createElement("tr");
            row.innerHTML = `
          <tr>
                                    <th scope="row">${petArr[i].id}</th>
                                    <td>${petArr[i].name}</td>
                                    <td>${petArr[i].age}</td>
                                    <td>${petArr[i].type}</td>
                                    <td>${petArr[i].weight} kg</td>
                                    <td>5${petArr[i].length} cm</td>
                                    <td>${petArr[i].bleed}</td>
                      <td><i class="bi bi-square-fill" style="color: ${
                        petArr[i].color
                      };"></i></td>
                                    <td><i class="bi ${
                        petArr[i].vaccinated === true
                          ? "bi-check-circle-fill"
                          : "bi-x-circle-fill"
                      } ">
                      </i></td>
                                    <td><i class="bi ${
                        petArr[i].dewormed === true
                          ? "bi-check-circle-fill"
                          : "bi-x-circle-fill"
                      } ">
                      </i></td>
                                    <td><i class="bi ${
                        petArr[i].sterilized === true
                          ? "bi-check-circle-fill"
                          : "bi-x-circle-fill"
                      } ">
                      </i></td>
                                    <td>${petArr[i].bmi}</td>
                                    <td>
                      ${date.getDate()}/${
                      date.getMonth() + 1
                      }/${date.getFullYear()}
                      </td>
                                    <td><button type="button" class="btn btn-danger" 
                      onclick="deletePet('${petArr[i].id}')" >Delete</button>
                                    </td>
                                </tr>
        `;
            tableBodyEl.appendChild(row);
        }else{console.log("Không render")}

    }
    
  }
  renderTableData(petArr);
  submitBtn.addEventListener("click", function (e) {
    const data = {
      id: idInput.value,
      age: parseInt(ageInput.value),
      color: colorInput.value,
      bleed: breedInput.value,
      vaccinated: vaccinatedInput.checked,
      date: new Date(),
      name: nameInput.value,
      type: typeInput.value,
      weight: parseInt(weightInput.value),
      length: parseInt(lengthInput.value),
      dewormed: dewormedInput.checked,
      sterilized: sterilizedInput.checked,
      bmi: "?",
    };
    console.log(data);
    // valid du lieu
    const validate = validateData(data);
    if (validate) {
      //Thêm thú cưng vào danh sách
      
      let dataRender = getFromStorage('petArr')
      dataRender.push(data)
      console.log(dataRender)
     
       renderTableData(dataRender);
      clearInput();
    }
  });
  var breedData = getFromStorage('breedArr') ;

  document.addEventListener("DOMContentLoaded", function() {
  console.log(typeof(breedData))
    if (Array.isArray(breedData) && breedData) {
        const dropdown = document.getElementById('input-breed');

       
       breedData.forEach(function(breed) {
            const option = document.createElement('option');
            option.value = breed.breed;
            option.textContent = breed.breed;
            breedInput.appendChild(option);
        });
    }else{
      console.log('err')
    }
});
function getFromStorage(key){
  return JSON.parse(localStorage.getItem(key));
}

function saveToStorage(key, value){
  localStorage.setItem(key,JSON.stringify(value));
}


  function deletePet(petId) {
    // Confirm before deletePet
    const isDeleted = confirm("Are you sure?");
    if (isDeleted) {
      for (let i = 0; i < petArr.length; i++) {
        if (petId === petArr[i].id) {
          petArr.splice(i, 1);
          renderTableData(petArr);
        }
      }
    }
  }