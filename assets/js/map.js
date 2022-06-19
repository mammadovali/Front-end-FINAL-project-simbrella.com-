let flyingCountry = document.querySelector(
  ".world__wrapper__map-svg__flying-country"
);

let flag = document.querySelector(
  ".world__wrapper__map-svg__flying-country__img"
);

let countryName = document.querySelector(
  ".world__wrapper__map-svg__flying-country__span"
);

const map = document.querySelector(".world__wrapper__map-svg");

let imageSrc = flag.src;

//YELLOW ONES

//madagascar

let madagascar = document.querySelector("#MG");
let circleMacar = document.querySelector('circle[data-city="MG"]');
let gCircleMG = document.querySelector('g circle[data-city="MG"] ');

madagascar.addEventListener("mouseenter", function () {
  madagascar.style.fill = "#FF931E";
  circleMacar.style.fill = "white";
  gCircleMG.style.fill = "white";
  flyingCountry.classList.add("show-country");
  madagascarFlag(flag);
  countryName.innerHTML = "Madagascar";
  flyingCountry.style.top = "73%";
  flyingCountry.style.left = "60%";
});

madagascar.addEventListener("mouseleave", function () {
  madagascar.style.fill = "#E5E9F4";
  circleMacar.style.fill = "#FF931E";
  gCircleMG.style.fill = "#FF931E";
  flyingCountry.classList.remove("show-country");
});

circleMacar.addEventListener("mouseenter", function () {
  madagascar.style.fill = "#FF931E";
  circleMacar.style.fill = "white";
  gCircleMG.style.fill = "white";
  flyingCountry.classList.add("show-country");
  madagascarFlag(flag);
  countryName.innerHTML = "Madagascar";
  flyingCountry.style.top = "73%";
  flyingCountry.style.left = "60%";
});

circleMacar.addEventListener("mouseleave", function () {
  madagascar.style.fill = "#E5E9F4";
  circleMacar.style.fill = "#FF931E";
  gCircleMG.style.fill = "#FF931E";
  flyingCountry.classList.remove("show-country");
});

gCircleMG.addEventListener("mouseenter", function () {
  madagascar.style.fill = "#FF931E";
  circleMacar.style.fill = "white";
  gCircleMG.style.fill = "white";
  flyingCountry.classList.add("show-country");
  madagascarFlag(flag);
  countryName.innerHTML = "Madagascar";
  flyingCountry.style.top = "73%";
  flyingCountry.style.left = "60%";
});

function madagascarFlag(flag) {
  flag.setAttribute(
    "src",
    "https://www.simbrella.com/site/templates/img/flags/MG.png"
  );
}

//botswana

let botswana = document.querySelector("#BW");
let circleBostswana = document.querySelector('circle[data-city="BW"]');
let gcircleBW = document.querySelector('g circle[data-city="BW"] ');

botswana.addEventListener("mouseenter", function () {
  this.style.fill = "#FF931E";
  circleBostswana.style.fill = "white";
  gcircleBW.style.fill = "white";
  flyingCountry.classList.add("show-country");
  botswanaFlag(flag);
  countryName.innerHTML = "Botswana";
  flyingCountry.style.top = "74%";
  flyingCountry.style.left = "53.6%";
});

botswana.addEventListener("mouseleave", function () {
  this.style.fill = "#E5E9F4";
  circleBostswana.style.fill = "#FF931E";
  gcircleBW.style.fill = "#FF931E";
  flyingCountry.classList.remove("show-country");
});

circleBostswana.addEventListener("mouseenter", function () {
  botswana.style.fill = "#FF931E";
  circleBostswana.style.fill = "white";
  gcircleBW.style.fill = "white";
  flyingCountry.classList.add("show-country");
  botswanaFlag(flag);
  countryName.innerHTML = "Botswana";
  flyingCountry.style.top = "74%";
  flyingCountry.style.left = "53.6%";
});

circleBostswana.addEventListener("mouseleave", function () {
  botswana.style.fill = "#E5E9F4";
  circleBostswana.style.fill = "#FF931E";
  gcircleBW.style.fill = "#FF931E";
  flyingCountry.classList.remove("show-country");
});

gcircleBW.addEventListener("mouseenter", function () {
  botswana.style.fill = "#FF931E";
  circleBostswana.style.fill = "white";
  gcircleBW.style.fill = "white";
  flyingCountry.classList.add("show-country");
  botswanaFlag(flag);
  countryName.innerHTML = "Botswana";
  flyingCountry.style.top = "74%";
  flyingCountry.style.left = "53.6%";
});

function botswanaFlag(flag) {
  flag.setAttribute(
    "src",
    "https://www.simbrella.com/site/templates/img/flags/BW.png"
  );
}

//uaganda
let uganda = document.querySelector("#UG");
let circleUG = document.querySelector('circle[data-city="UG"]');
let gcircleUG = document.querySelector('g circle[data-city="UG"] ');

uganda.addEventListener("mouseenter", function () {
  this.style.fill = "#FF931E";
  circleUG.style.fill = "white";
  gcircleUG.style.fill = "white";
  flyingCountry.classList.add("show-country");
  ugandaFlag(flag);
  countryName.innerHTML = "Uganda";
  flyingCountry.style.top = "63%";
  flyingCountry.style.left = "56%";
});
uganda.addEventListener("mouseleave", function () {
  this.style.fill = "#E5E9F4";
  circleUG.style.fill = "#FF931E";
  gcircleUG.style.fill = "#FF931E";
  flyingCountry.classList.remove("show-country");
});

