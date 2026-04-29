document.addEventListener("DOMContentLoaded", () => {

let index = 0;
const slides = document.querySelectorAll(".mySlides");

function showSlide(i) {
  slides.forEach(s => s.style.display = "none");
  slides[i].style.display = "block";
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

document.querySelector(".next").onclick = nextSlide;
document.querySelector(".prev").onclick = prevSlide;

showSlide(index);
setInterval(nextSlide, 3000);

/* CAROUSEL */
const carousel = document.getElementById("carousel");

document.querySelector(".right").onclick = () => {
  carousel.scrollBy({ left: 300, behavior: "smooth" });
};

document.querySelector(".left").onclick = () => {
  carousel.scrollBy({ left: -300, behavior: "smooth" });
};

});