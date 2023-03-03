// Animations on scroll
AOS.init();

// Mobile menu code
let menuDisplay = document.querySelector(".menu_display");
let menuButton = document.querySelector("#mobile_menu_burger");

menuButton.addEventListener("click", toggleMenu);
menuDisplay.addEventListener("click", toggleMenu);

function toggleMenu() {
  menuButton.classList.toggle("change");
  menuDisplay.classList.toggle("menu_display__active");
}

// Slider code
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
