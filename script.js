const loader = document.getElementById("loader");
const appWrapper = document.getElementById("appWrapper");
const continueBtn = document.getElementById("continueBtn");

continueBtn.addEventListener("click", () => {
  loader.style.display = "none";
  appWrapper.style.display = "block";
});
