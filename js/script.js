const timeDisplay = document.getElementById("timeDisplay");
const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButton");
const lapButton = document.getElementById("lapButton");
const resetButton = document.getElementById("resetButton");
const lapList = document.getElementById("lapList");
const lapCount = document.getElementById("lapCount");
const emptyLapMessage = document.getElementById("emptyLapMessage");

let startTime = 0;
let elapsedTime = 0;
let animationFrameId = null;
let isRunning = false;
let lapNumber = 0;
let previousLapTime = 0;

/**
 * Converts milliseconds into HH:MM:SS.mmm format.
 */
function formatTime(milliseconds) {
  const totalMilliseconds = Math.floor(milliseconds);

  const hours = Math.floor(totalMilliseconds / 3600000);
  const minutes = Math.floor(
    (totalMilliseconds % 3600000) / 60000
  );
  const seconds = Math.floor(
    (totalMilliseconds % 60000) / 1000
  );
  const millisecondsPart = totalMilliseconds % 1000;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")}.${String(
    millisecondsPart
  ).padStart(3, "0")}`;
}

/**
 * Updates the stopwatch display while it is running.
 */
function updateStopwatch(currentTime) {
  elapsedTime = currentTime - startTime;
  timeDisplay.textContent = formatTime(elapsedTime);

  if (isRunning) {
    animationFrameId = requestAnimationFrame(updateStopwatch);
  }
}

/**
 * Updates button availability based on stopwatch state.
 */
function updateButtons() {
  startButton.disabled = isRunning;
  pauseButton.disabled = !isRunning;
  lapButton.disabled = !isRunning;
  resetButton.disabled = elapsedTime === 0 && !isRunning;

  if (!isRunning && elapsedTime > 0) {
    startButton.textContent = "Resume";
  } else {
    startButton.textContent = "Start";
  }
}

/**
 * Starts or resumes the stopwatch.
 */
function startStopwatch() {
  if (isRunning) {
    return;
  }

  isRunning = true;

  /*
   * Subtracting elapsedTime allows the stopwatch
   * to continue correctly after being paused.
   */
  startTime = performance.now() - elapsedTime;

  animationFrameId = requestAnimationFrame(updateStopwatch);

  updateButtons();
}

/**
 * Pauses the stopwatch.
 */
function pauseStopwatch() {
  if (!isRunning) {
    return;
  }

  isRunning = false;

  cancelAnimationFrame(animationFrameId);
  animationFrameId = null;

  updateButtons();
}

/**
 * Records the current lap time.
 */
function recordLap() {
  if (!isRunning) {
    return;
  }

  lapNumber += 1;

  const currentTotalTime = elapsedTime;
  const individualLapTime = currentTotalTime - previousLapTime;

  previousLapTime = currentTotalTime;

  const lapItem = document.createElement("li");

  const lapLabel = document.createElement("span");
  lapLabel.textContent = `Lap ${lapNumber}`;

  const lapTime = document.createElement("span");
  lapTime.textContent = `${formatTime(
    individualLapTime
  )} | Total: ${formatTime(currentTotalTime)}`;

  lapItem.appendChild(lapLabel);
  lapItem.appendChild(lapTime);

  /*
   * prepend() places the newest lap at the top.
   */
  lapList.prepend(lapItem);

  lapCount.textContent =
    lapNumber === 1 ? "1 lap" : `${lapNumber} laps`;

  emptyLapMessage.hidden = true;
}

/**
 * Resets the stopwatch and clears all laps.
 */
function resetStopwatch() {
  isRunning = false;

  cancelAnimationFrame(animationFrameId);

  startTime = 0;
  elapsedTime = 0;
  animationFrameId = null;
  lapNumber = 0;
  previousLapTime = 0;

  timeDisplay.textContent = "00:00:00.000";
  lapList.innerHTML = "";
  lapCount.textContent = "0 laps";
  emptyLapMessage.hidden = false;

  updateButtons();
}

startButton.addEventListener("click", startStopwatch);
pauseButton.addEventListener("click", pauseStopwatch);
lapButton.addEventListener("click", recordLap);
resetButton.addEventListener("click", resetStopwatch);

updateButtons();