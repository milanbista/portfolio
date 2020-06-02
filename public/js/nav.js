//Navigation Animation
const burger = document.getElementById("hamburger");
const navList = document.getElementById("menuList");
let showNav = true;

burger.addEventListener("click", () => {
  if (showNav) {
    navList.style.animation = "navSlide 0.5s ease forwards";

    showNav = false;
  } else {
    navList.style.animation = "navHide 0.5s ease forwards";

    showNav = true;
  }
});

document.body.addEventListener("click", (event) => {
  if (showNav == false && event.target != navList && event.target != burger) {
    navList.style.animation = "navHide 0.4s ease forwards";
    showNav = true;
  }
});

//Smooth Scroll
function smoothScroll(targ, duration) {
  let target = document.querySelector(targ);
  let targetPosition = target.getBoundingClientRect().top;
  let startPosition = window.pageYOffset;

  let distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    let run = ease(timeElapsed, startPosition, targetPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

let homePage = document.querySelector("#homePageID");
let aboutPage = document.getElementById("aboutPageID");
let projectPage = document.getElementById("projectPageID");
let contactPage = document.getElementById("contactPageID");

homePage.addEventListener("click", () => {
  smoothScroll(".homePage", 1000);
});

aboutPage.addEventListener("click", () => {
  smoothScroll(".aboutPage", 1000);
});

projectPage.addEventListener("click", () => {
  smoothScroll(".projectsPage", 1000);
});

contactPage.addEventListener("click", () => {
  smoothScroll(".contactPage", 1000);
});
