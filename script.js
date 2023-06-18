// variable that stores the player choice input:
let playerChoice = prompt("Choose (Rock - Paper - Scissors)");

// game counter:
let computerResult = 0,
    playerResult = 0;

// function that returns a random choice:
let getComputerChoice = function () {
    
    const choices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    
    return choices[randomNumber];
};

// function determines the winner of a single round:
function getSingleRoundResult(player, computer) {
    
    if (player == "rock") {

        if (computer == "rock") {
            console.log("Tie!"); // Change it later to recursion!        
 
        } else if (computer == "paper") {
            console.log("Paper beats rock! You lose.");
            computerResult++;

        } else if (computer == "scissors") {
            console.log("Rock beats scissors! You win.");
            playerResult++;
        }

    } else if (player == "paper") {

        if (computer == "paper") {
            console.log("Tie!"); // Change it later to recursion!        
 
        } else if (computer == "scissors") {
            console.log("Scissors beat paper! You lose.");
            computerResult++;

        } else if (computer == "rock") {
            console.log("Paper beats rock! You win.");
            playerResult++;

        }

    } else if (player == "scissors") {

        if (computer == "scissors") {
            console.log("Tie!"); // Change it later to recursion!        
 
        } else if (computer == "rock") {
            console.log("Rock beats scissors! You lose.");
            computerResult++;

        } else if (computer == "paper") {
            console.log("Scissors beat paper! You win.");
            playerResult++;

        }

    } else {
        console.log("Please choose from the specified choices."); // change it later to recursion!!!!
    }

    console.log(`Player Result: ${playerResult}`);
    console.log(`Computer Result: ${computerResult}`);
}

getSingleRoundResult(playerChoice, getComputerChoice());