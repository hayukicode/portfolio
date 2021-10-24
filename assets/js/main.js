const header = document.querySelector("header");
const navHeight = header.offsetHeight;

window.addEventListener("scroll", function () {
  if (window.scrollY >= navHeight) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});

// Menu hambuguer
const menuBtn = document.querySelector("#menu");
const navLinks = document.querySelector(".menu_left");
menuBtn.addEventListener("click", menuToggle);

function menuToggle() {
  menuBtn.classList.toggle("active");
  menuBtn.classList.toggle("bx-x");
  navLinks.classList.toggle("active");
  header.classList.toggle("active");
}

const sr = ScrollReveal({
  origin: "top",
  distance: "20px",
  duration: 2000,
  reset: true,
});

//Home delay
sr.reveal(".button", { delay: 200, origin: "bottom" });
sr.reveal(".imagem-delay", { delay: 200 });
sr.reveal(".card-delay", { delay: 700, origin: "bottom" });
sr.reveal(".scroll-delay", { delay: 1000 });
sr.reveal(".titulo-delay", { delay: 500 });
sr.reveal(".svg-interval", { delay: 1500 });
