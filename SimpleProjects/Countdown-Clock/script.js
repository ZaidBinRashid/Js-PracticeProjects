let countdownInterval;

function startCountdown() {
  clearInterval(countdownInterval);

  const hours = parseInt(document.getElementById("hours").value) || 0;
  const minutes = parseInt(document.getElementById("minutes").value) || 0;
  const seconds = parseInt(document.getElementById("seconds").value) || 0;

  let totalTimeInSeconds = hours * 3600 + minutes * 60 + seconds;

  function updateCountdown() {
    if (totalTimeInSeconds <= 0) {
      clearInterval(countdownInterval);
      document.getElementById("countdown").innerHTML = "Time's Up!";
      return;
    }

    const days = Math.floor(totalTimeInSeconds / (3600 * 24));
    const hrs = Math.floor((totalTimeInSeconds % (3600 * 24)) / 3600);
    const mins = Math.floor((totalTimeInSeconds % 3600) / 60);
    const secs = Math.floor(totalTimeInSeconds % 60);

    document.getElementById(
      "countdown"
    ).innerHTML = `${days}d ${hrs}h ${mins}m ${secs}s`;

    totalTimeInSeconds--;
  }

  updateCountdown();
  countdownInterval = setInterval(updateCountdown, 1000);
}