circleUG.addEventListener("mouseenter", function () {
  uganda.style.fill = "#FF931E";
  circleUG.style.fill = "white";
  gcircleUG.style.fill = "white";
  flyingCountry.classList.add("show-country");
  ugandaFlag(flag);
  countryName.innerHTML = "Uganda";
  flyingCountry.style.top = "63%";
  flyingCountry.style.left = "56%";
});

circleUG.addEventListener("mouseleave", function () {
  uganda.style.fill = "#E5E9F4";
  circleUG.style.fill = "#FF931E";
  gcircleUG.style.fill = "#FF931E";
  flyingCountry.classList.remove("show-country");
});

gcircleUG.addEventListener("mouseenter", function () {
  uganda.style.fill = "#FF931E";
  circleUG.style.fill = "white";
  gcircleUG.style.fill = "white";
  flyingCountry.classList.add("show-country");
  ugandaFlag(flag);
  countryName.innerHTML = "Uganda";
  flyingCountry.style.top = "63%";
  flyingCountry.style.left = "56%";
});

function ugandaFlag(flag) {
  flag.setAttribute(
    "src",
    "https://www.simbrella.com/site/templates/img/flags/UG.png"
  );
}

//ethiopiya

let ethiopiya = document.querySelector("#ET");
let circleET = document.querySelector('circle[data-city="ET"]');
let gcircleET = document.querySelector('g circle[data-city="ET"] ');

ethiopiya.addEventListener("mouseenter", function () {
  this.style.fill = "#FF931E";
  circleET.style.fill = "white";
  gcircleET.style.fill = "white";
  flyingCountry.classList.add("show-country");
  ethiopiyaFlag(flag);
  countryName.innerHTML = "Ethiopia";
  flyingCountry.style.top = "60%";
  flyingCountry.style.left = "58%";
});

ethiopiya.addEventListener("mouseleave", function () {
  this.style.fill = "#E5E9F4";
  circleET.style.fill = "#FF931E";
  gcircleET.style.fill = "#FF931E";
  flyingCountry.classList.remove("show-country");
});

circleET.addEventListener("mouseenter", function () {
  ethiopiya.style.fill = "#FF931E";
  circleET.style.fill = "white";
  gcircleET.style.fill = "white";
  flyingCountry.classList.add("show-country");
  ethiopiyaFlag(flag);
  countryName.innerHTML = "Ethiopia";
  flyingCountry.style.top = "60%";
  flyingCountry.style.left = "58%";
});
circleET.addEventListener("mouseleave", function () {
  ethiopiya.style.fill = "#E5E9F4";
  circleET.style.fill = "#FF931E";
  gcircleET.style.fill = "#FF931E";
  flyingCountry.classList.remove("show-country");
});

gcircleET.addEventListener("mouseenter", function () {
  ethiopiya.style.fill = "#FF931E";
  circleET.style.fill = "white";
  gcircleET.style.fill = "white";
  flyingCountry.classList.add("show-country");
  ethiopiyaFlag(flag);
  countryName.innerHTML = "Ethiopia";
  flyingCountry.style.top = "60%";
  flyingCountry.style.left = "58%";
});

function ethiopiyaFlag(flag) {
  flag.setAttribute(
    "src",
    "https://www.simbrella.com/site/templates/img/flags/SN.png"
  );
}

//senegal

let senegal = document.querySelector("#SN");
let circleSN = document.querySelector('circle[data-city="SN"]');
let gcircleSN = document.querySelector('g circle[data-city="SN"] ');

senegal.addEventListener("mouseenter", function () {
  this.style.fill = "#FF931E";
  circleSN.style.fill = "white";
  gcircleSN.style.fill = "white";
  flyingCountry.classList.add("show-country");
  senegalFlag(flag);
  countryName.innerHTML = "Senegal";
  flyingCountry.style.top = "58%";
  flyingCountry.style.left = "43%";
});
senegal.addEventListener("mouseleave", function () {
  this.style.fill = "#E5E9F4";
  circleSN.style.fill = "#FF931E";
  gcircleSN.style.fill = "#FF931E";
  flyingCountry.classList.remove("show-country");
});
circleSN.addEventListener("mouseenter", function () {
  senegal.style.fill = "#FF931E";
  circleSN.style.fill = "white";
  gcircleSN.style.fill = "white";
  flyingCountry.classList.add("show-country");
  senegalFlag(flag);
  countryName.innerHTML = "Senegal";
  flyingCountry.style.top = "58%";
  flyingCountry.style.left = "43%";
});
circleSN.addEventListener("mouseleave", function () {
  senegal.style.fill = "#E5E9F4";
  circleSN.style.fill = "#FF931E";
  gcircleSN.style.fill = "#FF931E";
  flyingCountry.classList.remove("show-country");
});

gcircleSN.addEventListener("mouseenter", function () {
  senegal.style.fill = "#FF931E";
  circleSN.style.fill = "white";
  gcircleSN.style.fill = "white";
  flyingCountry.classList.add("show-country");
  senegalFlag(flag);
  countryName.innerHTML = "Senegal";
  flyingCountry.style.top = "58%";
  flyingCountry.style.left = "43%";
});

