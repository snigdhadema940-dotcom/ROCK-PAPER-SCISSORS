const choices=["rock","paper","scissors"];
const playerchoice=document.getElementById("playerChoice");
const computerchoice=document.getElementById("computerChoice");
const display=document.getElementById("display");
const playerpoints=document.getElementById("playerpoints");
const computerpoints=document.getElementById("computerpoints");
let playerPoints=0;
let computerPoints=0;

function gamestart(game){
    const computer=choices[Math.floor(Math.random()*3)];
    computerchoice.textContent=`Computer:${computer}`;
    let result="";
    if(game===computer){
        result="IT'S A TIE";
        playerPoints++;
        computerPoints++;
        

    }
    else{
        switch(game){
            case "rock":
                result=(computer==="scissors")?"YOU WIN!!!":"YOU LOSE";
                break;
            case "paper":
                result=(computer==="rock")?"YOU WIN!!!":"YOU LOSE";
                break;
            case "scissors":
                result=(computer==="paper")?"YOU WIN!!!":"YOU LOSE";
                break;
            
        }
    }
   playerchoice.textContent=`Player:${game}`;
   display.textContent=`${result}`;
   display.classList.remove("green","red");
   switch(result){
    case "YOU WIN!!!":
        display.classList.add("green");
        playerPoints++;
        break;
    case "YOU LOSE":
        display.classList.add("red");
        computerPoints++;
        break;
    
   }
   let playerscore=document.createElement("p");
   playerscore.textContent=`${playerPoints}`;
   playerpoints.textContent=`${playerPoints}`;
   computerpoints.textContent=`${computerPoints}`;



}


