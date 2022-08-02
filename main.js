
        let playerScore = 0
        let computerScore = 0

// Made the images of rock, paper, and scissors initiate a round when clicked upon

        const rock = document.querySelector('#rock')
        rock.addEventListener('click', (e) => {
        playRound(e.target.getAttribute('id')) 
        })

        const paper = document.querySelector('#paper')
        paper.addEventListener('click', (e) => {
        playRound(e.target.getAttribute('id'))
        })

        const scissors = document.querySelector('#scissors')
        scissors.addEventListener('click', (e) => {
        playRound(e.target.getAttribute('id'))
        })

        const compSelection = document.querySelector('.computerSelection')
        const results = document.querySelector('.results')
        const rpsGame = document.querySelector('.rpsGame')
        const score = document.querySelector('.score')
        const winOrLose = document.querySelector('.winOrLose')
        const playAgain = document.querySelector('.playAgain')
        const compChoice = document.querySelector('.compChoice')
        const playerChoice = document.querySelector('.playerChoice')
        const compRock = document.querySelector('.compRock')
        const compPaper = document.querySelector('.compPaper')
        const compScissors = document.querySelector('.compScissors')
    
//  Used to remove functionality from the rock, paper, and scissors images upon winning the game 
//  Prevent players from clicking and playing additional rounds

        function remove() {
            rock.removeAttribute('id')
            paper.removeAttribute('id')
            scissors.removeAttribute('id')
            compRock.classList.remove("active")
            compPaper.classList.remove("active")
            compScissors.classList.remove("active")
        }

// Resets all variables as if refreshing the page

        function restartGame() {
            score.textContent = ('Score: 0 to 0')
            playerChoice.textContent =('Player Choice:')
            compChoice.textContent =('Computer Choice:')
            results.textContent =('')
            winOrLose.textContent =('')
            playAgain.textContent =('')
            rock.setAttribute('id', 'rock')
            paper.setAttribute('id', 'paper')
            scissors.setAttribute('id', 'scissors')
             playerScore = 0
             computerScore = 0
        }


// Once player or computer reaches score of 5, website dislpays verdict and offers to play again 
// If player presses yes, score resets. If player presses no, web application force closes

        function checkScore() {
            if (playerScore === 5) {
                remove()
                winOrLose.textContent = ('Congratulations! You Won!')
                playAgain.textContent =('Do you want to play again?')
                const yes = document.createElement('button')
                const no = document.createElement('button')
                yes.textContent = 'Yes'
                yes.style.width = '100px'
                no.textContent = 'No'
                no.style.width = '100px'
                playAgain.appendChild(yes)
                playAgain.appendChild(no)
                yes.addEventListener('click',(e) => {
                    restartGame()
                })
                no.addEventListener('click',(e) => {
                    window.close()
                })
            } else if (computerScore === 5) {
                remove()
                winOrLose.textContent = ('You lost to a computer! How does that even happen?')
                playAgain.textContent =('Do you want to play again?')
                const yes = document.createElement('button')
                const no = document.createElement('button')
                yes.textContent = 'Yes'
                yes.style.width = '100px'
                no.textContent = 'No'
                no.style.width = '100px'
                playAgain.appendChild(yes)
                playAgain.appendChild(no)
                yes.addEventListener('click',(e) => {
                    restartGame()
                })
                no.addEventListener('click',(e) => {
                    window.close()
                })
            }
        }
    
//Randomizes computer choice and briefly displays image transformation on screen

        function computerPlay() {
            if (Math.floor(Math.random() * 3) === 0) {
                compRock.classList.add("active")
                setTimeout(() => {
                    compRock.classList.remove("active");
                },300);
                return("Rock")
            } else if (Math.floor(Math.random() * 3) === 1) {
                compPaper.classList.add("active")
                setTimeout(() => {
                    compPaper.classList.remove("active");
                },300);
                return("Paper")
            } else {
                compScissors.classList.add("active")
                setTimeout(() => {
                    compScissors.classList.remove("active");
                },300);
                return("Scissors")
            }
        } 

// Plays a single round and displays results of round
// Score is evaluated at the end of each round

        function playRound(playerSelection, computerSelection) {
            let e = playerSelection;
            e = document.querySelector(`id`)
            computerSelection = computerPlay() 

            switch (true) {
                case (playerSelection === "rock" && computerSelection === "Scissors"):
                case (playerSelection === "paper" && computerSelection === "Rock"):
                case (playerSelection === "scissors" && computerSelection === "Paper"):
                    playerChoice.classList.add("yellow")
                    setTimeout(() => {
                    playerChoice.classList.remove("yellow");
                    },100);
                    playerChoice.textContent = ("Player Choice: " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1))
                    compChoice.classList.add("yellow")
                    setTimeout(() => {
                        compChoice.classList.remove("yellow");
                    },100);
                    compChoice.textContent = ("Computer Choice: " + computerSelection)
                    results.classList.remove("red")
                    results.classList.remove("grey")
                    results.classList.add("green")
                    results.textContent = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + (" beats ") + computerSelection + (". You Win this round!" )
                    score.textContent = ("Score: " + ++playerScore + " to " + computerScore)
                    break; 
                case (playerSelection === "rock" && computerSelection === "Rock"):
                case (playerSelection === "paper" && computerSelection === "Paper"):
                case (playerSelection === "scissors" && computerSelection === "Scissors"):
                    playerChoice.classList.add("yellow")
                    setTimeout(() => {
                        playerChoice.classList.remove("yellow");
                    },100);
                    playerChoice.textContent = ("Player Choice: " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1))
                    compChoice.classList.add("yellow")
                    setTimeout(() => {
                        compChoice.classList.remove("yellow");
                    },100);
                    compChoice.textContent = ("Computer Choice: " + computerSelection) 
                    results.classList.remove("red")
                    results.classList.remove("green")
                    results.classList.add("grey")
                    results.textContent = (" You have both picked the same choice. It is a draw!")
                    score.textContent = ("Score: " + playerScore + " to " + computerScore)
                    break;
                case (playerSelection === "rock" && computerSelection === "Paper"):
                case (playerSelection === "paper" && computerSelection === "Scissors"):
                case (playerSelection === "scissors" && computerSelection === "Rock"):
                    playerChoice.classList.add("yellow")
                    setTimeout(() => {
                        playerChoice.classList.remove("yellow");
                    },100);
                    playerChoice.textContent = ("Player Choice: " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1))
                    compChoice.classList.add("yellow")
                    setTimeout(() => {
                        compChoice.classList.remove("yellow");
                    },100);
                    compChoice.textContent = ("Computer Choice: " + computerSelection)
                    results.classList.remove("green")
                    results.classList.remove("grey") 
                    results.classList.add("red")
                    results.textContent = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + (" loses to ") + computerSelection + (". You lost this round!") 
                    score.textContent = ("Score: " + playerScore + " to " + ++computerScore)
                    break;
            }
            
            checkScore()
        }       
