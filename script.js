const loader = document.getElementById("loader");
const appWrapper = document.getElementById("appWrapper");
const continueBtn = document.getElementById("continueBtn");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const siteFrame = document.getElementById("siteFrame");

let progress = 0;
let isLoaded = false;

// Simulate progress bar loading
function simulateProgress() {
  const interval = setInterval(() => {
    if (progress < 90) {
      progress += Math.random() * 30;
      if (progress > 90) progress = 90;
    }
    updateProgressBar();

    if (isLoaded && progress < 100) {
      progress = 100;
      updateProgressBar();
      clearInterval(interval);
    }
  }, 300);
}

function updateProgressBar() {
  progressBar.style.width = progress + "%";
  progressText.textContent = Math.floor(progress) + "%";
}

// Preload the iframe
function preloadFrame() {
  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "iframe";
  link.href = "https://aviatorpredictorbot.base44.app";
  document.head.appendChild(link);

  // Start simulating progress
  simulateProgress();

  // Listen for iframe load
  siteFrame.addEventListener("load", () => {
    isLoaded = true;
    progress = 100;
    updateProgressBar();
    continueBtn.disabled = false;
  });

  // Fallback: enable button after 8 seconds even if not fully loaded
  setTimeout(() => {
    if (!isLoaded) {
      isLoaded = true;
      progress = 100;
      updateProgressBar();
      continueBtn.disabled = false;
    }
  }, 8000);
}

// Start preloading on page load
window.addEventListener("load", preloadFrame);

continueBtn.addEventListener("click", () => {
  loader.style.display = "none";
  appWrapper.style.display = "block";
});
