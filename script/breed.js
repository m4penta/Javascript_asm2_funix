'use strict';
const submitBtn = document.getElementById("submit-btn");
const inputBleed = document.getElementById('input-breed');
const  inputType = document.getElementById('input-type');
const tableBodyEl = document.getElementById("tbody");
const deleteBtn = document.getElementById("delete");
function getFromStorage(key){
    return JSON.parse(localStorage.getItem(key));
}

function saveToStorage(key, value){
    localStorage.setItem(key,JSON.stringify(value));
}


const Breed = getFromStorage('breedArr')
renderTableData(Breed)
console.log(Breed)

  submitBtn.addEventListener("click", function (e) {
    const data = {
      breed: inputBleed.value,
      type: inputType.value,
    };
    console.log(data);
    //valid du lieu
    const validate = validateData(data);
    if (validate) {
      //Thêm thú cưng vào danh sách
      
      let dataRender = getFromStorage('breedArr')
      dataRender.push(data)
      console.log(dataRender)
     saveToStorage("breedArr", dataRender);
       renderTableData(dataRender);
        clearInput();
       
     
    }
  });

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
    if(bleedArr !== undefined){
      for (let i = 0; i < bleedArr.length; i++) {

        if(bleedArr !== null){
          const row = document.createElement("tr");
            row.innerHTML = `
          <tr>                      
                                    <th scope="row">${[i]}</th>
                                    <td>${bleedArr[i].breed}</td>
                                    <td>${bleedArr[i].type}</td>
                                    <td><button type="button" class="btn btn-danger" 
                                    onclick="deletePet('${bleedArr[i].id}')" >Delete</button>
                                    </td>
                                </tr>
        `;
            tableBodyEl.appendChild(row);
        }else{
          console.log('lỗi')
        }
    
           
      }
    }
      
  }