// Displaying file name on input

let fileInput = document.querySelector("#file");
let label = document.querySelector("#label");

fileInput.addEventListener("change", (e) => {
  fileInput = e.target;
  let fileName = fileInput.files[0].name;
  label.textContent = fileName;
});
