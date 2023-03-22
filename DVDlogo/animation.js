function setColorOnBounce() {
  const logo = document.getElementById("logo-container");

  const body = document.getElementsByTagName("body")[0];
  const width = body.clientWidth;
  const height = body.clientHeight;
  const position = logo.getBoundingClientRect();
  const audio = new Audio("./audio/laser.mp3");
  if (
    position.x - 5 <= 0 ||
    position.y - 5 <= 0 ||
    position.x + position.width + 5 >= width ||
    position.y + position.height >= height
  ) {
    audio.play();
  }
  setTimeout(setColorOnBounce, 100);
}
