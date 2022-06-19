
// Border red if input is empty

const links = document.querySelectorAll(".link-red");

const inputs = document.querySelectorAll(".input-check");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    inputs.forEach((input) => {
      if (input.value.trim() == "") {
        input.classList.add("input-error");
      } else {
        input.classList.remove("input-error");
      }
    });
  });
});
