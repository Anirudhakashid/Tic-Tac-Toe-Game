let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".resetbtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newBtn = document.querySelector(".newbtn");

let turnX = "true"; //playerX and playerO

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnX = true;
  enableboxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX) {
      //Turn x
      box.innerText = "X";
      turnX = false;
    } else {
      //Turn o
      box.innerText = "O";
      turnX = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const disabledboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congrats!!,Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disabledboxes();
};

const checkWinner = () => {
  for (let pattern of winPattern) {
    // boxes madhe pattern cha 0th position
    let posval1 = boxes[pattern[0]].innerText; //  cha inside text
    let posval2 = boxes[pattern[1]].innerText;
    let posval3 = boxes[pattern[2]].innerText;

    if (posval1 != "" && posval2 != "" && posval3 != "") {
      if (posval1 === posval2 && posval2 === posval3) {
        console.log("Winner!!");
        showWinner(posval1);
      }
    }
  }
};

newBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
