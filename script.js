console.log("Hello World");

function getComputerChoice(){
    ranChoice = Math.floor(Math.random() * 3) + 1;

    switch(ranChoice) {
        case 1:
            return "rock";
        break;
        case 2:
            return "paper";
        break;
        case 3:
            return "scissors";
        break;
    }
    //return ranChoice;
}

/*
console.groupCollapsed("RPS");
for(let i = 0; i < 100; i++){
console.log(getComputerChoice());
}
console.groupEnd("RPS");
*/

function getHumanChoice(){
    return prompt("Enter Rock Paper Scissor Choice");
}
//console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){

    humanChoice = humanChoice.toLowerCase();

    if(computerChoice === humanChoice){
        return `Human chose ${humanChoice} and Computer chose ${computerChoice} so its a tie. Try again!`;
    }  else if( humanChoice === "rock" &&     computerChoice === "scissors" || 
                humanChoice === "paper" &&    computerChoice === "rock" ||
                humanChoice === "scissors" && computerChoice === "paper"){
            humanScore += 1;
            return `Human chose ${humanChoice} and Computer chose ${computerChoice}. You win this round!`;
    } else{
        computerScore += 1;
        return `Human chose ${humanChoice} and Computer chose ${computerChoice}. You lose this round!` 
    }
}
console.log(playRound(getHumanChoice(), getComputerChoice()));
console.log(humanScore);
console.log(computerScore);