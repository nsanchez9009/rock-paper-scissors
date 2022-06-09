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
                break;
            case "paper":
                lose++;
                console.log(`You played: ${playerS}\nComputer played: ${computerS}\nYou lose! Paper beats rock.`);
                break;
            case "scissors":
                win++;
                console.log(`You played: ${playerS}\nComputer played: ${computerS}\nYou win! Rock beats scissors.`);
                break;
        }
    }

    else if (playerS == "paper"){
        switch (computerS){
            case "paper":
                console.log(`You played: ${playerS}\nComputer played: ${computerS}\nTie! You both played paper.`);
                break;
            case "rock":
                win++;
                console.log(`You played: ${playerS}\nComputer played: ${computerS}\nYou win! Paper beats rock.`);
                break;
            case "scissors":
                lose++;
                console.log(`You played: ${playerS}\nComputer played: ${computerS}\nYou lose! Scissors beat paper.`);
                break;
        }
    }

    else if (playerS == "scissors"){
        switch (computerS){
            case "scissors":
                console.log(`You played: ${playerS}\nComputer played: ${computerS}\nTie! You both played scissors.`);
                break;
            case "paper":
                win++;
                console.log(`You played: ${playerS}\nComputer played: ${computerS}\nYou win! Scissors beat paper.`);
                break;
            case "rock":
                lose++;
                console.log(`You played: ${playerS}\nComputer played: ${computerS}\nYou lose! Rock beats scissors.`);
                break;
        }
    }

    displayRoundRes(playerS, computerS);

    if (win >= 5){
        alert("You win!");
    }
    else if (lose >= 5){
        alert("You lose.");
    }
}


function displayRoundRes(playerS, computerS){
    const cMove = document.querySelector(".cMove");

    

}


function game(){
    const moveButton = document.querySelectorAll(".move");

    moveButton.forEach(div => div.addEventListener("click", () => {
        const playerMove = div.dataset.move;
        round(playerMove,computerPlay());
    }));
}




