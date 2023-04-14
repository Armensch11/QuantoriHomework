export function popup(message, type = "success") {
  const body = document.getElementsByTagName("body")[0];
  const popContainer = document.createElement("div");
  popContainer.style.width = "300px";
  popContainer.style.height = "100px";
  if (type === "success") {
    popContainer.style.border = "2px solid #34eb37";
  } else {
    popContainer.style.border = "2px solid #eb3437";
  }
  popContainer.innerText = message;
  popContainer.style.zIndex = "100";
  popContainer.style.position = "absolute";
  popContainer.style.top = "0px";
  popContainer.style.left = "calc(100%/2 + 150px)";
  body.appendChild(popContainer);
}
