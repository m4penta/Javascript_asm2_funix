'use strict';
const findBtn = document.getElementById("find-btn");
const PetId = document.getElementById("input-id");
const nameInput = document.getElementById("input-name");
const typeInput = document.getElementById("input-type");
const breedInput = document.getElementById("input-breed");
const vaccinatedInput = document.getElementById("input-vaccinated");
const dewormedInput = document.getElementById("input-dewormed");
const sterilizedInput = document.getElementById("input-sterilized");
const ageInput = document.getElementById("input-age");
const weightInput = document.getElementById("input-weight");
const lengthInput = document.getElementById("input-length");
const colorInput = document.getElementById("input-color-1");
//const deleteBtn = document.getElementById("delete");
//const calculateBmiBtn = document.getElementById("calculate-bmi-btn");
const tableBodyEl = document.getElementById("tbody");
function getFromStorage(key){
    return JSON.parse(localStorage.getItem(key));
  }
  
  function saveToStorage(key, value){
    localStorage.setItem(key,JSON.stringify(value));
  }
  var breedData = getFromStorage('breedArr') ;

  findBtn.addEventListener("click", function (e) {
    const data = {
      id: PetId.value,
      name: nameInput.value,
      type: typeInput.value,
      bleed: breedInput.value,
      vaccinated: vaccinatedInput.checked,
      dewormed: dewormedInput.checked,
      sterilized: sterilizedInput.checked,
    };
    console.log(data);
  });

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