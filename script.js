let computerChoice;
let computerChoiceString;
let userChoice;
let userChoiceString;
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
    console.log(computerChoiceString);
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
    console.log(userChoice);
    console.log(userChoiceString);
};

button.addEventListener('click', () => {
    choice();
    computerChoiceGen(1, 4);
});
