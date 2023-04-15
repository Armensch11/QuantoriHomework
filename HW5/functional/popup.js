export function popup(message, type = "success") {
  const body = document.getElementsByTagName("body")[0];
  const popContainer = document.createElement("div");
  popContainer.setAttribute("class", "popup");
  popContainer.style.width = "160px";
  popContainer.style.height = "40px";
  popContainer.backgroundColor = "#e6e3e3";
  if (type === "success") {
    // popContainer.style.border = "1px solid #67cf92";
    popContainer.style.color = "#34eb37";
  } else {
    // popContainer.style.border = "1px solid #cf555d";
    popContainer.style.color = "#eb3437";
  }
  popContainer.style.borderRadius = "8px";
  popContainer.innerText = message;
  popContainer.style.zIndex = "100";
  popContainer.style.position = "absolute";
  popContainer.style.top = "calc(100% - 30px)";
  popContainer.style.left = "80%";
  popContainer.style.display = "block";
  popContainer.style.transform = "translate(-50%, -50%)";
  body.appendChild(popContainer);
  console.log("popup runs");
  setTimeout(() => closePopup(popContainer), 2000);
}
function closePopup(popContainer) {
  popContainer.remove();
}