function senegalFlag(flag) {
  flag.setAttribute(
    "src",
    "https://www.simbrella.com/site/templates/img/flags/SN.png"
  );
}

//panama

let panama = document.querySelector("#PA");
let circlePN = document.querySelector('circle[data-city="PA"]');
let gcirclePN = document.querySelector('g circle[data-city="PA"] ');

panama.addEventListener("mouseenter", function () {
  this.style.fill = "#FF931E";
  circlePN.style.fill = "white";
  gcirclePN.style.fill = "white";
  flyingCountry.classList.add("show-country");
  panamaFlag(flag);
  countryName.innerHTML = "Panama";
  flyingCountry.style.top = "61%";
  flyingCountry.style.left = "24%";
});

panama.addEventListener("mouseleave", function () {
  this.style.fill = "#E5E9F4";
  circlePN.style.fill = "#FF931E";
  gcirclePN.style.fill = "#FF931E";
  flyingCountry.classList.remove("show-country");
});

circlePN.addEventListener("mouseenter", function () {
  panama.style.fill = "#FF931E";
  circlePN.style.fill = "white";
  gcirclePN.style.fill = "white";
  flyingCountry.classList.add("show-country");
  flyingCountry.style.top = "61%";
  flyingCountry.style.left = "24%";
  panamaFlag(flag);
  countryName.innerHTML = "Panama";
});

function panamaFlag(flag) {
  flag.setAttribute(
    "src",
    "https://www.simbrella.com/site/templates/img/flags/PA.png"
  );
}

circlePN.addEventListener("mouseleave", function () {
  panama.style.fill = "#E5E9F4";
  circlePN.style.fill = "#FF931E";
  gcirclePN.style.fill = "#FF931E";
  flyingCountry.classList.remove("show-country");
});

gcirclePN.addEventListener("mouseenter", function () {
  panama.style.fill = "#FF931E";
  circlePN.style.fill = "white";
  gcirclePN.style.fill = "white";
  flyingCountry.classList.add("show-country");
  panamaFlag(flag);
  countryName.innerHTML = "Panama";
  flyingCountry.style.top = "61%";
  flyingCountry.style.left = "24%";
});

//Ecvator

let ecvator = document.querySelector("#EC");
let circleEC = document.querySelector('circle[data-city="EC"]');
let gcircleEC = document.querySelector('g circle[data-city="EC"] ');

ecvator.addEventListener("mouseenter", function () {
  this.style.fill = "#FF931E";
  circleEC.style.fill = "white";
  gcircleEC.style.fill = "white";
  flyingCountry.classList.add("show-country");
  flyingCountry.style.top = "65%";
  flyingCountry.style.left = "25%";
  ecuadorFlag(flag);
  countryName.innerHTML = "Ecuador";
});

ecvator.addEventListener("mouseleave", function () {
  this.style.fill = "#E5E9F4";
  circleEC.style.fill = "#FF931E";
  gcircleEC.style.fill = "#FF931E";
  flyingCountry.classList.remove("show-country");
});

circleEC.addEventListener("mouseenter", function () {
  ecvator.style.fill = "#FF931E";
  circleEC.style.fill = "white";
  gcircleEC.style.fill = "white";
  flyingCountry.classList.add("show-country");
  flyingCountry.style.top = "65%";
  flyingCountry.style.left = "25%";
  ecuadorFlag(flag);
  countryName.innerHTML = "Ecuador";
});

circleEC.addEventListener("mouseleave", function () {
  ecvator.style.fill = "#E5E9F4";
  circleEC.style.fill = "#FF931E";
  gcircleEC.style.fill = "#FF931E";
  flyingCountry.classList.remove("show-country");
});

gcircleEC.addEventListener("mouseenter", function () {
  ecuador.style.fill = "#FF931E";
  circleEC.style.fill = "white";
  gcircleEC.style.fill = "white";
  flyingCountry.classList.add("show-country");
  ecuadorFlag(flag);
  countryName.innerHTML = "Ecuador";
  flyingCountry.style.top = "65%";
  flyingCountry.style.left = "25%";
});

function ecuadorFlag(flag) {
  flag.setAttribute(
    "src",
    "https://www.simbrella.com/site/templates/img/flags/EC.png"
  );
}

//BLUE ONES

//ukranie

let ukranie = document.querySelector("#UA");
let circleUA = document.querySelector("circle[data-city='UA']");
let gCircleUA = document.querySelector("g circle[data-city='UA']");

ukranie.addEventListener("mouseenter", function () {
  ukranie.style.fill = "#2D3192"; // goy
  circleUA.style.fill = "white";
  gCircleUA.style.fill = "white";
  flyingCountry.classList.add("show-country");
  ukranieFlag(flag);
  countryName.innerHTML = "Ukranie";
  flyingCountry.style.top = "41%";
  flyingCountry.style.left = "55.7%";
});

ukranie.addEventListener("mouseleave", function () {
  ukranie.style.fill = "#E5E9F4"; //boz
  circleUA.style.fill = "#2D3192"; // narinci
  gCircleUA.style.fill = "#2D3192";
  flyingCountry.classList.remove("show-country");
});

