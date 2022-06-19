let squares = Array.from(
  document.querySelectorAll(".our-products__wrapper__circle__item")
);
let links = Array.from(document.querySelectorAll(".a"));

links.forEach((item, index, array) => {
  item.addEventListener("mouseenter", (e) => {
    links.forEach((product, otherIndex, array) => {
      if (index != otherIndex) {
        product.classList.add("opa-half");
      }
    });
  });

  item.addEventListener("mouseleave", (e) => {
    links.forEach((product, otherIndex, array) => {
      if (index != otherIndex) {
        product.classList.remove("opa-half");
      }
    });
  });
});

////////////////////////////////////////////////

const texts = document.querySelectorAll(
  ".our-products__wrapper__circle__info-center__p"
);

squares.forEach((square, index, array) => {
  square.addEventListener("mouseenter", (e) => {
    texts.forEach((text, otherIndex, array) => {
      if (index == otherIndex) {
        text.classList.add("show-me");
      }
    });
  });

  square.addEventListener("mouseleave", (e) => {
    texts.forEach((text, otherIndex, array) => {
      if (index == otherIndex) {
        text.classList.remove("show-me");
      }
    });
  });
});

const closeIcon = document.querySelector(".team__close");

const executiveTeam = document.querySelector(".mobile-executive");

executiveTeam.addEventListener("click", () => {
  closeIcon.style.zIndex = "1100";
});

closeIcon.addEventListener("click", () => {
  closeIcon.style.zIndex = "-3";
});
