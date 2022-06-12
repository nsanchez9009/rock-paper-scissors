let win = 0;
let lose = 0;
const cMove = document.querySelector(".cMove");
const youScore = document.querySelector("#you");
const computerScore = document.querySelector("#computer");

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

function computerPlay(){
    const computerOptions = ["rock", "paper", "scissors"];

    let res = Math.floor(Math.random() * computerOptions.length);

    return computerOptions[res];
}

function scoreCheck(){
    if (win == 5){
        alert("You win! Press ok to play again.");
        win = 0;
        lose = 0;
        displayRoundRes("...");
    }
    else if (lose == 5){
        alert("You lose. Press ok to play again.");
        win = 0;
        lose = 0;
        displayRoundRes("...");
    }
}

function displayRoundRes(computerS){

    cMove.textContent = computerS;
    computerScore.textContent = `Computer: ${lose}`;
    youScore.textContent = `You: ${win}`;
}

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

function game(){
    const moveButton = document.querySelectorAll(".move");
    const buttonImg = document.querySelectorAll("img");

    buttonImg.forEach(function(img){
        let move = img.getAttribute("alt");
        img.addEventListener("mouseover", function(){this.src = `./media/${move}.gif`});
        img.addEventListener("mouseleave", function(){this.src = "./media/still.png"});
    });

    moveButton.forEach(div => div.addEventListener("click", async function(){
        const playerMove = div.dataset.move;
        const computerMove = computerPlay();

        round(playerMove, computerMove);
        displayRoundRes(computerMove);
        await sleep(1000);
        scoreCheck();

    }));
}

game();

