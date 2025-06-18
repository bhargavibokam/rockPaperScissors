let userScore = 0;
let compScore =0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScoremsg = document.querySelector("#user-score");
const compScoremsg = document.querySelector("#comp-score");

const genCompChoice=()=>{
      const options =["rock","paper","scissors"];
      const randomIdx=Math.floor(Math.random()*3);
      return options[randomIdx];
};

const drawGame=()=>{
            console.log("draw");
            msg.innerText="Game was Draw.Play again!";
            msg.style.backgroundColor="black";
};

const showWinner=(userWin,userChoice,compChoice)=>{
     if(userWin){
        userScore++;
        userScoremsg.innerText=userScore;
        msg.innerText=`Hurray! You Won,your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
     }else{
        compScore++;
        compScoremsg.innerText=compScore;
        msg.innerText=`Better Luck Next Time,You lose,${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
     }
};

const playGame = (userChoice)=>{
    
   const compChoice =genCompChoice();
    
   if(userChoice === compChoice){
      //draw
      drawGame();
   }
   else{
    let userWin = true;
    if(userChoice === "rock"){
        //scissor,paper
      userWin = compChoice === "paper"?false:true;
    }
    else if(userChoice === "paper"){
        userWin = compChoice === "rock"? true: false;
    }
    else{
        //rock,paper
        userWin = compChoice === "rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
   }       
};
choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});