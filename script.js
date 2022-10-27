let computerChoice;

function computerChoiceGen(min, max){
    computerChoice = Math.floor(Math.random() * (max - min) + min);
    console.log(computerChoice)
}

computerChoiceGen(1, 4);