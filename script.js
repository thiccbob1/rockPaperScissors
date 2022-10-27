let computerChoice;
let computerChoiceString;
let userChoice;
let userChoiceString;
let outcome;
let button = document.getElementById('submit');


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
        console.log("User typing error pls make code for this");
    }
    //console.log(userChoice);
    //console.log(userChoiceString);
};

//tests user choice against computer's and returns a
//message and updates the outcome
function shoot(userChoice, computerChoice){
    if (computerChoice == 1){ //rock
        if (userChoice == 1){
            outcome = 1;
            console.log("Tie!")
        }else if (userChoice == 2){
            outcome = 2;
            console.log("You win!")
        }else if (userChoice == 3){
            outcome = 3;
            console.log("You lose!")
        }
    } else if (computerChoice == 2){ //paper
        if (userChoice == 1){
            outcome = 3;
            console.log("You lose!")
        }else if (userChoice == 2){
            outcome = 1;
            console.log("Tie!")
        }else if (userChoice == 3){
            outcome = 2;
            console.log("You win!")
        }
    }else if (computerChoice == 3){ //scissors
        if (userChoice == 1){
            outcome = 2;
            console.log("You win!")
        }else if (userChoice == 2){
            outcome = 3;
            console.log("You lose!")
        }else if (userChoice == 3){
            outcome = 1;
            console.log("Tie!")
        }
    }
}

button.addEventListener('click', () => {
    choice();
    computerChoiceGen(1, 4)
    shoot(userChoice, computerChoice);
});
