import "./popup.css";

export function popup(message: string, type = "success"): void {
  // const body = document.getElementsByTagName("body")[0];
  const body = document.querySelector("body");
  console.log(body);
  const popContainer = document.createElement("div");
  popContainer.setAttribute("class", "popup");
  popContainer.innerText = message;
  if (type !== "success") {
    popContainer.style.color = "#eb3437";
  }

  body?.appendChild(popContainer);
  console.log("popup runs");
  setTimeout(() => closePopup(popContainer), 4000);
}
function closePopup(popContainer: HTMLDivElement) {
  popContainer.remove();
}
