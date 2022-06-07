function computerPlay(){
    const computerOptions = ["rock", "paper", "scissors"];

    let res = Math.floor(Math.random() * computerOptions.length);

    return computerOptions[res];
}

function round(playerS, computerS){

    playerS = playerS.toLowerCase();
    computerS = computerS.toLowerCase();

    if (playerS == "rock"){
        switch (computerS){
            case "rock":
                return (`You played: ${playerS}\nComputer played: ${computerS}\nTie! You both played rock.`);
                break;
            case "paper":
                return (`You played: ${playerS}\nComputer played: ${computerS}\nYou lose! Paper beats rock.`);
                break;
            case "scissors":
                return (`You played: ${playerS}\nComputer played: ${computerS}\nYou win! Rock beats scissors.`);
                break;
        }
    }

    else if (playerS == "paper"){
        switch (computerS){
            case "paper":
                return (`You played: ${playerS}\nComputer played: ${computerS}\nTie! You both played paper.`);
                break;
            case "rock":
                return (`You played: ${playerS}\nComputer played: ${computerS}\nYou win! Paper beats rock.`);
                break;
            case "scissors":
                return (`You played: ${playerS}\nComputer played: ${computerS}\nYou lose! Scissors beat paper.`);
                break;
        }
    }

    else if (playerS == "scissors"){
        switch (computerS){
            case "scissors":
                return (`You played: ${playerS}\nComputer played: ${computerS}\nTie! You both played scissors.`);
                break;
            case "paper":
                return (`You played: ${playerS}\nComputer played: ${computerS}\nYou win! Scissors beat paper.`);
                break;
            case "rock":
                return (`You played: ${playerS}\nComputer played: ${computerS}\nYou lose! Rock beats scissors.`);
                break;
        }
    }
}

const playerMove = "rock";
const computerMove = computerPlay();

console.log(round(playerMove, computerMove));