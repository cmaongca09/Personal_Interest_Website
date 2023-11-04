// search-box open close weapons code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", () => {
  navbar.classList.toggle("showInput");
  if (navbar.classList.contains("showInput")) {
    searchBox.classList.replace("bx-search", "bx-x");
  } else {
    searchBox.classList.replace("bx-x", "bx-search");
  }
});

// sidebar open close weapons code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
  navLinks.style.left = "0";
};
menuCloseBtn.onclick = function () {
  navLinks.style.left = "-100%";
};

// sidebar submenu open close weapons code
let charactersArrow = document.querySelector(".characters-arrow");
charactersArrow.onclick = function () {
  navLinks.classList.toggle("show1");
};
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function () {
  navLinks.classList.toggle("show2");
};
let weaponsArrow = document.querySelector(".weapons-arrow");
weaponsArrow.onclick = function () {
  navLinks.classList.toggle("show3");
};

// function myFunction(event) {
//   const images = document.querySelectorAll(".image img");
//   var modal = document.getElementById("Modal");
//   var modalImg = document.getElementsByClassName("expandedImg");
//   const modalTxt = document.querySelector("caption");
//   modal.style.display = "block";
//   document
//     .getElementById("expandedImg")
//     .setAttribute(
//       "src",
//       event.target.getAttribute("src"),
//       event.target.getAttribute("alt")
//     );
//   captionText.innerHTML = this.alt;
// }

// function closeModal(event) {
//   const modal = document.getElementById("myModal");
//   modal.style.display = "none";
// }

const image = document.querySelectorAll(".image img");
const modal = document.querySelector(".modal");
const expandedImg = document.querySelector(".expandedImg");
const caption = document.querySelector(".caption");
const closebtn = document.querySelector(".closebtn");
image.forEach((image) => {
  image.addEventListener("click", () => {
    expandedImg.src = image.src;
    caption.innerHTML = image.alt;
    modal.classList.add("appear");

    closebtn.addEventListener("click", () => {
      modal.classList.remove("appear");
    });
  });
});
