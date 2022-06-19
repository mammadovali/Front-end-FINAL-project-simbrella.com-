const tabHeaders = document.querySelectorAll(
  ".footer__top__right-side__header__nav__ul__li"
);

const tabContents = Array.from(
  document.querySelectorAll(".footer__top__right-side__info__description")
);

tabHeaders.forEach((tabHeader) => {
  tabHeader.addEventListener("click", function (e) {
    const tabContentId = tabHeader.getAttribute("data-tab-content-id");

    document
      .querySelector(".footer__top__right-side__header__nav__ul__li.selected")
      .classList.remove("selected");

    document
      .querySelector(".footer__top__right-side__info__description.current")
      .classList.remove("current");

    tabContents
      .find((tabContent) => tabContent.id === tabContentId)
      .classList.add("current");
    tabHeader.classList.add("selected");
  });
});
