console.log('Hello, World!')

function getComputerChoice(choices) {
    choices = choices[Math.floor(Math.random() * choices.length)];
    return choices;
}

function getHumanChoice(choices) {
    let humanChoice = prompt('Make your choice(Rock, Paper or Scissors)');
    humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase();
    // if(humanChoice in choices){
    return humanChoice;
    // }
    // else{
    //     throw('Неверный ввод');
    // }
}

function playGame(){

    for(let i = 0; i <= 5; i += 1){

        const humanSelection = getHumanChoice(choices);
        const computerSelection = getComputerChoice(choices);

        function playRound(humanSelection, computerSelection){
            if(humanSelection === 'Rock' && computerSelection === 'Scissors'){
                console.log('You win! Rock beats Scissors');
                humanScore += 1;
            }
            else if(humanSelection === 'Paper' && computerSelection === 'Rock'){
                console.log('You win! Paper beats Rock');
                humanScore += 1;
            }
            else if(humanSelection === 'Scissors' && computerSelection === 'Paper'){
                console.log('You win! Scissors beats Paper');
                humanScore += 1;
            }
            else if(humanSelection === 'Rock' && computerSelection === 'Paper'){
                console.log('You lose! Paper beats Rock');
                computerScore += 1;
            }
            else if(humanSelection === 'Paper' && computerSelection === 'Scissors'){
                console.log('You lose! Scissors beats Paper');
                computerScore += 1;
            }
            else if(humanSelection === 'Scissors' && computerSelection === 'Rock'){
                console.log('You lose! Rock beats Scissors');
                computerScore += 1;
            }
            else{
                console.log("It's a tie!");
            }
        }
        console.log('Your choice: ' + humanSelection);
        console.log('Computer choice: ' + computerSelection);
        playRound(humanSelection, computerSelection);
        console.log('Your score: ' + humanScore)
        console.log('Computer score: ' + computerScore)
    }
    if(humanScore > computerScore){
        console.log('You win! Congratulations')
    }
    else if(humanScore < computerScore){
        console.log('You lose! Try again')
    }
}

let choices = ['Rock', 'Paper', 'Scissors'];
let humanScore = 0;
let computerScore = 0;
playGame()






