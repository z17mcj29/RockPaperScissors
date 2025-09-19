

let humanScore = 0;
let computerScore = 0;

const rockSelect = document.querySelector("#rock");
rockSelect.addEventListener("click", () => {
    if(humanScore < 5 && computerScore < 5){
    playRound("rock", getComputerChoice());
    updateScore();
    }
    
});
const paperSelect = document.querySelector("#paper");
paperSelect.addEventListener("click", () => {
    if(humanScore <= 5 && computerScore <= 5){
    playRound("paper", getComputerChoice());
    updateScore();
    }
    
})
const scissorsSelect = document.querySelector("#scissors");
scissorsSelect.addEventListener("click", () => {
    if(humanScore <= 5 && computerScore <= 5){
    playRound("scissors", getComputerChoice());
    updateScore();
    }
    
})

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

    const scoreArea = document.querySelector("#scoring");

 function playRound(humanChoice, computerChoice){

        //humanChoice = humanChoice.toLowerCase();

        if(computerChoice === humanChoice){
                scoreArea.innerHTML +=`Human chose ${humanChoice} and Computer chose ${computerChoice} so its a tie. Try again! <br>`;
        }  else if( humanChoice === "rock" &&     computerChoice === "scissors" || 
                    humanChoice === "paper" &&    computerChoice === "rock" ||
                    humanChoice === "scissors" && computerChoice === "paper"){
                humanScore += 1;
                scoreArea.innerHTML += `Human chose ${humanChoice} and Computer chose ${computerChoice}. You win this round! <br>`;
        } else{
                computerScore += 1;
                scoreArea.innerHTML += `Human chose ${humanChoice} and Computer chose ${computerChoice}. You lose this round! <br>`; 
        }        
}

function updateScore(){

    scoreArea.innerHTML += `Currently you have ${humanScore} points vs the computers ${computerScore} points!!! <br>`;

    if (humanScore == 5) scoreArea.innerHTML += `YOU WIN with a score of ${humanScore} to ${computerScore}!!!!!`
    if (computerScore == 5) scoreArea.innerHTML += `YOU LOST with a score of ${humanScore} to the computers ${computerScore}! BETTER LUCK NEXT TIME!`; 
    
    


    /*
    if(Number(humanScore) == 5 || Number(computerScore) == 5){
            if(Number(humanScore) == 5){
            scoreArea.innerHtml += `YOU WIN with a score of ${humanScore} to ${computerScore}!!!!!`;
        } else{
            scoreArea.innerHTML += `YOU LOST with a score of ${humanScore} to the computers ${computerScore}! BETTER LUCK NEXT TIME!`;
        } 
    } else{
        scoreArea.innerHTML += `Currently you have ${humanScore} points vs the computers ${computerScore} points!!! <br>`;
    } 
    */  
    
}












/*
console.groupCollapsed("RPS");
for(let i = 0; i < 100; i++){
console.log(getComputerChoice());
}
console.groupEnd("RPS");
*/

// function getHumanChoice(){
//     return prompt("Enter Rock Paper Scissor Choice");
// }
//console.log(getHumanChoice());

/*
console.log(playRound(getHumanChoice(), getComputerChoice()));
console.log(humanScore);
console.log(computerScore);
*/

// function playGame(rounds){
//     let humanScore = 0;
//     let computerScore = 0;

//     function playRound(humanChoice, computerChoice){

//         humanChoice = humanChoice.toLowerCase();

//         if(computerChoice === humanChoice){
//             return console.log(`Human chose ${humanChoice} and Computer chose ${computerChoice} so its a tie. Try again!`);
//         }  else if( humanChoice === "rock" &&     computerChoice === "scissors" || 
//                     humanChoice === "paper" &&    computerChoice === "rock" ||
//                     humanChoice === "scissors" && computerChoice === "paper"){
//                 humanScore += 1;
//                 return console.log(`Human chose ${humanChoice} and Computer chose ${computerChoice}. You win this round!`);
//         } else{
//             computerScore += 1;
//             return console.log(`Human chose ${humanChoice} and Computer chose ${computerChoice}. You lose this round!`); 
//         }        
// }
//     for(let i = 0; i < rounds; i++){
//         playRound(getHumanChoice(), getComputerChoice())
        
//         console.log(`The Current Score is human ${humanScore} and computer ${computerScore}`)
//     }
//     if(humanScore === computerScore){
//         return console.log(`Close contest! You tied with a score of ${humanScore} to ${computerScore}`);
//     } else if(humanScore > computerScore){
//         return console.log(`Nice job Human! You won with a score of ${humanScore} to ${computerScore}`);
//     } else{
//         return console.log(`Nice try Human! You tried your best but lost with a score of ${humanScore} to ${computerScore}`);
//     }
    
// }
//playGame(5);