console.log('Hello, World!');

let choices = ['Rock', 'Paper', 'Scissors'];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(choices) {
    choices = choices[Math.floor(Math.random() * choices.length)];
    return choices;
}

function playRound(humanSelection, computerSelection){
    console.log('Your choice: ' + humanSelection);
    console.log('Computer choice: ' + computerSelection);

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
            
            console.log('Your score: ' + humanScore)
            console.log('Computer score: ' + computerScore)

    if(humanScore >= 5){
        console.log('You won! Congratulations')
        humanScore = 0;
        computerScore = 0;
    }
    else if(computerScore >= 5){
        console.log('You lost! Try again')
        humanScore = 0;
        computerScore = 0;
    }

}

  const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const humanSelection = button.id;
            const computerSelection = getComputerChoice(choices);
            playRound(humanSelection, computerSelection);
    });
});










