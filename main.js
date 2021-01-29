
// GUZIK GO UP
const topBtn = document.getElementById('goTop');


function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

function goTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
 
};

document.addEventListener('scroll', scrollFunction);
topBtn.addEventListener('click', goTop);

// GUZIK GO UP KONIEC

//STICKY NAV BAR


const navBarLi = document.querySelector("ul");


const topBorder = navBarLi.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= topBorder) {
    navBarLi.classList.add("sticky")
    
  } else {
    navBarLi.classList.remove("sticky");
    
  }
};

window.addEventListener('scroll', stickyNav);

//STICKY NAV BAR KONIEC

// GUZIKI MENU FUNKCJE//

const oMnie = document.getElementsByClassName("navBarListElement")[0];
const skills = document.getElementsByClassName("navBarListElement")[1];
const prace = document.getElementsByClassName("navBarListElement")[2];
const kontakt = document.getElementsByClassName("navBarListElement")[3];

function oMnieMenu () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

function skillsMenu () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 600;
};

function praceMenu () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 1300;
};

function kontaktMenu () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 1475;
};

oMnie.addEventListener('click', oMnieMenu);
skills.addEventListener('click', skillsMenu);
prace.addEventListener('click', praceMenu);
kontakt.addEventListener('click', kontaktMenu);



// GUZIKI MENU FUNKCJE KONIEC//




