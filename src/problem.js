const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const wait = document.getElementById("wait");

stop.style.background = "red";
reset.style.background = "orange";
wait.style.background = "yellow";

/* Get timer elements */
const getHours = document.querySelector(".result__hours");
const getMinutes = document.querySelector(".result__minutes");
const getSeconds = document.querySelector(".result__seconds");

let btnStart = () => {
  start.disabled = true;
  let i = 1;
  let j = 1;
  let k = 1;
  let strOne = "0";
  let strTwo = "0";
  let strThree = "0";
  let result = setInterval(() => {
    getSeconds.textContent = strOne + i++;
    if (getSeconds.textContent > 8) {
      strOne = "";
      parseInt(getSeconds.textContent);
    }
    if (getSeconds.textContent == 60) {
      i = 0;
      strOne = "0";
      getSeconds.textContent = strOne + i++;
      getMinutes.textContent = strTwo + j++;
    }
    if (getMinutes.textContent > 8) {
      strTwo = "";
      parseInt(getMinutes.textContent);
    }

    if (getMinutes.textContent == 60 || getSeconds.textContent == 60) {
      j = 0;
      strTwo = "0";
      getMinutes.textContent = strTwo + j++;
      getHours.textContent = strThree + k++;
    }
  }, 1000);
  btnStop(result); // Stop interval
  btnReset(result); // Reset interval
  btnWait(result); // Wait interval
};

let bindStart = btnStart.bind();

start.addEventListener("click", () => {
  bindStart();
});

let btnStop = (result) => {
  stop.addEventListener("click", () => {
    getHours.textContent = "00";
    getMinutes.textContent = "00";
    getSeconds.textContent = "00";

    clearInterval(result);
    start.disabled = false;
  });
};

let btnReset = (result) => {
  reset.addEventListener("click", () => {
    clearInterval(result);
    bindStart();
  });
};

let btnWait = (result) => {
  wait.addEventListener("click", () => {
    clearInterval(result);
    start.disabled = false;
  });
};

btnStop();
btnReset();
btnWait();
