let computerChoice;
let computerChoiceString;
let userChoice;
let button = document.getElementById('submit');

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

function choice() {
    userChoice = document.getElementById('userChoice').value;
    userChoice = userChoice.toUpperCase();
    console.log(userChoice);
};

button.addEventListener('click', choice);
button.addEventListener('click', computerChoiceGen(1, 4));