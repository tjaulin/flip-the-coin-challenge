const randomBtn = document.querySelector("#random-btn");
const coinWrapper = document.querySelector("#coin-wrapper");
const resultCoin = document.querySelector(".result-coin");
const shadowCoin = document.querySelector("#shadow");
const inputCoin = document.querySelector("#input-coin-status");

let currentRotation = 0;

randomBtn.addEventListener("click", spinCoin);
coinWrapper.addEventListener("click", spinCoin);

function spinCoin() {
  randomBtn.disabled = true;
  resultCoin.textContent = "Spinning...";

  const isHeads = Math.random() < 0.5;
  let targetAngle = 0;

  if(inputCoin.value == "tails" && !isHeads || inputCoin.value == "heads" && isHeads) {
    targetAngle = 1080; // 3 full rotations
  } else {
    targetAngle = 1260; // 3 full rotations + 90 degrees to show the other side
  }

  currentRotation += targetAngle;

  coinWrapper.style.transition = 'transform 3s linear';
  coinWrapper.style.transform = `rotateY(${currentRotation}deg)`;
  
  shadowCoin.style.transition = 'transform 3s linear';
  shadowCoin.style.transform = `rotateY(${currentRotation}deg)`;

  setTimeout(() => {
    resultCoin.textContent = isHeads ? "Heads" : "Tails";
    inputCoin.value = isHeads ? "heads" : "tails";
    randomBtn.disabled = false;
  }, 3000);
}
