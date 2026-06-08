var stamps = document.getElementById("stamps");
var stamps2 = document.getElementById("stamps2");

const xhr = new XMLHttpRequest();

for (let i = 1; i < 18; i++) {
  const stamp = document.createElement("img");
  stamp.className = "stamp";
  stamp.alt = "stamp " + i;
  xhr.open("GET", "../assets/stamps/" + i + ".png", false);

  xhr.onload = () => {
    if (xhr.DONE && xhr.status === 200) {
      stamp.src = "../assets/stamps/" + i + ".png";
    } else {
      stamp.src = "../assets/stamps/" + i + ".gif";
    }
  };
  try {
    xhr.send();
  } catch {}

  stamps.append(stamp);
}

const stampsScroll = document.getElementById("stamps");
let speed = 1; // Pixels per frame. Increase for faster scrolling, decrease to slow down.
let scrollAmount = stampsScroll.offsetWidth / 3; // Start with an offset to create a gap between the two sets of stamps

function scrollStamps() {
  // Move the track to the left
  scrollAmount -= speed;

  const halfWidth = stampsScroll.scrollWidth;

  // If we've scrolled past the first entire group, snap back to 0
  if (Math.abs(scrollAmount) >= halfWidth) {
    scrollAmount = stampsScroll.offsetWidth / 3; // Reset to the initial offset to create a continuous loop
  }

  // Apply the movement
  stampsScroll.style.transform = `translateX(${scrollAmount}px)`;

  // Call the next frame
  requestAnimationFrame(scrollStamps);
}

// Start the animation loop
scrollStamps();

const counter = document.getElementById("counter");

function updateCounter() {
  fetch(
    "https://api.counterapi.dev/v2/bothsxdess-team-4373/bsxqrcodecounter/up",
  )
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("visitor-count").textContent = data.data.up_count;
    })
    .catch((error) => {
      console.error("Error fetching counter:", error);
    });
}

function switchTheme() {
  document.body.classList.toggle("dark");
  const boxes = document.getElementsByClassName("box");
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].classList.toggle("dark");
  }
  const themeButton = document.getElementById("theme-button");
  themeButton.classList.toggle("dark");
  const link = document.querySelector("#ticketbutton");
  link.classList.toggle("dark");
}

function randomQuote() {
  fetch("https://api.api-ninjas.com/v2/quoteoftheday", {
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": "ycQmW6YAgJBvhrtlqx15qAzMPvIwZCGVeHdYOZoc",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      document.querySelector("#quote").textContent = data[0].quote;
    });
}

function randomGif() {
  fetch(
    "https://api.giphy.com/v1/gifs/random?api_key=7H7bGz6arUmg02aA43foKjzRGuFVUiJu&tag=brainrot&rating=pg",
  )
    .then((response) => response.json())
    .then((data) => {
      document.querySelector("#brainrot").src =
        data.data.images.downsized_medium.url;
    });
}

updateCounter();
randomQuote();
randomGif();
