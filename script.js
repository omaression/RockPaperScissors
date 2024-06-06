const choices = ['rock', 'paper', 'scissors'];
let humanScore = 0,
    computerScore = 0,
    round = 0;

let getComputerChoice = () => {

    let randomChoice = Math.floor(Math.random() * 3);

    return choices[randomChoice];
}

let getHumanChoice = () => {

    let choice = prompt("Please choose:\nrock - paper - scissors")
                .toLowerCase() 
                .trim();

    return choices.includes(choice) ? choice : undefined;
}

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