const bg = document.querySelector("#bg");
console.log(window.outerHeight);

window.mobileCheck = window.outerWidth <= 600 ? () => true : () => false;
console.log("is mobile:", window.mobileCheck());
console.log("window width:", window.outerWidth);

if (window.mobileCheck()) {
  bg.src = "assets/bgvidvertical.mp4";
} else {
  bg.src = "assets/bgvid.mp4";
}

window.addEventListener("resize", () => {
  if (window.mobileCheck()) {
    bg.src = "assets/bgvidvertical.mp4";
  } else {
    bg.src = "assets/bgvid.mp4";
  }
});

const icons = document.querySelector(".icon");
icons.fill;

bg.playbackRate = 0.9;
// bg.play();
