console.log("Hello World");

function getComputerChoice(){
    ranChoice = Math.floor(Math.random() * 3) + 1;

    switch(ranChoice) {
        case 1:
            return "Rock";
        break;
        case 2:
            return "Paper";
        break;
        case 3:
            return "Scissors";
        break;
    }
    //return ranChoice;
}

console.groupCollapsed("RPS");
for(let i = 0; i < 100; i++){
console.log(getComputerChoice());
}
console.groupEnd("RPS");
