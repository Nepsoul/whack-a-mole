let score = 0;
let previousNumber = -1;

let scoreDisplay = document.querySelector("#score");

let holes = document.querySelectorAll(".hole");
debugger;
setInterval(function () {
  if (holes[previousNumber]) {
    holes[previousNumber].classList.remove("mole");
  }
  let randomNumber = Math.floor(Math.random() * 9);

  holes[randomNumber].classList.add("mole");
  previousNumber = randomNumber;
}, 1000);

let gameArea = document.getElementById("whack-a-mole");
//console.log(gameArea);
gameArea.addEventListener("click", function (clickEvent) {
  //console.log(clickEvent);
  if (clickEvent.target.matches(".mole")) {
    clickEvent.target.classList.remove("mole");
    score++;
    scoreDisplay.innerText = score;
  }
});
