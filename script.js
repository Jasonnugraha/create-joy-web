const nav = document.getElementById("nav");

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 40);
});

const slides = [...document.querySelectorAll(".hero-slide")];
const dots = [...document.querySelectorAll(".dot")];
let currentSlide = 0;

if (slides.length > 1) {
  setInterval(() => {
    slides[currentSlide].classList.remove("active");
    dots[currentSlide]?.classList.remove("active");

    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
    dots[currentSlide]?.classList.add("active");
  }, 6500);
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

document.querySelectorAll(".create-card-gallery").forEach((gallery) => {
  const images = [...gallery.querySelectorAll("img")];

  if (images.length < 2) {
    images[0]?.classList.add("is-active");
    return;
  }

  let activeImage = 0;
  const showImage = (nextIndex) => {
    images[activeImage].classList.remove("is-active");
    activeImage = nextIndex % images.length;
    images[activeImage].classList.add("is-active");
  };

  showImage(0);
  window.setInterval(() => showImage(activeImage + 1), 6500);
});
