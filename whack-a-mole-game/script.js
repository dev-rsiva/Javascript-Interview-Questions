function generateRandomNum() {
  const num = Math.floor(Math.random() * 16);
  console.log(num);
  return num;
}

const layoutDiv = document.getElementsByClassName("layout")[0];
const containerDiv = document.getElementsByClassName("container")[0];
const startBtn = document.getElementsByClassName("startBtn")[0];
const pauseBtn = document.getElementsByClassName("pauseBtn")[0];
const scoreDiv = document.getElementsByClassName("score")[0];
const timeLeftDiv = document.getElementsByClassName("timeLeft")[0];
const gameMusic = document.getElementsByClassName("gameMusic")[0];

let count = 2;
let score = 0;
let timeLeftIntervalId;
let moleIntervalId;
let moleClickExecution;

timeLeftDiv.innerText = count;

startBtn.addEventListener("click", startGame);
containerDiv.addEventListener("click", checkMoleMatching);
pauseBtn.addEventListener("click", pauseResumeGame);

function addMole(num) {
  let blockName = `.block${num} .moleImg`;
  const allBlockImg = document.getElementsByClassName("moleImg");
  const blockItems = Array.from(allBlockImg);
  blockItems.forEach((each) => each.classList.remove("show"));

  console.log(blockName);
  const blockItem = document.querySelector(blockName);
  console.log(blockItem.classList);
  blockItem.classList.add("show");

  console.log(timeLeftDiv.innerText);
}

function executeCountDown() {
  // if (count !== 0) {
  count--;
  console.log(count);
  timeLeftDiv.innerText = count;
  console.log(timeLeftDiv);
  // }
  if (count == 0) {
    stopCounting();
    const scoreDiv = `<div class="scoreDiv" >
                          <p>Your Score: ${score}</p> 
                      </div>`;

    layoutDiv.innerHTML = scoreDiv;

    // layoutDiv.style.color = "rgb(0, 124, 114)";
    // layoutDiv.style.fontSize = "larger";
    // layoutDiv.style.padding = "5px";
    // layoutDiv.style.fontWeight = 600;
  }
}

function startGame() {
  gameMusic.play();
  timeLeftIntervalId = setInterval(executeCountDown, 1000);

  moleIntervalId = setInterval(() => {
    const randomNum = generateRandomNum();
    console.log(randomNum);

    addMole(randomNum);
  }, 1000);
}

function checkMoleMatching(e) {
  const blockItem = e.target;
  const isMoleMatched = blockItem.classList.contains("show");
  console.log(isMoleMatched);

  if (isMoleMatched) {
    clearTimeout(moleClickExecution);
    moleClickExecution = setTimeout(() => {
      score++;
      scoreDiv.innerText = score;
    }, 1000);
  }
}

function stopCounting() {
  if (timeLeftDiv.innerText === "0") {
    console.log("stopped");
    clearInterval(timeLeftIntervalId);
    clearInterval(moleIntervalId);
    gameMusic.pause();
  }
}

function pauseResumeGame() {
  console.log("pause game");

  let currTimeLeft = count;
  let currScore = score;
  console.log(currTimeLeft);
  console.log(currScore);
  if (pauseBtn.innerText === "Pause") {
    console.log(pauseBtn.innerText);
    gameMusic.pause();
    clearInterval(timeLeftIntervalId);
    clearInterval(moleIntervalId);
    pauseBtn.innerText = "Resume";
  } else {
    console.log("resumeClicked");
    timeLeftIntervalId = setInterval(executeCountDown, 1000);
    moleIntervalId = setInterval(() => {
      const randomNum = generateRandomNum();
      console.log(randomNum);

      addMole(randomNum);
    }, 1000);
    gameMusic.play();
    pauseBtn.innerText = "Pause";
  }
}
