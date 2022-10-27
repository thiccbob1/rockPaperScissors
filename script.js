let computerChoice;
let computerChoiceString;
let userChoice;
let userChoiceString;
let score = 0;
let button = document.getElementById('submit');
let outputBox = document.getElementById('outputBox');
let scoreBox = document.getElementById('scoreBox');


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

//Read user's choice, then converts it to a number and upper
//case string, the logs to console
function choice() {
    userChoiceString = document.getElementById('userChoice').value;
    userChoiceString = userChoiceString.toUpperCase();
    if (userChoiceString == ("ROCK")){
        userChoice = 1;
    }else if (userChoiceString == ("PAPER")){
        userChoice = 2;
    } else if (userChoiceString == ("SCISSORS")){
        userChoice = 3;
    } else {
        outputBox.textContent = ("Your choice was mistyped.")
        return;
    }
    //console.log(userChoice);
    //console.log(userChoiceString);
};

//tests user choice against computer's and returns a
//message and updates the outcome
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
    scoreBox.textContent = (score);
}

for (let i = 0; i<= 5; i++){

}

button.addEventListener('click', () => {
    choice();
    computerChoiceGen(1, 4)
    shoot(userChoice, computerChoice);
});
