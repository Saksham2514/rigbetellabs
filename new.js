const robots = [
  "./assets/images/Robot 1 - Research.svg",
  "./assets/images/Robot 2 -  Design.svg",
  "./assets/images/Robot 4 - Simulation.svg",
  "./assets/images/Robot 3 - development.svg",
  "./assets/images/Robot 5 - final.svg ",
];

const container = document.getElementById("img-container");
const robot = document.getElementById("robot");

let scrollUp = false;
let step = 0;
let lastScrollTop = 0;

const scroll_threshold = window.innerWidth - 70;
console.log(window.innerWidth);
const swipe = (slide) => {
  container.scrollTo({
    left: slide,
    behavior: "smooth",
  });
};

const carousal = () => {
  let st = window.pageYOffset || document.documentElement.scrollTop;
  robot.style.opacity = 0.3;
  if (st > lastScrollTop && step + 1 < 6) {
    scrollUp = false;
    swipe(scroll_threshold * step);
    robot.src = robots[step];
  } else if (st < lastScrollTop) {
    swipe(scroll_threshold * (step - 1));

    robot.src = robots[step - 1 > 0 ? step - 1 : 0];

    scrollUp = true;
  }
  if (robot.src.includes("final")) {
    robot.classList.add("mt-5");
  } else robot.classList.remove("mt-5");

  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
};

window.addEventListener("scroll", () => {
  const scrollPercentage = Math.floor(
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
  );

  scrollPercentage > 20 ? carousal() : (step = 0);
  scrollPercentage > 65 ? (step = 5) : carousal();
  console.log(scrollPercentage);
});

window.addEventListener("scrollend", () => {
  step = scrollUp ? (step == 0 ? 0 : step - 1) : step == 5 ? 5 : step + 1;
  console.log(step);
});

var opacity = 0;
var intervalID = 0;
window.addEventListener("scroll", fadeout);
function fadeout() {
  setInterval(show, 200);
}
function show() {
  opacity = Number(window.getComputedStyle(robot).getPropertyValue("opacity"));

  if (opacity < 1) {
    opacity = opacity + 0.01;
    robot.style.opacity = opacity;
  } else {
    clearInterval(intervalID);
  }
}