circleUA.addEventListener("mouseenter", function () {
  ukranie.style.fill = "#2D3192";
  circleUA.style.fill = "white";
  gCircleUA.style.fill = "white";
  flyingCountry.classList.add("show-country");
  ukranieFlag(flag);
  countryName.innerHTML = "Ukranie";
  flyingCountry.style.top = "41%";
  flyingCountry.style.left = "55.7%";
});

circleUA.addEventListener("mouseleave", function () {
  ukranie.style.fill = "#E5E9F4";
  circleUA.style.fill = "#2D3192";
  gCircleUA.style.fill = "#2D3192";
  flyingCountry.classList.remove("show-country");
});

gCircleUA.addEventListener("mouseenter", function () {
  ukranie.style.fill = "#2D3192";
  circleUA.style.fill = "white";
  gCircleUA.style.fill = "white";
  flyingCountry.classList.add("show-country");
  ukranieFlag(flag);
  countryName.innerHTML = "Ukranie";
  flyingCountry.style.top = "41%";
  flyingCountry.style.left = "55.7%";
});

function ukranieFlag(flag) {
  flag.setAttribute(
    "src",
    "https://www.simbrella.com/site/templates/img/flags/UA.png"
  );
}

// Republic of Congo

let congo = document.querySelector("#CD");
let circleCD = document.querySelector('circle[data-city="CD"]');
let gcircleCD = document.querySelector('g circle[data-city="CD"] ');

congo.addEventListener("mouseenter", function () {
  this.style.fill = "#2D3192";
  circleCD.style.fill = "white";
  gcircleCD.style.fill = "white";
  flyingCountry.classList.add("show-country");
  congoFlag(flag);
  countryName.innerHTML = "Republic of Congo";
  flyingCountry.style.top = "65%";
  flyingCountry.style.left = "51%";
});
congo.addEventListener("mouseleave", function () {
  this.style.fill = "#E5E9F4";
  circleCD.style.fill = "#2D3192";
  gcircleCD.style.fill = "#2D3192";
  flyingCountry.classList.remove("show-country");
});

circleCD.addEventListener("mouseenter", function () {
  congo.style.fill = "#2D3192";
  circleCD.style.fill = "white";
  gcircleCD.style.fill = "white";
  flyingCountry.classList.add("show-country");
  congoFlag(flag);
  countryName.innerHTML = "Republic of Congo";
  flyingCountry.style.top = "65%";
  flyingCountry.style.left = "51%";
});
circleCD.addEventListener("mouseleave", function () {
  congo.style.fill = "#E5E9F4";
  circleCD.style.fill = "#2D3192";
  gcircleCD.style.fill = "#2D3192";
  flyingCountry.classList.remove("show-country");
});

gcircleCD.addEventListener("mouseenter", function () {
  congo.style.fill = "#2D3192";
  circleCD.style.fill = "white";
  gcircleCD.style.fill = "white";
  flyingCountry.classList.add("show-country");
  congoFlag(flag);
  countryName.innerHTML = "Republic of Congo";
  flyingCountry.style.top = "65%";
  flyingCountry.style.left = "51%";
});

function congoFlag(flag) {
  flag.setAttribute(
    "src",
    "https://www.simbrella.com/site/templates/img/flags/CD.png"
  );
}
//tanzaniya

let tanzaniya = document.querySelector("#TZ");
let circleTZ = document.querySelector('circle[data-city="TZ"]');
let gcircleTZ = document.querySelector('g circle[data-city="TZ"] ');

tanzaniya.addEventListener("mouseenter", function () {
  this.style.fill = "#2D3192";
  circleTZ.style.fill = "white";
  gcircleTZ.style.fill = "white";
  flyingCountry.classList.add("show-country");
  tanzaniyaFlag(flag);
  countryName.innerHTML = "Tanzania";
  flyingCountry.style.top = "67%";
  flyingCountry.style.left = "56.7%";
});
tanzaniya.addEventListener("mouseleave", function () {
  this.style.fill = "#E5E9F4";
  circleTZ.style.fill = "#2D3192";
  gcircleTZ.style.fill = "#2D3192";
  flyingCountry.classList.remove("show-country");
});
circleTZ.addEventListener("mouseenter", function () {
  tanzaniya.style.fill = "#2D3192";
  circleTZ.style.fill = "white";
  gcircleTZ.style.fill = "white";
  flyingCountry.classList.add("show-country");
  tanzaniyaFlag(flag);
  countryName.innerHTML = "Tanzania";
  flyingCountry.style.top = "67%";
  flyingCountry.style.left = "56.7%";
});
circleTZ.addEventListener("mouseleave", function () {
  tanzaniya.style.fill = "#E5E9F4";
  circleTZ.style.fill = "#2D3192";
  gcircleTZ.style.fill = "#2D3192";
  flyingCountry.classList.remove("show-country");
});

gcircleTZ.addEventListener("mouseenter", function () {
  tanzaniya.style.fill = "#2D3192";
  circleTZ.style.fill = "white";
  gcircleTZ.style.fill = "white";
  flyingCountry.classList.add("show-country");
  tanzaniyaFlag(flag);
  countryName.innerHTML = "Tanzania";
  flyingCountry.style.top = "67%";
  flyingCountry.style.left = "56.7%";
});

