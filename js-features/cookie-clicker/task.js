const clickImage = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");
function counterClicks() {
  clickerCounter.textContent++;
  clickImage.width = 250;
  setTimeout(() => (clickImage.width = 200), 50);
}
clickImage.onclick = counterClicks;
