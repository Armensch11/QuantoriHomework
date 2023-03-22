function animateArrow() {
  // e.stopPropagation();
  const arrow = document.getElementById("arrow");
  const div = document.getElementsByClassName("arrow-block")[0];

  let posX = 0;
  setInterval(move, 130);
  function move() {
    if (posX < 26) {
      arrow.style.left = posX + "px";

      posX += 5;
    } else {
      posX = 0;
    }
  }
  div.removeAttribute("onclick");
}
