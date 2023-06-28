// MAKE MOBILE NAVIGATION WORK

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const nav = document.querySelector(".main-nav");
const list = document.querySelector(".main-nav-list");
const piantina = document.createElement("p");
const button = document.createElement("a");

//
// Close mobile navigation

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // Close mobile navigation
    if (link.classList.contains("nav__links-main"))
      headerEl.classList.toggle("nav-open");
  });
});

btnNavEl.addEventListener("click", function () {
  piantina.innerText = "Piantina";
  piantina.classList.add("piantina__nav");

  button.classList.add("wolt__link");
  button.classList.add("button");
  button.innerText = "Order on Wolt";
  button.href = "https://wolt.com/en/hrv/pula/restaurant/piantina";
  headerEl.classList.toggle("nav-open");
  list.insertAdjacentElement("afterbegin", piantina);
  list.insertAdjacentElement("beforeend", button);
  if (!headerEl.classList.contains("nav-open")) {
    piantina.remove();
    button.remove();
  }
});

// MENU FADE

// Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains("nav__links-main")) {
    const link = e.target;
    const siblings = link
      .closest(".main-nav")
      .querySelectorAll(".nav__links-main");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
  }
};

// Passing "argument" into handler
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

// Reveal sections
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
