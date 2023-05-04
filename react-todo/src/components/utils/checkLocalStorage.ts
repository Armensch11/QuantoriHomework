export const checkLocalStorage = () => {
  const today = new Date();
  const stringToCompare = `${today.getDate()}-${today.getMonth()}`;
  console.log(stringToCompare);
  let lastDateModalShown;
  if (localStorage.lastDateShown) {
    console.log(localStorage.lastDateShown);
    lastDateModalShown = new Date(localStorage.lastDateShown);
    const lastDateShownString = `${lastDateModalShown.getDate()}-${lastDateModalShown.getMonth()}`;
    console.log(lastDateShownString);
    return lastDateShownString === stringToCompare;
  } else {
    localStorage.setItem("lastDateShown", `${today}`);
    console.log("newly set");
    return false;
  }
};
