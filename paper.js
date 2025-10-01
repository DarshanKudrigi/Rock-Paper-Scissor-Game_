let user = 0;
let machine = 0;


const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#play");
const userscorebox= document.querySelector("#userscore");
const comptscorebox= document.querySelector("#machinescore");

const genComputer = () => {
  const option = ["rock", "paper", "scissors"];
  const randix = Math.floor(Math.random() * 3);
  return option[randix];
};

const drawgame = () => {
  console.log("Game is draw");
  message.innerText = "Draw Match! Play again!";
     message.style.backgroundColor="blue";

};

const showWinner = (userwin,userchoice,computerchoice) => {
  if (userwin) {
    console.log("Wow you won!");
     user++
    userscorebox.innerText=user;
    message.innerText = `🎉 You Won!  Your  ${userchoice} Beats ${computerchoice}` ;
    message.style.backgroundColor="green";
  } else {
     machine++;
     comptscorebox.innerText=machine;
    console.log("Try again Buddy");
    message.innerText = `😞 You Lost! Computer's  ${computerchoice} Beats  Your ${userchoice}`;
        message.style.backgroundColor="red";
  }
};

const palygame = (userchoice) => {
  console.log("User choice is:", userchoice);
  // computer choice
  const computerchoice = genComputer();
  console.log("Computer choice is:", computerchoice);

  if (userchoice === computerchoice) {
    // draw game
    drawgame();
    return; //  important to stop further checking
  }

  let userwin = true;

  if (userchoice === "rock") {
    userwin = computerchoice === "scissors" ? true : false;
  } else if (userchoice === "paper") {
    userwin = computerchoice === "rock" ? true : false;
  } else {
    userwin = computerchoice === "paper" ? true : false;
  }

  showWinner(userwin,userchoice,computerchoice);
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    palygame(userchoice);
  });
});
