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

// font Sisze adjust

const fontSizes = document.querySelectorAll('.choose-size span')
const colorPalette = document.querySelectorAll('.choose-color span')

var root = document.querySelector(":root")

const removeSizeSelector = () => {
  fontSizes.forEach(size => {
    size.classList.remove('active')
  })
}

const removeColorSelector = () => {
  colorPalette.forEach(size => {
    size.classList.remove('active')
  })
}

fontSizes.forEach(size => {
  size.addEventListener("click", () => {
    removeSizeSelector()
    let fontSize;
    size.classList.toggle('active')
    if (size.classList.contains('font-size-1')) {
      fontSize = '12px'
    } else if (size.classList.contains('font-size-2')) {
      fontSize = '14px'
    } else if (size.classList.contains('font-size-3')) {
      fontSize = '16px'
    } else if (size.classList.contains('font-size-4')) {
      fontSize = '18px'
    }
    document.querySelector('html').style.fontSize = fontSize
  })
})

colorPalette.forEach(color => {
  color.addEventListener('click', () => {
    removeColorSelector()
    let primaryHue;
    if (color.classList.contains('color-1')) {
      primaryHue = 52
    } else if (color.classList.contains('color-2')) {
      primaryHue = 152
    } else if (color.classList.contains('color-3')) {
      primaryHue = 202
    } else if (color.classList.contains('color-4')) {
      primaryHue = 252
    } else if (color.classList.contains('color-5')) {
      primaryHue = 352
    }
    color.classList.add('active')
    root.style.setProperty('--primary-color-hue', primaryHue)
  })
})

const BgBtns = document.querySelectorAll('.choose-bg div')
const removeBgActive = () => {
  BgBtns.forEach(i => i.classList.remove('active'))
}
const changeBG = () => {
  root.style.setProperty('--light-color-lightness', lightColorLightness)
  root.style.setProperty('--white-color-lightness', whitecolorLightness)
  root.style.setProperty('--dark-color-lightness', darkcolorLightness)
}

const Bg1 = document.querySelector('div.bg-1')
const Bg2 = document.querySelector('div.bg-2')
const Bg3 = document.querySelector('div.bg-3')

let lightColorLightness;
let whitecolorLightness;
let darkcolorLightness;

Bg2.addEventListener('click',() => {
  darkcolorLightness = '95%'
  whitecolorLightness = '20%'
  lightColorLightness = '15%'
  removeBgActive()
  Bg2.classList.add('active')
  changeBG()
})
Bg1.addEventListener('click',() => {
  darkcolorLightness = '17%'
  whitecolorLightness = '100%'
  lightColorLightness = '92%'
  removeBgActive()
  Bg1.classList.add('active')
  changeBG()
})
Bg3.addEventListener('click',() => {
  darkcolorLightness = '95%'
  whitecolorLightness = '10%'
  lightColorLightness = '0%'
  removeBgActive()
  Bg2.classList.add('active')
  changeBG()
})
