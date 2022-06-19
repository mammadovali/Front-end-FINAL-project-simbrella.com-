// Border red if input is empty (investors)

let inputs = document.querySelectorAll(".vacancy-input");


let subbtn = document.getElementById("apply-button");

subbtn.addEventListener("click", (e) => {
  e.preventDefault();
  inputs.forEach((item) => {
    if (item.value.trim() == "") {
      item.classList.add("input-error");
    } else {
      item.classList.remove("input-error");
    }
  });
});

// Border red if input is empty (investors)


// Displaying file name on input 

let fileInput = document.querySelector("#file");
let label = document.querySelector("#label");

fileInput.addEventListener("change", (e) => {
  fileInput = e.target;
  let fileName = fileInput.files[0].name;
  label.textContent = fileName;
});




