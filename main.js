
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

// O Mnie document.documentElement.scrollTop = 0 //
// Skills document.documentElement.scrollTop = 400 // 





