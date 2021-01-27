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