function tanzaniyaFlag(flag) {
  flag.setAttribute(
    "src",
    "https://www.simbrella.com/site/templates/img/flags/CD.png"
  );
}

//sri-lanka

let lanka = document.querySelector("#LK");
let circleLK = document.querySelector('circle[data-city="LK"]');
let gcricleLK = document.querySelector('g circle[data-city="LK"] ');

lanka.addEventListener("mouseenter", function () {
  this.style.fill = "#2D3192";
  circleLK.style.fill = "white";
  gcricleLK.style.fill = "white";
  flyingCountry.classList.add("show-country");
  lankaFlag(flag);
  countryName.innerHTML = "Sri Lanka";
  flyingCountry.style.top = "61%";
  flyingCountry.style.left = "69.5%";
});
lanka.addEventListener("mouseleave", function () {
  this.style.fill = "#E5E9F4";
  circleLK.style.fill = "#2D3192";
  gcricleLK.style.fill = "#2D3192";
  flyingCountry.classList.remove("show-country");
});
circleLK.addEventListener("mouseenter", function () {
  lanka.style.fill = "#2D3192";
  circleLK.style.fill = "white";
  gcricleLK.style.fill = "white";
  flyingCountry.classList.add("show-country");
  lankaFlag(flag);
  countryName.innerHTML = "Sri Lanka";
  flyingCountry.style.top = "61%";
  flyingCountry.style.left = "69.5%";
});
circleLK.addEventListener("mouseleave", function () {
  lanka.style.fill = "#E5E9F4";
  circleLK.style.fill = "#2D3192";
  gcricleLK.style.fill = "#2D3192";
  flyingCountry.classList.remove("show-country");
});

gcricleLK.addEventListener("mouseenter", function () {
  lanka.style.fill = "#2D3192";
  circleLK.style.fill = "white";
  gcricleLK.style.fill = "white";
  flyingCountry.classList.add("show-country");
  lankaFlag(flag);
  countryName.innerHTML = "Sri Lanka";
  flyingCountry.style.top = "61%";
  flyingCountry.style.left = "69.5%";
});

function lankaFlag(flag) {
  flag.setAttribute(
    "src",
    "https://www.simbrella.com/site/templates/img/flags/LK.png"
  );
}

//bangladesh

let bangladesh = document.querySelector("#BD");
let circleBD = document.querySelector('circle[data-city="BD"]');
let gcircleBD = document.querySelector('g circle[data-city="BD"] ');

bangladesh.addEventListener("mouseenter", function () {
  this.style.fill = "#2D3192";
  circleBD.style.fill = "white";
  gcircleBD.style.fill = "white";
  flyingCountry.classList.add("show-country");
  bangladeshFlag(flag);
  countryName.innerHTML = "Bangladesh";
  flyingCountry.style.top = "54%";
  flyingCountry.style.left = "71.9%";
});
bangladesh.addEventListener("mouseleave", function () {
  this.style.fill = "#E5E9F4";
  circleBD.style.fill = "#2D3192";
  gcircleBD.style.fill = "#2D3192";
  flyingCountry.classList.remove("show-country");
});
circleBD.addEventListener("mouseenter", function () {
  bangladesh.style.fill = "#2D3192";
  circleBD.style.fill = "white";
  gcircleBD.style.fill = "white";
  flyingCountry.classList.add("show-country");
  bangladeshFlag(flag);
  countryName.innerHTML = "Bangladesh";
  flyingCountry.style.top = "54%";
  flyingCountry.style.left = "71.9%";
});
circleBD.addEventListener("mouseleave", function () {
  bangladesh.style.fill = "#E5E9F4";
  circleBD.style.fill = "#2D3192";
  gcircleBD.style.fill = "#2D3192";
  flyingCountry.classList.remove("show-country");
});

gcircleBD.addEventListener("mouseenter", function () {
  bangladesh.style.fill = "#2D3192";
  circleBD.style.fill = "white";
  gcircleBD.style.fill = "white";
  flyingCountry.classList.add("show-country");
  bangladeshFlag(flag);
  countryName.innerHTML = "Bangladesh";
  flyingCountry.style.top = "54%";
  flyingCountry.style.left = "71.9%";
});

function bangladeshFlag(flag) {
  flag.setAttribute(
    "src",
    "https://www.simbrella.com/site/templates/img/flags/LK.png"
  );
}

// BOTH YELLOW AND BLUE ONES

// Azerbaijan

let aze = document.querySelector("#AZ");
let circleAZ = document.querySelector('circle[data-city="AZ"]');
let halfcircleAZ = document.querySelector('path.half[data-city="AZ"]');
let halfsAZ = document.querySelectorAll('path.half[data-city="AZ"]');
let gcircleAZ = document.querySelector('g circle[data-city="AZ"] ');

