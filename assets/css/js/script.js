let yourScore = 0;
let computer
let computerScore = 0;

let choices = ["rock","paper","scissors","lizard","spoke"];

function loadGame() {
    for (let i = 0; i < 5; i++) {
        // <img id="rock" src="rock.png">
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
    }
}

loadGame();
