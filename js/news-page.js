const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    let active = this.classList.toggle("active");
    let button = this.children[0];
    let panel = this.nextElementSibling;
    let svg = this.children[0].childNodes[3];

    if (panel.style.display === "block") {
      panel.style.display = "none";
      svg.classList.remove("rotate-180");
      button.style.borderBottomStyle = "solid";
    } else {
      panel.style.display = "block";
      svg.classList.add("rotate-180");
      button.style.borderBottomStyle = "none";
    }
  });
}

let container = document.getElementById("container");
let child = container.children;
let NumOfNews = child.length;
let NumOfScroll = Math.ceil(NumOfNews / 3);
let html = document.getElementById("html");
let fullhtml = [];

// function for slider right click
function right() {
  container.scrollLeft += 1293;
  let page = Math.ceil(container.scrollLeft / 1293) + 1;
  if (page > circle.length - 1) {
    page = circle.length - 1;
  }
  circle[0].className =
    "w-1.5 h-1.5 bg-[#1A891766] m-1.5  rounded-[50%] circle cursor-pointer";
  for (
    let i = 0;
    i < document.getElementsByClassName("circle").length - 1;
    i++
  ) {
    document.getElementsByClassName("circle")[i].className =
      "w-1.5 h-1.5 bg-[#E6E6E6] m-1.5  rounded-[50%] circle cursor-pointer";
  }
  document.getElementById(page).className =
    "w-1.5 h-1.5 bg-circle m-1.5  rounded-[50%] circle cursor-pointer";
}

// function for slider selft click
function left() {
  container.scrollLeft -= 1293;
  let page = Math.ceil(container.scrollLeft / 1293) - 1;
  if (page < 0) {
    page = 0;
  }
  for (let i = 0; i < document.getElementsByClassName("circle").length; i++) {
    document.getElementsByClassName("circle")[i].className =
      "w-1.5 h-1.5 bg-[#E6E6E6] m-1.5  rounded-[50%] circle cursor-pointer";
  }
  document.getElementById(page).className =
    "w-1.5 h-1.5 bg-circle m-1.5  rounded-[50%] circle cursor-pointer";
}

// start logic for slider dots
let buttons = document.getElementsByClassName("button");
let gg = [buttons];
const buttonPressed = (e) => {
  container.scrollLeft = e.target.id * 1293;
  let value = e.target.id * 1293;
  for (let i = 0; i < document.getElementsByClassName("circle").length; i++) {
    document.getElementsByClassName("circle")[i].className =
      "w-1.5 h-1.5 bg-[#E6E6E6] m-1.5  rounded-[50%] circle cursor-pointer";
  }
  e.target.className =
    "w-1.5 h-1.5 bg-circle m-1.5  rounded-[50%] circle cursor-pointer";
};

for (let i = 0; i < NumOfScroll; i++) {
  let circle = document.createElement("div");
  circle.id = i;
  var element = document.getElementById("html");
  element.appendChild(circle);
  circle.className =
    "w-1.5 h-1.5 bg-[#E6E6E6] m-1.5  rounded-[50%] circle cursor-pointer";
}
let circle = document.getElementsByClassName("circle");
circle[0].className =
  "w-1.5 h-1.5 bg-circle m-1.5  rounded-[50%] circle cursor-pointer";

for (let button of circle) {
  button.addEventListener("click", buttonPressed);
}
