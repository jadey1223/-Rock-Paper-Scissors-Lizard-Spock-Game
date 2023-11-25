let [computer_score,user_score]=[0,0];
let result_ref = document.getElementById("result");
let choices_object = {
    "rock" : {
        "rock" : "draw",
        "scissor": "win",
        "paper" : "lose",
        "lizard" : "win",
        "spoke" : "lose"
    },

    "paper" : {
        "rock" : "win",
        "scissor": "lose",
        "paper" : "draw",
        "lizard" : "lose",
        "spoke" : "win"
    },

    "scissor" : {
        "rock" : "lose",
        "scissor": "draw",
        "paper" : "win",
        "lizard" : "win",
        "spoke" : "lose"
    },

    "lizard" : {
        "rock" : "lose",
        "scissor": "lose",
        "paper" : "win",
        "lizard" : "draw",
        "spoke" : "win"
    },

    "spoke" : {
        "rock" : "win",
        "scissor": "win",
        "paper" : "lose",
        "lizard" : "lose",
        "spoke" : "draw"
    }
}

function checker(input){
    let choices = ["rock","paper","scissor","lizard","spoke"]
    let num = Math.floor(Math.random()*5);

    document.getElementById("comp_choice").innerHTML = `Computer choose <span>${choices[num].toUpperCase()}</span>`;

    document.getElementById("user_choice").innerHTML = `Player choose <span>${input.toUpperCase()}</span>`;

    let computer_choice = choices[num];

    switch(choices_object[input][computer_choice]) {
        case "win" :
            result_ref.style.cssText = "background-color: #00cc00;";
            result_ref.innerHTML = "YOU WIN";
            user_score++;
            break;
        case "lose" :
            result_ref.style.cssText = "background-color: red;"
            result_ref.innerHTML = "YOU LOSE";
            computer_score++;
            break;
        default:
            result_ref.style.cssText = "background-color: #ffff99;"
            result_ref.innerHTML = "DRAW";
            break;
    }

    document.getElementById("computer_score").innerHTML = computer_score;
    document.getElementById("user_score").innerHTML = user_score;
}