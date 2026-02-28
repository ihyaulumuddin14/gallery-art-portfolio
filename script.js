const path = window.location.pathname;
const currentPathname = path.substring(1).split(".")[0]
const navButtons = document.querySelectorAll(".nav-btn");

navButtons.forEach(navButton => {
  if (navButton.classList.contains(currentPathname)) {
    if (navButton.classList.contains("mobile-nav")) {
      navButton.classList.add("opacity-50")
      navButton.classList.add("underline")
    } else {
      navButton.classList.add("underline")
    }
  } else {
    navButton.classList.remove("opacity-50")
    navButton.classList.remove("underline")
  }
})


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-observe-in")
      observer.unobserve(entry.target)
    }
  })
}, {
  threshold: 0.1
})

const animateElements = document.querySelectorAll(".hidden-observe-in")
animateElements.forEach(element => {
  observer.observe(element)
})