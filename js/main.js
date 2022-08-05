// Start Header
let header = document.querySelector("header");
function stickyheader() {
  header.classList.toggle("scrolled", window.pageYOffset > 0);
}
window.addEventListener("scroll", stickyheader);
let links = document.querySelectorAll("header ul li a");
window.addEventListener("scroll", function () {
  let pageHei = this.window.pageYOffset;
  if (pageHei <= this.document.querySelector(".landing").offsetTop) {
    links.forEach(function (ele) {
      ele.classList.remove("active");
    });
    this.document
      .querySelector("header ul li a.id-home")
      .classList.add("active");
  } else if (pageHei <= this.document.querySelector(".about ").offsetTop) {
    links.forEach(function (ele) {
      ele.classList.remove("active");
    });
    this.document
      .querySelector("header ul li a.id-about")
      .classList.add("active");
  } else if (pageHei <= this.document.querySelector(".services ").offsetTop) {
    links.forEach(function (ele) {
      ele.classList.remove("active");
    });
    this.document
      .querySelector("header ul li a.id-services")
      .classList.add("active");
  } else if (pageHei <= this.document.querySelector(".portfolio ").offsetTop) {
    links.forEach(function (ele) {
      ele.classList.remove("active");
    });
    this.document
      .querySelector("header ul li a.id-portfolio")
      .classList.add("active");
  } else if (pageHei <= this.document.querySelector(".contant ").offsetTop) {
    links.forEach(function (ele) {
      ele.classList.remove("active");
    });
    this.document
      .querySelector("header ul li a.id-contact")
      .classList.add("active");
  }
  // console.log(pageHei);
});
const humburger = document.querySelector(".humburger");
humburger.addEventListener("click", () => {
  document.body.classList.toggle("open");
  document.body.classList.toggle("stopScroll");
});
links.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("open");
    document.body.classList.remove("stopScroll");
  });
});
// End Header
// Start Reveal
let sr = ScrollReveal({
  duration: 2500,
  distance: "60px",
});
sr.reveal(".landing .info", { delay: 400 });
sr.reveal(".landing .image", { origin: "top", delay: 400 });
sr.reveal(".about .about-grid", { origin: "left", delay: 400 });
sr.reveal(".about .info", { origin: "right", delay: 400 });
sr.reveal(".skills .skills-box", { origin: "bottom", delay: 400 });
sr.reveal(".services-info", { origin: "left", delay: 400 });
sr.reveal(".services-grid", { origin: "right", delay: 400 });
sr.reveal(".testimonials", { origin: "right", delay: 400 });
sr.reveal(".contant-info", { origin: "left", delay: 400 });
sr.reveal(".contant-form", { origin: "right", delay: 400 });
sr.reveal(".sub-box", { origin: "bottom", delay: 400 });
// End Reveal
// Start Portfolio
let mixer = mixitup(".portfolio-gallery", {
  selectors: {
    target: ".prt-card",
  },
  animation: {
    duration: 500,
  },
});

// slider
const prt_section = document.querySelector(".portfolio");
const zoom_icons = document.querySelectorAll(".zoom-icon");
const model_overplay = document.querySelector(".model-overplay");
const images = document.querySelectorAll(".images img");
const prev_btn = document.querySelector(".prev-btn");
const next_btn = document.querySelector(".next-btn");
let currentIndex = 0;
zoom_icons.forEach((icn, i) =>
  icn.addEventListener("click", () => {
    prt_section.classList.add("open");
    document.body.classList.add("stopScroll");
    currentIndex = i;
    changeImage(currentIndex);
  })
);
model_overplay.addEventListener("click", () => {
  prt_section.classList.remove("open");
  document.body.classList.remove("stopScroll");
});
prev_btn.addEventListener("click", () => {
  if (currentIndex === 0) {
    currentIndex = 5;
  } else {
    currentIndex--;
  }
  changeImage(currentIndex);
});
next_btn.addEventListener("click", () => {
  if (currentIndex === 5) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  changeImage(currentIndex);
});
function changeImage(index) {
  images.forEach((img) => img.classList.remove("showImage"));
  images[index].classList.add("showImage");
}
// End Portfolio
// Start Testimonials
const swiper = new Swiper(".swiper", {
  loop: true,
  speed: 500,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// End Testimonials
// Start Change Mood
const toggle_btn = document.querySelector(".toggle-btn");

let fristMood = localStorage.getItem("dark");
ChangeMood(+fristMood);
function ChangeMood(isDark) {
  if (isDark == 1) {
    document.body.classList.add("dark");
    toggle_btn.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("dark", 1);
  } else {
    document.body.classList.remove("dark");
    toggle_btn.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("dark", 0);
  }
}
toggle_btn.addEventListener("click", function () {
  ChangeMood(!document.body.classList.contains("dark"));
});
// End Change Mood
