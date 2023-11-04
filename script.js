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

/* CHARACTER SECTION */
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

const image2 = document.querySelectorAll(".image2 img");
const modal2 = document.querySelector(".modal2");
const expandedImg2 = document.querySelector(".expandedImg2");
const caption2 = document.querySelector(".caption2");
const closebtn2 = document.querySelector(".closebtn2");
image2.forEach((image2) => {
  image2.addEventListener("click", () => {
    expandedImg2.src = image2.src;
    caption2.innerHTML = image2.alt;
    modal2.classList.add("appear");

    closebtn2.addEventListener("click", () => {
      modal2.classList.remove("appear");
    });
  });
});

const image3 = document.querySelectorAll(".image3 img");
const modal3 = document.querySelector(".modal3");
const expandedImg3 = document.querySelector(".expandedImg3");
const caption3 = document.querySelector(".caption3");
const closebtn3 = document.querySelector(".closebtn3");
image3.forEach((image3) => {
  image3.addEventListener("click", () => {
    expandedImg3.src = image3.src;
    caption3.innerHTML = image3.alt;
    modal3.classList.add("appear");

    closebtn3.addEventListener("click", () => {
      modal3.classList.remove("appear");
    });
  });
});

/* STAGES SECTION */
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
