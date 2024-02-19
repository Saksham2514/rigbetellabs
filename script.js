const imageDataWp = [
  {
    src: "./assets/images/WWD_Research.svg",
    robot: "./assets/images/Robot 1 - Research.svg",
    heading: "Research",
    desc: "At RigBetel Labs, we have a bold vision to revolutionize the perception & accessibility of robotics. Our aim is to make  more practical",
  },
  {
    src: "./assets/images/WWD_Design.svg",
    robot: "./assets/images/Robot 2 -  Design.svg",
    heading: "Design",
    desc: "At RigBetel Labs, we have a bold vision to revolutionize the perception & accessibility of robotics. Our aim is to make robotics more practical",
  },
  {
    src: "./assets/images/WWD_Simulation.svg",
    robot: "./assets/images/Robot 4 - Simulation.svg",
    heading: "Simulation",
    desc: "At RigBetel Labs, we have a bold vision to revolutionize the perception &  accessibility of robotics. Our aim is to make robotics more practical",
  },
  {
    src: "./assets/images/WWD_Development.svg",
    robot: "./assets/images/Robot 3 - development.svg",
    heading: "Development",
    desc: "At RigBetel Labs, we have a bold vision to revolutionize the perception & accessibility of robotics. Our aim is to make robotics more practical",
  },
  {
    src: "./assets/images/WWD_Interface-and-control.svg",
    robot: "",
    heading: "Interface & Control",
    desc: "At RigBetel Labs, we have a bold vision to revolutionize the perception & accessibility of robotics. Our aim is to make  more practical",
  },
];

let container = document.getElementById("img-container");
let rcontainer = document.getElementById("robot-container");
const image = document.getElementById("mainImage");
const robot = document.getElementById("secondaryImage");
const head = document.getElementById("heading");
const desc = document.getElementById("desc");

container.addEventListener("scroll", () => {
  console.warn(container.scrollLeft);
  console.warn(container.scrollHeight);
});

let currentPercentage = 0;
// Function to change the image source based on scroll position
function changeImageSource() {
  // Calculate the scroll percentage

  console.log(window.scrollY);

  let arrDesktop = [25, 33, 41, 49, 57];
  let arrMobile = [15, 21, 27, 33, 39];
  let arr = window.innerWidth < 900 ? arrMobile : arrDesktop;

  const slide = document.getElementsByClassName("slide");
  container.scrollBy(200, 0);
  // container.scrollBy(-250, 0);
  // if (currentPercentage > scrollPercentage) {
  //   container.scrollBy(200, 0);
  //   // container.style = " background:none;";
  // } else {
  //   container.scrollBy(-200, 0);
  //   // alert()

  //   // container.style.transform = `translateX(${scrollPercentage}00px)`;
  // }
}

// Attach the function to the scroll event
window.addEventListener("scroll", () => container.scrollBy(200, 0));
window.addEventListener("scrollend", () => {
  const scrollPercentage = Math.floor(
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
  );
  currentPercentage = scrollPercentage;
});
// currentPercentage = scrollPercentage;

// Initial call to set the initial image based on scroll position
changeImageSource();
// $(document).ready(() => alert());
