const burger = document.getElementById("hamburger");

const navList = document.getElementById("menuList");

let showNav = true;

burger.addEventListener("click", () => {
  if (showNav) {
    navList.style.animation = "navSlide 0.8s ease forwards";

    showNav = false;
  } else {
    navList.style.animation = "navHide 0.8s ease forwards";

    showNav = true;
  }
});

document.body.addEventListener("click", (event) => {
  if (showNav == false && event.target != navList && event.target != burger) {
    navList.style.animation = "navHide 0.4s ease forwards";
    showNav = true;
  }
});
