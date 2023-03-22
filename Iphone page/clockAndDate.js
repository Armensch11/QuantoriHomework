//import animateArrow from "./animateArrow.js";
function startTime() {
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  const month = today.toLocaleString("default", { month: "long" });
  const dayIndex = today.getDay();
  const day = weekDays[dayIndex];
  const date = today.getDate();
  const minutesFormatted = formatTime(minutes);

  const clock = document.getElementById("clock");
  const dateFull = document.getElementById("date");

  clock.style.color = "#fff";
  clock.style.fontSize = "55px";
  clock.style.fontWeight = 100;
  // clock.style.display = "none";
  dateFull.style.color = "#fff";
  dateFull.style.fontSize = "12px";
  dateFull.style.fontWeight = 400;

  dateFull.innerHTML = day + ", " + date + " " + month;
  clock.innerHTML = hours + ":" + minutesFormatted;
  addRandomWallpaper();

  setTimeout(startTime, 20000);
}

function formatTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}
function debounce(func, timeout = 6000) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(func, timeout);
  };
}
function setBatteryCharge(charge, size, color) {
  setTimeout(() => {
    charge.style.width = `${size}px`;
    charge.style.backgroundColor = color;
  }, 500 * size);
}
function animateCharge() {
  const charge = document.getElementById("battery-charge");
  // charge.style.width = "0px";
  for (let i = 1; i <= 12; i++) {
    const color = i > 2 ? "#0dd81e" : "#e83616";
    setBatteryCharge(charge, i, color);
  }
}
const iphoneBody = document.getElementsByClassName("iphone-main")[0];
iphoneBody.addEventListener(
  "click",
  debounce(() => animateCharge(), 6000)
);

function addRandomWallpaper() {
  const wallpapers = [
    "wallpaper1.jpg",
    "wallpaper2.jpg",
    "wallpaper3.jpg",
    "wallpaper4.jpg",
    "wallpaper5.jpg",
  ];
  const screen = document.getElementsByClassName("iphone-screen")[0];
  const index = Math.round(Math.random() * 3);
  screen.style.backgroundImage = `url(./images/${wallpapers[index]})`;
}
