const header = document.querySelector(".header");
const sectionOne = document.querySelector(".first-page");

let height = sectionOne.offsetHeight;

function checkMediaQuery() {
  height = sectionOne.offsetHeight;
}
window.addEventListener("resize", checkMediaQuery);

const sectionOneOptions = {
  rootMargin: `-${height - 130}px 0px 0px 0px`,
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("header-scroll");
    } else {
      header.classList.remove("header-scroll");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

//Changing color of li based on active section

const sections = document.querySelectorAll(".navSection");
const navLi = document.querySelectorAll(".navLi");

console.log(sections);
console.log(navLi);

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("li-colored");
    if (li.classList.contains(current)) {
      li.classList.add("li-colored");
    }
  });
});

// Displaying mobile nav

const hamburger = document.querySelector(
  ".header__wrapper__first-nav__hamburger"
);

const asideNav = document.querySelector(".aside-nav");

hamburger.addEventListener("click", () => {
  asideNav.classList.toggle("aside-visible");
  hamburger.classList.toggle("active");
});

const mobileNavLi = document.querySelectorAll(
  ".aside-nav__wrapper__mobile-nav__ul__li__a"
);

mobileNavLi.forEach((li) => {
  li.addEventListener("click", () => {
    asideNav.classList.remove("aside-visible");
    hamburger.classList.remove("active");
  });
});

//Executive team mobile

const mobileExecutive = document.querySelector(".mobile-executive");
const teamSection = document.querySelector("#executive_team");
const teamClose = document.querySelector(".team__close");

mobileExecutive.addEventListener("click", () => {
  teamSection.classList.add("mobile-team");
});

teamClose.addEventListener("click", () => {
  teamSection.classList.remove("mobile-team");
});

