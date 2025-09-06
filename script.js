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

/*
console.log(playRound(getHumanChoice(), getComputerChoice()));
console.log(humanScore);
console.log(computerScore);
*/

function playGame(rounds){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){

        humanChoice = humanChoice.toLowerCase();

        if(computerChoice === humanChoice){
            return console.log(`Human chose ${humanChoice} and Computer chose ${computerChoice} so its a tie. Try again!`);
        }  else if( humanChoice === "rock" &&     computerChoice === "scissors" || 
                    humanChoice === "paper" &&    computerChoice === "rock" ||
                    humanChoice === "scissors" && computerChoice === "paper"){
                humanScore += 1;
                return console.log(`Human chose ${humanChoice} and Computer chose ${computerChoice}. You win this round!`);
        } else{
            computerScore += 1;
            return console.log(`Human chose ${humanChoice} and Computer chose ${computerChoice}. You lose this round!`); 
        }        
}
    for(let i = 0; i < rounds; i++){
        playRound(getHumanChoice(), getComputerChoice())
        
        console.log(`The Current Score is human ${humanScore} and computer ${computerScore}`)
    }
    if(humanScore === computerScore){
        return console.log(`Close contest! You tied with a score of ${humanScore} to ${computerScore}`);
    } else if(humanScore > computerScore){
        return console.log(`Nice job Human! You won with a score of ${humanScore} to ${computerScore}`);
    } else{
        return console.log(`Nice try Human! You tried your best but lost with a score of ${humanScore} to ${computerScore}`);
    }
    
}
playGame(5);