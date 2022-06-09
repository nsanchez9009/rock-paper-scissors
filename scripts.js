function computerPlay(){
    const computerOptions = ["rock", "paper", "scissors"];

    let res = Math.floor(Math.random() * computerOptions.length);

    return computerOptions[res];
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let win = 0;
let lose = 0;
const cMove = document.querySelector(".cMove");
const youScore = document.querySelector("#you");
const computerScore = document.querySelector("#computer");

function round(playerS, computerS){

    if (playerS == "rock"){
        switch (computerS){
            case "rock":
                break;
            case "paper":
                lose++;
                break;
            case "scissors":
                win++;
                break;
        }
    }

    else if (playerS == "paper"){
        switch (computerS){
            case "paper":
                break;
            case "rock":
                win++;
                break;
            case "scissors":
                lose++;
                break;
        }
    }

    else if (playerS == "scissors"){
        switch (computerS){
            case "scissors":
                break;
            case "paper":
                win++;
                break;
            case "rock":
                lose++;
                break;
        }
    }
}


function displayRoundRes(playerS, computerS){

    console.log("hello");
    cMove.classList.add = "textRed";
    cMove.textContent = computerS;

}


function game(){
    const moveButton = document.querySelectorAll(".move");

    moveButton.forEach(div => div.addEventListener("click", () => {
        const playerMove = div.dataset.move;
        const computerMove = computerPlay();

        round(playerMove, computerMove);
        displayRoundRes(playerMove, computerMove);

        if (win >= 5){
            alert("You win!");
        }
        else if (lose >= 5){
            alert("You lose.");
        }
        win = 0;
        lose = 0;
    }));
}

game();

