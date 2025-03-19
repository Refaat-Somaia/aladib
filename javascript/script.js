// const projectsContainer = document.querySelector('.projects-container');
// const cards = document.querySelectorAll('.projects-container .card')
const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");
let counter = 1;
const size = 600;
let products = false;
// projectsContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
function positionTop() {
  return typeof window.pageYOffset != "undefined"
    ? window.pageYOffset
    : document.documentElement && document.documentElement.scrollTop
    ? document.documentElement.scrollTop
    : document.body.scrollTop
    ? document.body.scrollTop
    : 0;
}
var isTopOfPage = true;

// window.onscroll = function () {
//   if (window.innerWidth > 1040) {
//     if (positionTop() > 100) {
//       document.getElementById("nav").style.backgroundColor = "white";
//     } else {
//       document.getElementById("nav").style.backgroundColor = "transparent";
//     }
//   } else {
//     document.getElementById("nav").style.backgroundColor = "white";
//   }
// };

var isDropped = false;
const dropDownMenu = document.getElementsByClassName("drop-down-menu")[0];
const dropDownBtnIcon = document.getElementById("dropDownBtnIcon");
const bgBlur = document.getElementById("backgroundBlur");

document.getElementById("dropDownBtn").addEventListener("click", function () {
  if (isDropped) {
    closeDropDownMenu();
  } else {
    openDropDownMenu();
  }
});

bgBlur.addEventListener("click", function () {
  closeDropDownMenu();
});

function closeDropDownMenu() {
  dropDownMenu.style.animation = "drop-down-out 0.7s forwards";
  dropDownBtnIcon.style.animation = "btn-down-in 0.7s forwards";
  dropDownBtnIcon.src = "assets/images/menu-icon.png";
  bgBlur.style.display = "none";
  isDropped = false;
}

function openDropDownMenu() {
  dropDownMenu.style.animation = "drop-down-in 0.7s forwards";
  dropDownBtnIcon.src = "assets/images/arrowUp-icon.png";
  dropDownBtnIcon.style.animation = "btn-down-out 0.7s forwards";
  bgBlur.style.display = "block";

  isDropped = true;
}
// nextBtn.addEventListener('click', ()=>{
//     if(counter >= cards.length - 1) return;
//     projectsContainer.style.transition = "transform 0.4s ease-in-out";
//     counter++;
//     projectsContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
// });

// prevBtn.addEventListener('click', ()=>{
//     if(counter <= 0) return;
//     projectsContainer.style.transition = "transform 0.4s ease-in-out";
//     counter--;
//     projectsContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';

// });

// projectsContainer.addEventListener('transitionend', ()=>{
//     if(cards[counter].id === 'lastClone') {
//         projectsContainer.style.transition = "none";
//         counter = cards.length - 2;
//         projectsContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
//     } else if(cards[counter].id === 'firstClone') {
//         projectsContainer.style.transition = "none";
//         counter = cards.length - counter;
//         projectsContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
//     }
// });

// if(products)
// var scrollDiv = document.getElementById("products").offsetTop-100;
// window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
