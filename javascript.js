console.log('Hello, World!');

let choices = ['Rock', 'Paper', 'Scissors'];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(choices) {
    choices = choices[Math.floor(Math.random() * choices.length)];
    return choices;
}

function playRound(humanSelection, computerSelection){
    const result = document.querySelector(".result");
    const roundResult = document.querySelector(".round_result");
    const yourScore = document.querySelector(".your_score");
    const compScore = document.querySelector(".comp_score");
    const gameResult = document.querySelector(".game_result");

    gameResult.textContent = "";

    console.log('Your choice: ' + humanSelection);
    console.log('Computer choice: ' + computerSelection);

            if(humanSelection === 'Rock' && computerSelection === 'Scissors'){
                roundResult.textContent = 'You win! Rock beats Scissors';
                result.appendChild(roundResult);
                // console.log('You win! Rock beats Scissors');
                humanScore += 1;
            }
            else if(humanSelection === 'Paper' && computerSelection === 'Rock'){
                roundResult.textContent = "You win! Paper beats Rock";
                result.appendChild(roundResult);
                // console.log('You win! Paper beats Rock');
                humanScore += 1;
            }
            else if(humanSelection === 'Scissors' && computerSelection === 'Paper'){
                roundResult.textContent = "You win! Scissors beats Paper";
                result.appendChild(roundResult);
                // console.log('You win! Scissors beats Paper');
                humanScore += 1;
            }
            else if(humanSelection === 'Rock' && computerSelection === 'Paper'){
                roundResult.textContent = "You lose! Paper beats Rock";
                result.appendChild(roundResult);
                // console.log('You lose! Paper beats Rock');
                computerScore += 1;
            }
            else if(humanSelection === 'Paper' && computerSelection === 'Scissors'){
                roundResult.textContent = "You lose! Scissors beats Paper";
                result.appendChild(roundResult);
                // console.log('You lose! Scissors beats Paper');
                computerScore += 1;
            }
            else if(humanSelection === 'Scissors' && computerSelection === 'Rock'){
                roundResult.textContent = "You lose! Rock beats Scissors";
                result.appendChild(roundResult);
                // console.log('You lose! Rock beats Scissors');
                computerScore += 1;
            }
            else{
                roundResult.textContent = "It's a tie!";
                result.appendChild(roundResult);
                // console.log("It's a tie!");
            }
            
            yourScore.textContent = "Your score: " + humanScore;
            result.appendChild(yourScore);

            compScore.textContent = "Computer score: " + computerScore;
            result.appendChild(compScore);

            console.log('Your score: ' + humanScore)
            console.log('Computer score: ' + computerScore)

    if(humanScore >= 5){
        gameResult.textContent = "You won! Congratulations";
        result.appendChild(gameResult);
        // console.log('You won! Congratulations')
        humanScore = 0;
        computerScore = 0;
    }
    else if(computerScore >= 5){
        gameResult.textContent = "You lost! Try again";
        result.appendChild(gameResult);
        // console.log('You lost! Try again')
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










