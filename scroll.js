const robots = [
    "./assets/images/Robot 1 - Research.svg",
    "./assets/images/Robot 2 -  Design.svg",
    "./assets/images/Robot 4 - Simulation.svg",
    "./assets/images/Robot 3 - development.svg",
    "./assets/images/Robot 5 - final.svg ",
  ];
let container = document.getElementById("container");
let robot = document.getElementById("robot");
let currentPercentage =0;
let scrollPercentage =0;

function changeImageSource() {
  // Calculate the scroll percentage

  

  let arrDesktop = [25, 33, 41, 49, 57];
  let arrMobile = [15, 21, 27, 33, 39];
  let arr = window.innerWidth < 900 ? arrMobile : arrDesktop;

  const slide = document.getElementsByClassName("slide");

  if (currentPercentage > scrollPercentage) {
    console.log(currentPercentage);
    
  } else {
    console.log(currentPercentage);

  }
}

window.addEventListener("scrollend", () => {
   scrollPercentage = Math.floor(
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
  );
  currentPercentage = scrollPercentage;
});


changeImageSource();
