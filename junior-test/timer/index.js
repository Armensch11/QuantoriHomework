const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    const countDownStop = new Date().getTime() + seconds * 1000;
    const timerStop = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeLeft = countDownStop - currentTime;
      if (timeLeft < 1) {
        timerEl.textContent = `00:00:00`;
        clearInterval(timerStop);
      } else {
        const hours = Math.floor(
          (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((timeLeft % (1000 * 60)) / 1000);
        timerEl.textContent = `${hours}:${minutes}:${secs}`;
      }
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", function (e) {
  this.value = this.value.replace(/[^\d.]/g, "");
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = "";
});
