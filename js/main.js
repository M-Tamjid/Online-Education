let menuBTN = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menuBTN.onclick = () =>{
  menuBTN.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

var swiper = new Swiper(".course-slider", {
  spaceBetween: 20,
  grabCursore: true,
  loop: true,
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,

    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".teachers-slide", {
  spaceBetween: 20,
  grabCursore: true,
  loop: true,
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,

    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 20,
  grabCursore: true,
  loop: true,
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 2,

    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
