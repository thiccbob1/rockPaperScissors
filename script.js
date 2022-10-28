let computerChoice;
let computerChoiceString;
let userChoice;
let score = 0;
let roundsPlayed = 0;
let resetButton = document.getElementById('reset');
let outputBox = document.getElementById('outputBox');
let scoreBox = document.getElementById('scoreBox');
let rockButton = document.getElementById('rock');
let paperButton = document.getElementById('paper');
let scissorsButton = document.getElementById('scissors');
let roundCounter = document.getElementById('roundCounter')


//Generates a number and string for the computer's choice,
//then logs it to console
function computerChoiceGen(min, max){
    computerChoice = Math.floor(Math.random() * (max - min) + min);
    switch (computerChoice){
        case 1: 
        computerChoiceString = ("Rock");
        break;

        case 2: 
        computerChoiceString = ("Paper");
        break;

        case 3: 
        computerChoiceString = ("Scissors");
        break;

        default: 
        console.log("Error");
    }
    //console.log(computerChoiceString);
};

//tests user choice against computer's and returns a
//message and updates the score
function shoot(userChoice, computerChoice){
    if (computerChoice == 1){ //rock
        if (userChoice == 1){
            score += 0;
            outputBox.textContent = ("Tie!")
        }else if (userChoice == 2){
            score += 1;
            outputBox.textContent = ("You win!")
        }else if (userChoice == 3){
            score += -1;
            outputBox.textContent = ("You lose!")
        }
    } else if (computerChoice == 2){ //paper
        if (userChoice == 1){
            score += -1;
            outputBox.textContent = ("You lose!")
        }else if (userChoice == 2){
            score += 0;
            outputBox.textContent = ("Tie!")
        }else if (userChoice == 3){
            score += 1;
            outputBox.textContent = ("You win!")
        }
    }else if (computerChoice == 3){ //scissors
        if (userChoice == 1){
            score += 1;
            outputBox.textContent = ("You win!")
        }else if (userChoice == 2){
            score += -1;
            outputBox.textContent = ("You lose!")
        }else if (userChoice == 3){
            score += 0;
            outputBox.textContent = ("Tie!")
        }
    }
}

//main game function, counts score and calls other functions
function game(userChoice){
    computerChoiceGen(1, 4);
    shoot(userChoice, computerChoice);
    roundsPlayed += 1;
    roundCounter.textContent = ("Round " + roundsPlayed);
    if (roundsPlayed == 5){
        outputBox.textContent = ("Game over! Your final score is: "+ score);
    }
}


//reset function, becomes working after score reaches five
function reset() {
    if (roundsPlayed < 5){
        return;
    } else {
        roundsPlayed = 0;
        score = 0;
        outputBox.textContent = ("New game.")
        roundCounter.textContent = ("Round " + roundsPlayed);
    }
}

rockButton.addEventListener('click', () => {
    if (roundsPlayed < 5){
        game(1);
    } else {
        return
    }
})

paperButton.addEventListener('click', () => {
    if (roundsPlayed < 5){
        game(2);
    } else {
        return
    }
})

scissorsButton.addEventListener('click', () => {
    if (roundsPlayed < 5){
        game(3);
    } else {
        return
    }
})

resetButton.addEventListener('click', reset);
