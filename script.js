// let computerResult = 0,
//     playerResult = 0,
//     playerChoice;

// // function that returns a random choice:
// let getComputerChoice = function () {
    
//     const choices = ["rock", "paper", "scissors"];
//     let randomNumber = Math.floor(Math.random() * 3);
    
//     return choices[randomNumber];
// };

// // function determines the winner of a single round:
// function getSingleRoundResult(player, computer) {
    
//     if (player == "rock") {

//         if (computer == "rock") {
//             console.log("Tie!");
//             getSingleRoundResult(playerChoice, getComputerChoice());    
 
//         } else if (computer == "paper") {
//             console.log("Paper beats rock! You lose.");
//             computerResult++;
//             console.log(`Player Result: ${playerResult}.\nComputer Result: ${computerResult}.`);
           
//         } else if (computer == "scissors") {
//             console.log("Rock beats scissors! You win.");
//             playerResult++;
//             console.log(`Player Result: ${playerResult}.\nComputer Result: ${computerResult}.`);
//         }

//     } else if (player == "paper") {

//         if (computer == "paper") {
//             console.log("Tie!");
//             getSingleRoundResult(playerChoice, getComputerChoice());      
 
//         } else if (computer == "scissors") {
//             console.log("Scissors beat paper! You lose.");
//             computerResult++;
//             console.log(`Player Result: ${playerResult}.\nComputer Result: ${computerResult}.`);

//         } else if (computer == "rock") {
//             console.log("Paper beats rock! You win.");
//             playerResult++;
//             console.log(`Player Result: ${playerResult}.\nComputer Result: ${computerResult}.`);

//         }

//     } else if (player == "scissors") {

//         if (computer == "scissors") {
//             console.log("Tie!");
//             getSingleRoundResult(playerChoice, getComputerChoice());        
 
//         } else if (computer == "rock") {
//             console.log("Rock beats scissors! You lose.");
//             computerResult++;
//             console.log(`Player Result: ${playerResult}.\nComputer Result: ${computerResult}.`);

//         } else if (computer == "paper") {
//             console.log("Scissors beat paper! You win.");
//             playerResult++;
//             console.log(`Player Result: ${playerResult}.\nComputer Result: ${computerResult}.`);

//         }

//     } else {
//         console.log("Please choose from the specified choices. The game begins again now!");
//         wholeGame();
//     }
// }

// function wholeGame() {

//     let roundCounter;

//     for (roundCounter = 0; roundCounter < 5; roundCounter++) {

//         // variable that stores the player choice input:
//         playerChoice = prompt("Choose (Rock - Paper - Scissors)").trim().toLowerCase();

//         getSingleRoundResult(playerChoice, getComputerChoice());
//     }

//     if (computerResult > playerResult) {
//         console.log(`Sorry. You lost.\nThe computer got ${computerResult} and you only got ${playerResult}`);
    
//     } else if (playerResult > computerResult) {
//         console.log(`Hurray! You won.\nYou beat the computer by ${playerResult - computerResult}`)
//     }
// }

// wholeGame();

const choices = ['rock', 'paper', 'scissors'];
let humanScore = 0,
    computerScore = 0,
    round = 0;

let getComputerChoice = () => {

    let randomChoice = Math.floor(Math.random() * 3);

    return choices[randomChoice];
}
// console.log(getComputerChoice());

let getHumanChoice = () => {

    let choice = prompt("Please choose:\nrock - paper - scissors")
                .toLowerCase() 
                .trim();

    return choices.includes(choice) ? choice : undefined;
}
// console.log(getHumanChoice());

const playRound = (humanChoice, computerChoice) => {
   
    if (humanChoice) {
        if (humanChoice === computerChoice) {
            console.log('It\'s a tie!');
        } else {
            switch (computerChoice) {
                case 'rock':
                    if (humanChoice === 'paper') {
                        humanScore++;
                        console.log('You won this round!');
                    } else {
                        computerScore++;
                        console.log('You lost this round :(');
                    }
                    break;
                case 'paper':
                    if (humanChoice === 'scissors') {
                        humanScore++;
                        console.log('You won this round!');
                    } else {
                        computerScore++;
                        console.log('You lost this round :(');
                    }
                    break;
                case 'scissors':
                    if (humanChoice === 'rock') {
                        humanScore++;
                        console.log('You won this round!');
                    } else {
                        computerScore++;
                        console.log('You lost this round :(');
                    }
                    break;
            }
        }
        round++;
        console.log(`
            Your score is ${humanScore}.
            The computer is ${computerScore}.
            `);
    }
}

const displayFinalScore = () => {

    if (humanScore < computerScore) {
        console.log('Computer won!');
    } else if (humanScore > computerScore) {
        console.log('You won!')
    } else {
        console.log(`
                It\'s a tie!
                We should settle this now!
            `);
        playRound(getHumanChoice(), getComputerChoice());
        displayFinalScore();
    }
}

const playGame = () => {
       
    while (round < 5) {
        // I increment this variable in the playRound function to be able to increment it only when the input is valid, for now.
        playRound(getHumanChoice(), getComputerChoice());
    }
    
    displayFinalScore();
}

playGame();