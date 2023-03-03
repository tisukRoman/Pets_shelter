let menuDisp = document.querySelector(".menu_display");
let html = document.querySelector("html");

AOS.init();

let flag = false;
function myFunction(x) {
  x.classList.toggle("change");

  if (flag == false) {
    html.style.overflowY = "hidden";
    menuDisp.style.height = 100 + "%";
    flag = true;
  } else {
    html.style.overflowY = "auto";
    menuDisp.style.height = 0 + "%";
    flag = false;
  }
}

let arrowR = document.querySelector(".right");
let arrowL = document.querySelector(".left");
let panel = document.querySelectorAll(".card"); //массив карточек

let move = 0;
panel[0].style.left = 0 + "%";
arrowL.addEventListener("click", function () {
  if (panel[0].style.left >= 0 + "%") return true;
  move += 30;
  panel.forEach(function (elem) {
    elem.style.left = move + "%";
  });
});
arrowR.addEventListener("click", function () {
  if (panel[0].style.left < -120 + "%") return true;
  move -= 30;
  panel.forEach(function (elem) {
    elem.style.left = move + "%";
  });
});