aze.addEventListener("mouseenter", function (event) {
  this.style.fill = "#2D3192";
  circleAZ.style.fill = "white";
  gcircleAZ.style.fill = "white";
  halfcircleAZ.style.fill = "#fff";
  halfsAZ[1].style.fill = "white";
  flyingCountry.classList.add("show-country");
  azerbaijanFlag(flag);
  countryName.innerHTML = "Azerbaijan";
  flyingCountry.style.top = "46%";
  flyingCountry.style.left = "60.8%";
});
aze.addEventListener("mouseleave", function () {
  this.style.fill = "#E5E9F4";
  circleAZ.style.fill = "#2D3192";
  gcircleAZ.style.fill = "#2D3192";
  halfcircleAZ.style.fill = "#FF931E";
  halfsAZ[1].style.fill = "#FF931E";
  flyingCountry.classList.remove("show-country");
});

circleAZ.addEventListener("mouseenter", function (event) {
  aze.style.fill = "#2D3192";
  circleAZ.style.fill = "white";
  gcircleAZ.style.fill = "white";
  halfcircleAZ.style.fill = "#fff";
  halfsAZ[1].style.fill = "white";
  flyingCountry.classList.add("show-country");
  azerbaijanFlag(flag);
  countryName.innerHTML = "Azerbaijan";
  flyingCountry.style.top = "46%";
  flyingCountry.style.left = "60.8%";
});
circleAZ.addEventListener("mouseleave", function () {
  aze.style.fill = "#E5E9F4";
  circleAZ.style.fill = "#2D3192";
  gcircleAZ.style.fill = "#2D3192";
  halfcircleAZ.style.fill = "#FF931E";
  halfsAZ[1].style.fill = "#FF931E";
  flyingCountry.classList.remove("show-country");
});

gcircleAZ.addEventListener("mouseenter", function () {
  aze.style.fill = "#2D3192";
  circleAZ.style.fill = "white";
  gcircleAZ.style.fill = "white";
  halfcircleAZ.style.fill = "#fff";
  halfsAZ[1].style.fill = "white";
  flyingCountry.classList.add("show-country");
  azerbaijanFlag(flag);
  countryName.innerHTML = "Azerbaijan";
  flyingCountry.style.top = "46%";
  flyingCountry.style.left = "60.8%";
});

function azerbaijanFlag(flag) {
  flag.setAttribute(
    "src",
    "https://www.simbrella.com/site/templates/img/flags/AZ.png"
  );
}

//zambia

let zambia = document.querySelector("#ZM");
let circleZM = document.querySelector('circle[data-city="ZM"]');
let halfcircleZM = document.querySelector('path.half[data-city="ZM"]');
let halfsZM = document.querySelectorAll('path.half[data-city="ZM"]');
let gcircleZM = document.querySelector('g circle[data-city="ZM"] ');

zambia.addEventListener("mouseenter", function (event) {
  this.style.fill = "#2D3192";
  circleZM.style.fill = "white";
  gcircleZM.style.fill = "white";
  halfcircleZM.style.fill = "#fff";
  halfsZM[1].style.fill = "white";
  flyingCountry.classList.add("show-country");
  zambiaFlag(flag);
  countryName.innerHTML = "Zambia";
  flyingCountry.style.top = "70%";
  flyingCountry.style.left = "54.5%";
});
zambia.addEventListener("mouseleave", function () {
  this.style.fill = "#E5E9F4";
  circleZM.style.fill = "#2D3192";
  gcircleZM.style.fill = "#2D3192";
  halfcircleZM.style.fill = "#FF931E";
  halfsZM[1].style.fill = "#FF931E";
  flyingCountry.classList.remove("show-country");
});

circleZM.addEventListener("mouseenter", function (event) {
  zambia.style.fill = "#2D3192";
  circleZM.style.fill = "white";
  gcircleZM.style.fill = "white";
  halfcircleZM.style.fill = "#fff";
  halfsZM[1].style.fill = "white";
  flyingCountry.classList.add("show-country");
  zambiaFlag(flag);
  countryName.innerHTML = "Zambia";
  flyingCountry.style.top = "70%";
  flyingCountry.style.left = "54.5%";
});
circleZM.addEventListener("mouseleave", function () {
  zambia.style.fill = "#E5E9F4";
  circleZM.style.fill = "#2D3192";
  gcircleZM.style.fill = "#2D3192";
  halfcircleZM.style.fill = "#FF931E";
  halfsZM[1].style.fill = "#FF931E";
  flyingCountry.classList.remove("show-country");
});

gcircleZM.addEventListener("mouseenter", function () {
  zambia.style.fill = "#2D3192";
  circleZM.style.fill = "white";
  gcircleZM.style.fill = "white";
  halfcircleZM.style.fill = "#fff";
  halfsZM[1].style.fill = "white";
  flyingCountry.classList.add("show-country");
  zambiaFlag(flag);
  countryName.innerHTML = "Zambia";
  flyingCountry.style.top = "70%";
  flyingCountry.style.left = "54.5%";
});

function zambiaFlag(flag) {
  flag.setAttribute(
    "src",
    "https://www.simbrella.com/site/templates/img/flags/ZM.png"
  );
}

//nigeria

let nigeria = document.querySelector("#NG");
let circleNG = document.querySelector('circle[data-city="NG"]');
let halfcircleNG = document.querySelector('path.half[data-city="NG"]');
let haflsNG = document.querySelectorAll('path.half[data-city="NG"]');
let gcircleNG = document.querySelector('g circle[data-city="NG"] ');

