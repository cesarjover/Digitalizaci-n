let timeLeft = 25 * 60;
let timer;

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  document.getElementById("timer").textContent =
    `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
  const startTime = new Date().toISOString();
  timer = setInterval(() => {
    timeLeft--;
    updateDisplay();

    if (timeLeft <= 0) {
      clearInterval(timer);
      const endTime = new Date().toISOString();
      saveSession(startTime, endTime);
      alert("Pomodoro finalizado");
      timeLeft = 25 * 60;
    }
  }, 1000);
}

function saveSession(startTime, endTime) {
  fetch("http://localhost:3000/save-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ startTime, endTime })
  }).then(res => {
    if (res.ok) console.log("Sesión guardada");
  });
}

updateDisplay();
