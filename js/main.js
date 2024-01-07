// Nav menu
const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu")
    })
  }
  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu")
    })
  }

const navLinks = document.querySelectorAll(".nav-link")
const linkAction = () => {
  const navMenu = document.getElementById("nav-menu")
  navMenu.classList.remove("show-menu")
}
navLinks.forEach(i => i.addEventListener("click", linkAction))

const scrollHeader = () => {
  const header = document.getElementById("header")
  if (window.scrollY >= 80) {
    header.classList.add("scroll-header")
  } else {
    header.classList.remove("scroll-header")
  }
}

window.addEventListener("scroll", scrollHeader)

var swiper = new Swiper(".testimonial-wrapper", {
  loop: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const theme = document.querySelector("#theme-button")
const themeModal = document.querySelector(".customize-theme")

const openThemeModal = () => {
  themeModal.style.display = 'grid'
}

const closeThemeModal = e => {
  if (e.target.classList.contains('customize-theme')) {
    themeModal.style.display = 'none'
  }
}

theme.addEventListener("click", openThemeModal)
themeModal.addEventListener("click", closeThemeModal)