nigeria.addEventListener("mouseenter", function (event) {
  this.style.fill = "#2D3192";
  circleNG.style.fill = "white";
  gcircleNG.style.fill = "white";
  halfcircleNG.style.fill = "#fff";
  haflsNG[1].style.fill = "white";
  flyingCountry.classList.add("show-country");
  nigeriaFlag(flag);
  countryName.innerHTML = "Nigeria";
  flyingCountry.style.top = "61%";
  flyingCountry.style.left = "49.1%";
});

nigeria.addEventListener("mouseleave", function () {
  this.style.fill = "#E5E9F4";
  circleNG.style.fill = "#2D3192";
  gcircleNG.style.fill = "#2D3192";
  halfcircleNG.style.fill = "#FF931E";
  haflsNG[1].style.fill = "#FF931E";
  flyingCountry.classList.remove("show-country");
});

circleNG.addEventListener("mouseenter", function (event) {
  nigeria.style.fill = "#2D3192";
  circleNG.style.fill = "white";
  gcircleNG.style.fill = "white";
  halfcircleNG.style.fill = "#fff";
  haflsNG[1].style.fill = "white";
  flyingCountry.classList.add("show-country");
  nigeriaFlag(flag);
  countryName.innerHTML = "Nigeria";
  flyingCountry.style.top = "61%";
  flyingCountry.style.left = "49.1%";
});

circleNG.addEventListener("mouseleave", function () {
  nigeria.style.fill = "#E5E9F4";
  circleNG.style.fill = "#2D3192";
  gcircleNG.style.fill = "#2D3192";
  halfcircleNG.style.fill = "#FF931E";
  haflsNG[1].style.fill = "#FF931E";
  flyingCountry.classList.remove("show-country");
});

gcircleNG.addEventListener("mouseenter", function () {
  nigeria.style.fill = "#2D3192";
  circleGH.style.fill = "white";
  gcircleNG.style.fill = "white";
  halfcircleNG.style.fill = "#fff";
  haflsNG[1].style.fill = "white";
  flyingCountry.classList.add("show-country");
  nigeriaFlag(flag);
  countryName.innerHTML = "Nigeria";
  flyingCountry.style.top = "61%";
  flyingCountry.style.left = "49.1%";
});

function nigeriaFlag(flag) {
  flag.setAttribute(
    "src",
    "https://www.simbrella.com/site/templates/img/flags/NG.png"
  );
}

//Ghana

let ghana = document.querySelector("#GH");
let circleGH = document.querySelector('circle[data-city="GH"]');
let halfcircleGH = document.querySelector('path.half[data-city="GH"]');
let halfsGH = document.querySelectorAll('path.half[data-city="GH"]');
let gcircleGH = document.querySelector('g circle[data-city="GH"] ');

ghana.addEventListener("mouseenter", function (event) {
  this.style.fill = "#2D3192";
  circleGH.style.fill = "white";
  gcircleGH.style.fill = "white";
  halfcircleGH.style.fill = "#fff";
  halfsGH[1].style.fill = "white";
  flyingCountry.classList.add("show-country");
  ghanaFlag(flag);
  countryName.innerHTML = "Ghana";
  flyingCountry.style.top = "59.9%";
  flyingCountry.style.left = "46.8%";
});

ghana.addEventListener("mouseleave", function () {
  this.style.fill = "#E5E9F4";
  circleGH.style.fill = "#2D3192";
  gcircleGH.style.fill = "#2D3192";
  halfcircleGH.style.fill = "#FF931E";
  halfsGH[1].style.fill = "#FF931E";
  flyingCountry.classList.remove("show-country");
});

circleGH.addEventListener("mouseenter", function (event) {
  ghana.style.fill = "#2D3192";
  circleGH.style.fill = "white";
  gcircleGH.style.fill = "white";
  halfcircleGH.style.fill = "#fff";
  halfsGH[1].style.fill = "white";
  flyingCountry.classList.add("show-country");
  ghanaFlag(flag);
  countryName.innerHTML = "Ghana";
  flyingCountry.style.top = "59.9%";
  flyingCountry.style.left = "46.8%";
});

circleGH.addEventListener("mouseleave", function () {
  ghana.style.fill = "#E5E9F4";
  circleGH.style.fill = "#2D3192";
  gcircleGH.style.fill = "#2D3192";
  halfcircleGH.style.fill = "#FF931E";
  halfsGH[1].style.fill = "#FF931E";
  flyingCountry.classList.remove("show-country");
});

gcircleGH.addEventListener("mouseenter", function () {
  ghana.style.fill = "#2D3192";
  circleGH.style.fill = "white";
  gcircleGH.style.fill = "white";
  halfcircleGH.style.fill = "#fff";
  halfsGH[1].style.fill = "white";
  flyingCountry.classList.add("show-country");
  ghanaFlag(flag);
  countryName.innerHTML = "Ghana";
  flyingCountry.style.top = "59.9%";
  flyingCountry.style.left = "46.8%";
});

function ghanaFlag(flag) {
  flag.setAttribute(
    "src",
    "https://www.simbrella.com/site/templates/img/flags/GH.png"
  );
}

//cote d'ivoire

let cote = document.querySelector("#CI");
let circleCI = document.querySelector('circle[data-city="CI"]');
let halfcircleCI = document.querySelector('path.half[data-city="CI"]');
let halfsCI = document.querySelectorAll('path.half[data-city="CI"]');
let gcircleCI = document.querySelector('g circle[data-city="CI"] ');

