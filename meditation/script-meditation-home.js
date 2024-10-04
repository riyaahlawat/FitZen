let isAnimating = false;
let intervalId;

function startAnimation() {
  if (!isAnimating) {
    isAnimating = true;

    // Start ripple animation
    document.querySelectorAll(".circle").forEach((circle) => {
      circle.style.animationPlayState = "running";
    });

    // Start the first music automatically
    playMusic("relax.mp3");

    // Enable the stop button and disable the start button
    document.getElementById("stopBtn").disabled = false;
    document.getElementById("startBtn").disabled = true;
  }
}

function stopAnimation() {
  if (isAnimating) {
    isAnimating = false;

    // Stop ripple animation
    document.querySelectorAll(".circle").forEach((circle) => {
      circle.style.animationPlayState = "paused";
    });

    // Stop the audio
    const audioPlayer = document.getElementById("meditation-audio");
    audioPlayer.pause();
    audioPlayer.currentTime = 0; // Reset to start

    // Disable the stop button and enable the start button
    document.getElementById("stopBtn").disabled = true;
    document.getElementById("startBtn").disabled = false;
  }
}

function playMusic(musicFile, color) {
  // Play selected music
  const audioPlayer = document.getElementById("meditation-audio");
  audioPlayer.src = "./assets/music/" + musicFile;
  audioPlayer.play();

  document
    .getElementById("circle-animation")
    .scrollIntoView({ behavior: "smooth" });

  document.documentElement.style.setProperty("--animation-color", color);

  startAnimation();
}

// Attach event listeners to the start and stop buttons
document.getElementById("startBtn").addEventListener("click", startAnimation);
document.getElementById("stopBtn").addEventListener("click", stopAnimation);
