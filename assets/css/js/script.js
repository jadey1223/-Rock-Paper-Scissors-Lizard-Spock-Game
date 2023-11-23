let result_ref = document.getElementById("result");
let choices_objects = {
    "rock" : {
        "rock" : "draw",
        "scissors": "win",
        "paper" : "lose",
        "lizard" : "win",
        "spoke" : "lose"
    },

    "paper" : {
        "rock" : "win",
        "scissors": "lose",
        "paper" : "draw",
        "lizard" : "lose",
        "spoke" : "win"
    },

    "scissor" : {
        "rock" : "lose",
        "scissors": "draw",
        "paper" : "win",
        "lizard" : "win",
        "spoke" : "lose"
    },

    "lizard" : {
        "rock" : "lose",
        "scissors": "lose",
        "paper" : "win",
        "lizard" : "draw",
        "spoke" : "win"
    },

    "spoke" : {
        "rock" : "win",
        "scissors": "win",
        "paper" : "lose",
        "lizard" : "lose",
        "spoke" : "draw"
    }
}

function checker(input){
    let choices = ["rock","paper","scissors","lizard","spoke"]
    let num = Math.floor(Math.random()*4);

    document.getElementById("comp_choice").innerHTML = `computer choose <span>${choices[num].toUpperCase()}</span>`;

    document.getElementById("user_choice").innerHTML = `computer choose <span>${choices[num].toUpperCase()}</span>`;


}