cote.addEventListener("mouseenter", function (event) {
  this.style.fill = "#2D3192";
  circleCI.style.fill = "white";
  gcircleCI.style.fill = "white";
  halfcircleCI.style.fill = "#fff";
  halfsCI[1].style.fill = "white";
  flyingCountry.classList.add("show-country");
  coteFlag(flag);
  countryName.innerHTML = "Cote D'Ivoire";
  flyingCountry.style.top = "60.9%";
  flyingCountry.style.left = "45.5%";
});
cote.addEventListener("mouseleave", function () {
  this.style.fill = "#E5E9F4";
  circleCI.style.fill = "#2D3192";
  gcircleCI.style.fill = "#2D3192";
  halfcircleCI.style.fill = "#FF931E";
  halfsCI[1].style.fill = "#FF931E";
  flyingCountry.classList.remove("show-country");
});

circleCI.addEventListener("mouseenter", function (event) {
  cote.style.fill = "#2D3192";
  circleCI.style.fill = "white";
  gcircleCI.style.fill = "white";
  halfcircleCI.style.fill = "#fff";
  halfsCI[1].style.fill = "white";
  flyingCountry.classList.add("show-country");
  coteFlag(flag);
  countryName.innerHTML = "Cote D'Ivoire";
  flyingCountry.style.top = "60.9%";
  flyingCountry.style.left = "45.5%";
});
circleCI.addEventListener("mouseleave", function () {
  cote.style.fill = "#E5E9F4";
  circleCI.style.fill = "#2D3192";
  gcircleCI.style.fill = "#2D3192";
  halfcircleCI.style.fill = "#FF931E";
  halfsCI[1].style.fill = "#FF931E";
  flyingCountry.classList.remove("show-country");
});

gcircleCI.addEventListener("mouseenter", function () {
  cote.style.fill = "#2D3192";
  circleCI.style.fill = "white";
  gcircleCI.style.fill = "white";
  halfcircleCI.style.fill = "#fff";
  halfsCI[1].style.fill = "white";
  flyingCountry.classList.add("show-country");
  coteFlag(flag);
  countryName.innerHTML = "Cote D'Ivoire";
  flyingCountry.style.top = "60.9%";
  flyingCountry.style.left = "45.5%";
});

function coteFlag(flag) {
  flag.setAttribute(
    "src",
    "https://www.simbrella.com/site/templates/img/flags/CI.png"
  );
}

//sierra leone

let SL = document.querySelector("#SL");
let circleSL = document.querySelector('circle[data-city="SL"]');
let halfcircleSL = document.querySelector('path.half[data-city="SL"]');
let halfsSL = document.querySelectorAll('path.half[data-city="SL"]');
let gcircleSL = document.querySelector('g circle[data-city="SL"] ');

SL.addEventListener("mouseenter", function (event) {
  this.style.fill = "#2D3192";
  circleSL.style.fill = "white";
  gcircleSL.style.fill = "white";
  halfcircleSL.style.fill = "#fff";
  halfsSL[1].style.fill = "white";
  flyingCountry.classList.add("show-country");
  sierraFlag(flag);
  countryName.innerHTML = "Sierra Leone";
  flyingCountry.style.top = "60.6%";
  flyingCountry.style.left = "43.7%";
});
SL.addEventListener("mouseleave", function () {
  this.style.fill = "#E5E9F4";
  circleSL.style.fill = "#2D3192";
  gcircleSL.style.fill = "#2D3192";
  halfcircleSL.style.fill = "#FF931E";
  halfsSL[1].style.fill = "#FF931E";
  flyingCountry.classList.remove("show-country");
});

circleSL.addEventListener("mouseenter", function (event) {
  SL.style.fill = "#2D3192";
  circleSL.style.fill = "white";
  gcircleSL.style.fill = "white";
  halfcircleSL.style.fill = "#fff";
  halfsSL[1].style.fill = "white";
  flyingCountry.classList.add("show-country");
  sierraFlag(flag);
  countryName.innerHTML = "Sierra Leone";
  flyingCountry.style.top = "60.6%";
  flyingCountry.style.left = "43.7%";
});

circleSL.addEventListener("mouseleave", function () {
  SL.style.fill = "#E5E9F4";
  circleSL.style.fill = "#2D3192";
  gcircleSL.style.fill = "#2D3192";
  halfcircleSL.style.fill = "#FF931E";
  halfsSL[1].style.fill = "#FF931E";
  flyingCountry.classList.remove("show-country");
});

gcircleSL.addEventListener("mouseenter", function () {
  SL.style.fill = "#2D3192";
  circleSL.style.fill = "white";
  gcircleSL.style.fill = "white";
  halfcircleSL.style.fill = "#fff";
  halfsSLs[1].style.fill = "white";
  flyingCountry.classList.add("show-country");
  sierraFlag(flag);
  countryName.innerHTML = "Sierra Leone";
  flyingCountry.style.top = "60.6%";
  flyingCountry.style.left = "43.7%";
});

function sierraFlag(flag) {
  flag.setAttribute(
    "src",
    "https://www.simbrella.com/site/templates/img/flags/SL.png"
  );
}
