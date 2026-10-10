document.documentElement.classList.add("js");

const SLIDE_INTERVAL_MS = 3000;
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const nav = document.getElementById("nav");

const updateNavigation = () => {
  nav?.classList.toggle("scrolled", window.scrollY > 40);
};

window.addEventListener("scroll", updateNavigation, { passive: true });
updateNavigation();

const setActiveItem = (items, activeIndex, activeClass = "active") => {
  items.forEach((item, index) => {
    const isActive = index === activeIndex;
    item.classList.toggle(activeClass, isActive);

    if (item instanceof HTMLImageElement) {
      item.setAttribute("aria-hidden", String(!isActive));
    }
  });
};

const loadCarouselImage = (item) => {
  if (!(item instanceof HTMLImageElement) || !item.dataset.src) return;
  item.src = item.dataset.src;
  delete item.dataset.src;
};

const startCarousel = (items, initialIndex = 0, activeClass = "is-active", onChange = () => {}) => {
  if (items.length === 0) return;

  const markedIndex = items.findIndex((item) => item.classList.contains(activeClass));
  let activeIndex = markedIndex >= 0 ? markedIndex : initialIndex % items.length;
  loadCarouselImage(items[activeIndex]);
  setActiveItem(items, activeIndex, activeClass);

  if (items.length < 2 || prefersReducedMotion) return;
  loadCarouselImage(items[(activeIndex + 1) % items.length]);

  let intervalId;
  const advance = () => {
    activeIndex = (activeIndex + 1) % items.length;
    loadCarouselImage(items[activeIndex]);
    setActiveItem(items, activeIndex, activeClass);
    onChange(activeIndex);
    loadCarouselImage(items[(activeIndex + 1) % items.length]);
  };
  const start = () => {
    if (document.hidden || intervalId) return;
    intervalId = window.setInterval(advance, SLIDE_INTERVAL_MS);
  };
  const stop = () => {
    window.clearInterval(intervalId);
    intervalId = undefined;
  };

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stop();
    else start();
  });
  start();
};

const heroSlides = [...document.querySelectorAll(".hero-slide")];
const heroDots = [...document.querySelectorAll(".pager .dot")];
startCarousel(heroSlides, 0, "active", (activeIndex) => {
  setActiveItem(heroDots, activeIndex, "active");
});
setActiveItem(heroDots, heroSlides.findIndex((slide) => slide.classList.contains("active")), "active");

const revealElements = [...document.querySelectorAll(".reveal")];
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("visible"));
}

document.querySelectorAll(".create-card-gallery").forEach((gallery) => {
  startCarousel([...gallery.querySelectorAll("img")]);
});

document.querySelectorAll(".experience-carousel").forEach((carousel) => {
  startCarousel([...carousel.querySelectorAll("img")]);
});

document.querySelectorAll(".mobile-nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    link.closest("details")?.removeAttribute("open");
  });
});

const currentYear = document.getElementById("current-year");
if (currentYear) currentYear.textContent = new Date().getFullYear();
