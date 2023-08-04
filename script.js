/// Variable assigning
const start = document.getElementById("start");
const reset = document.getElementById("reset");
const pause = document.getElementById("pause");
const action = document.getElementById("action");
const timerSet = document.getElementById("setTimer");
const timerStop = document.getElementById("stopTimer");
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let startCounter = 0;
let hr = 0;
let min = 0;
let sec = 0;
let timer = null;

// Event listener

action.addEventListener("click", function (e) {
  e.target.blur();
  const task = e.target.id;
  if (task.toLowerCase() == "start") {
    startCounter++;
    if (startCounter == 1) {
      const pad = function (num) {
        const padNumber = num.toString().padStart(2, 0);
        return padNumber;
      };

      second.innerHTML = pad(sec) + " : Sec";
      minute.innerHTML = pad(min) + " : Min";
      hour.innerHTML = pad(hr) + " : Hr";

      if (!timer) {
        timer = setInterval(() => {
          if (sec < 59) {
            sec++;
            second.innerHTML = pad(sec) + " : Sec";
          } else {
            sec = 0;
            if (min < 59) {
              min++;
              second.innerHTML = "00 : Sec";
              minute.innerHTML = pad(min) + " : Min";
            } else {
              min = 0;
              if (hr < 24) {
                hr++;
                minute.innerHTML = "00 : Min";
                hour.innerHTML = pad(hr) + " : hr";
              }
            }
          }
        }, 1000);
      }
    }
  } else if (task.toLowerCase() == "pause") {
    if (timer) {
      clearInterval(timer);
      startCounter = 0;
      timer = null;
    }
  } else if (task.toLowerCase() == "reset") {
    clearTimeout(timer);
    hr = 0;
    min = 0;
    sec = 0;
    startCounter = 0;
    timer = null;
    second.innerHTML = "00 : Sec";
    minute.innerHTML = "00 : Min";
    hour.innerHTML = "00 : Hr";
  }
});
