let menuDisp = document.querySelector(".menu_display");
let html = document.querySelector("html");

AOS.init();

const swiper = new Swiper(".swiper", {
  centeredSlides: true,
  centerInsufficientSlides: true,
  centeredSlidesBounds: true,
  direction: "horizontal",
  autoHeight: true,
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 100,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 80,
    },
    940: {
      slidesPerView: 3,
      spaceBetween: 80,
    },
  },
});

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
