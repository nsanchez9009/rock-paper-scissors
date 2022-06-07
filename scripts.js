function computerPlay(){
    const computerOptions = ["rock", "paper", "scissors"];

    let res = Math.floor(Math.random() * computerOptions.length);

    return computerOptions[res];
}

let win = 0;
let lose = 0;

function round(playerS, computerS){

    if (playerS == "rock"){
        switch (computerS){
            case "rock":
                console.log(`You played: ${playerS}\nComputer played: ${computerS}\nTie! You both played rock.`);
                return;
            case "paper":
                lose++;
                console.log(`You played: ${playerS}\nComputer played: ${computerS}\nYou lose! Paper beats rock.`);
                return;
            case "scissors":
                win++;
                console.log(`You played: ${playerS}\nComputer played: ${computerS}\nYou win! Rock beats scissors.`);
                return;
        }
    }

    else if (playerS == "paper"){
        switch (computerS){
            case "paper":
                console.log(`You played: ${playerS}\nComputer played: ${computerS}\nTie! You both played paper.`);
                return;
            case "rock":
                win++;
                console.log(`You played: ${playerS}\nComputer played: ${computerS}\nYou win! Paper beats rock.`);
                return;
            case "scissors":
                lose++;
                console.log(`You played: ${playerS}\nComputer played: ${computerS}\nYou lose! Scissors beat paper.`);
                return;
        }
    }

    else if (playerS == "scissors"){
        switch (computerS){
            case "scissors":
                console.log(`You played: ${playerS}\nComputer played: ${computerS}\nTie! You both played scissors.`);
                return;
            case "paper":
                win++;
                console.log(`You played: ${playerS}\nComputer played: ${computerS}\nYou win! Scissors beat paper.`);
                return;
            case "rock":
                lose++;
                console.log(`You played: ${playerS}\nComputer played: ${computerS}\nYou lose! Rock beats scissors.`);
                return;
        }
    }
}

function game(){
    let i = 0;

    while (i < 5){
        let input = prompt(`Round: ${i+1}\nRock, Paper, or Scissors?`);
        playerMove = input.toLowerCase();

        switch(playerMove){
            case "rock":
                break;
            case "paper":
                break;
            case "scissors":
                break;
            default:
                alert("Invalid input!");
                continue;
        }
        
        round(playerMove, computerPlay());

        i++;
    }

    if (win > lose){
        console.log(`Wins: ${win}\nLosses: ${lose}\nYou win!`)
    }
    else if (win == lose) {
        console.log(`Wins: ${win}\nLosses: ${lose}\nYou tie!`)
    }
    else {
        console.log(`Wins: ${win}\nLosses: ${lose}\nYou lose!`)
    }
}

game();
