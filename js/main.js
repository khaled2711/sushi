// SHOW MENU
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// menu show
// validate if constant exists
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
// menu Hidden
// validate if constant exists
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // when we cick on each nav__link, we remove the show-mene
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

// CHANGE BACKGROUND HEADER

const scrollHeader = () => {
  const header = document.getElementById("header");
  // when the sroll is greater the 50 viewport height, add the scroll-header class
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};

window.addEventListener("scroll", scrollHeader);

// SHOW SCROLL UP

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // when the scroll is higher the 350 viewport height, add the show-scroll to
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

// DARK LIGHT THEME
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

//
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

//
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line " : "ri-sun-line";

//
if (selectedTheme) {
  //
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line " ? "add" : "remove"](
    iconTheme
  );
}
themeButton.addEventListener("click", () => {
  //
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  //
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentTheme());
});

// scroll reveal animayion
const sr = scrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true,
});
""
sr.reveal(`.home__img`);
// sr.reveal()
// sr.reveal(`.home__data`,{origin:"bottom"})
// sr.reveal(`.about__data`,{origin:"left"})
// sr.reveal(`.about__img`,{origin:"right"})
// sr.reveal(`.popular__card`,{interval:"100"})
