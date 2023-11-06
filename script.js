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
let menuCloseBtn = document.querySelector(".nav-links .logo-name");
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

function openMode(modeName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(modeName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 10000); // Change image every 2 seconds
}
