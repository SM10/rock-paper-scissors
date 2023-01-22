
let totalRound = 5;
let wins = 0;
let losses = 0;
let draws = 0;
for (counter = 1; counter <= 5; counter ++)
{
    alert("Round " + counter + ". " + wins + " wins, " + losses + " losses, " + draws + " draws")
    let result = game();
    if(result.startsWith("loss")){
        losses++;
    }else if (result == "win"){
        wins++;
    }else if (result == "draw"){
        draws++;
    }
}

alert("Match results: " + wins + " wins, " + losses + " losses, " + draws + " draws")

function game(){
    let userInput = prompt("Choose rock, paper or scissors").toLowerCase()
    let computerChoice = getComputerChoice()
    let result = getRPAResult(userInput, computerChoice)
    alert("You have chosen " + userInput + ". The computer chose " + computerChoice + ". The result is a " + result)
    return result
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