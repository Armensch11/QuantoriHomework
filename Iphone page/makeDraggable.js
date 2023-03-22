function makeDraggable() {
  const phoneBody = document.getElementById("draggable");

  const drag = (e) => {
    phoneBody.style.top = e.pageY + "px";
    phoneBody.style.left = e.pageX + "px";
  };

  phoneBody.addEventListener("mousedown", () => {
    window.addEventListener("mousemove", drag);
  });
  window.addEventListener("mouseup", () => {
    window.removeEventListener("mousemove", drag);
  });
  // let posX = 0;
  // let posY = 0;
  // let moveElement = false;
  // const events = {
  //   mouse: {
  //     down: "mousedown",
  //     move: "mousemove",
  //     up: "mouseup",
  //   },
  // };
  // phoneBody.addEventListener(events.mouse.down, (event) => {
  //   event.preventDefault();
  //   posX = event.clientX;
  //   posY = event.clientY;
  //   moveElement = true;
  // });
  // phoneBody.addEventListener(events.mouse.move, (event) => {
  //   if (moveElement) {
  //     event.preventDefault();
  //     let newX = event.clientX;
  //     let newY = event.clientY;
  //     phoneBody.style.top = phoneBody.offsetTop - (posX - newX) + "px";
  //     phoneBody.style.left = phoneBody.offsetLeft - (posY - newY) + "px";
  //     posX = newX;
  //     posY = newY;
  //   }
  // });
  // phoneBody.addEventListener(
  //   events.mouse.up,
  //   (stopMovement = (event) => {
  //     movement = false;
  //   })
  // );
  // phoneBody.addEventListener("mouseleave", stopMovement);
  // phoneBody.addEventListener(events.mouse.up, (e) => {
  //   moveElement = false;
  // });
}
