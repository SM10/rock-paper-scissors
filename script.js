let wins = 0;
let losses = 0;
let draws = 0;
let userInput;
let textarea = document.querySelector('#round-results')
let matchtextarea = document.querySelector('#match-results')

function choiceSelected(event){
    console.log(event)
    userInput = event
    game()
    matchtextarea.textContent = "Current score: " + wins + " wins, " + losses + " losses, " + draws + " draws"

    if(wins == 5){
        matchtextarea.textContent = "Congratulations! You were first to reach 5 wins! " + matchtextarea.textContent
        wins = 0;
        losses = 0;
        draws = 0;
    }
    if(losses == 5){
        matchtextarea.textContent = "Too bad! The computer reached 5 wins first. " + matchtextarea.textContent
        wins = 0;
        losses = 0;
        draws = 0;
    }
}

function game(){
    let computerChoice = getComputerChoice()
    let result = getRPAResult(userInput, computerChoice)
    textarea.textContent = "You have chosen " + userInput + ". The computer chose " + computerChoice + ". The result is a " + result
    switch(result){
        case "win":
            wins++
            break;
        case "loss":
            losses++
            break;
        case "draw":
            draws++
            break;
    }
}

function getComputerChoice(){
    let choiceInt = Math.ceil(Math.random() * 3)
    switch (choiceInt){
        case 1:
            return "rock"
            break;
        case 2:
            return "paper"
            break
        default:
            return "scissors"
            break
    }
}

function getRPAResult(userInput, computerChoice){
    switch(userInput){
        case "rock":
            switch(computerChoice){
                case "rock":
                    return "draw";
                    break;
                case "paper":
                    return "loss"
                    break;
                case "scissors":
                    return "win"
                    break;
                default:
                    return "no choice"
                    break;
            }
            break;
        case "paper":
            switch(computerChoice){
                case "rock":
                    return "win";
                    break;
                case "paper":
                    return "draw"
                    break;
                case "scissors":
                    return "loss"
                    break;
                default:
                    return "no choice"
                    break;
            }
        case "scissors":
            switch(computerChoice){
                case "rock":
                    return "loss";
                    break;
                case "paper":
                    return "win"
                    break;
                case "scissors":
                    return "draw"
                    break;
                default:
                    return "no choice"
                    break;
            }
        default:
            return "loss. Input was not rock, paper or scissors."
    }
}