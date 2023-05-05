export const checkLocalStorage = () => {
  const today = new Date();
  const stringToCompare = `${today.getDate()}-${today.getMonth()}`;

  let lastDateModalShown;
  if (localStorage.lastDateShown) {
    lastDateModalShown = new Date(localStorage.lastDateShown);
    const lastDateShownString = `${lastDateModalShown.getDate()}-${lastDateModalShown.getMonth()}`;

    if (lastDateShownString === stringToCompare) {
      return true;
    } else {
      localStorage.setItem("lastDateShown", `${today}`);

      return false;
    }
  }

  localStorage.setItem("lastDateShown", `${today}`);

  return false;
};
