let menubar = document.getElementById("menubar");
let menuIcon = document.querySelector(".menu-logo");
let closeButton = document.querySelector(".close-button");
let navItems = document.querySelectorAll(".nav-item");

if (menuIcon) {
    menuIcon.addEventListener("click", function () {
        menubar.classList.add("show-menu");
    })
}
if (closeButton) {
    closeButton.addEventListener("click", function () {
        menubar.classList.remove("show-menu");
    })
}

navItems.forEach(navItem => navItem.addEventListener("click" , () => {
    menubar.classList.remove("show-menu");
}))

// Shadow Header 
 const shadowHader = () => {
    let header = document.getElementById('header');
    this.scrollY > 40 ? header.classList.add("shadow-header"):
                   header.classList.remove("shadow-header");
 }

 window.addEventListener('scroll' , shadowHader);

// Swipper JS
const swiperFavorites = new Swiper('.favorite-swiper', {
    loop: true,
    grabCursor:true ,
    slidesPerView: 3 ,
    centeredSlides: "auto" , 

  });
  console.log("this is instaance " , swiperFavorites )