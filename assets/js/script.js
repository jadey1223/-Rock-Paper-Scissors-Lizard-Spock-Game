let [computer_score,user_score]=[0,0];
let count = 0;
let myNumber;
myNumber = 0;
let result_ref = document.getElementById("result");
let choices_object = {
    "rock" : {
        "rock" : "draw",
        "scissor": "win",
        "paper" : "lose",
        "lizard" : "win",
        "spock" : "lose"
    },

    "paper" : {
        "rock" : "win",
        "scissor": "lose",
        "paper" : "draw",
        "lizard" : "lose",
        "spock" : "win"
    },

    "scissor" : {
        "rock" : "lose",
        "scissor": "draw",
        "paper" : "win",
        "lizard" : "win",
        "spock" : "lose"
    },

    "lizard" : {
        "rock" : "lose",
        "scissor": "lose",
        "paper" : "win",
        "lizard" : "draw",
        "spock" : "win"
    },

    "spock" : {
        "rock" : "win",
        "scissor": "win",
        "paper" : "lose",
        "lizard" : "lose",
        "spock" : "draw"
    }
}

function checker(input){
    let choices = ["rock","paper","scissor","lizard","spock"]
    let num = Math.floor(Math.random()*5);

    document.getElementById("comp_choice").innerHTML = `Computer choose <span>${choices[num].toUpperCase()}</span>`;

    document.getElementById("user_choice").innerHTML = `Player choose <span>${input.toUpperCase()}</span>`;

    let computer_choice = choices[num];

    switch(choices_object[input][computer_choice]) {
        case "win" :
            result_ref.style.cssText = "background-color: #fff; color:#00cc00";
            result_ref.innerHTML = "YOU WIN";
            user_score++;
            break;
        case "lose" :
            result_ref.style.cssText = "background-color: #fff; color:red;"
            result_ref.innerHTML = "YOU LOSE";
            computer_score++;
            break;
        default:
            result_ref.style.cssText = "background-color: #ffff99;"
            result_ref.innerHTML = "DRAW";
            break;
    }
    document.getElementById("counter").innerHTML = count++;
    document.getElementById("computer_score").innerHTML = computer_score;
    document.getElementById("user_score").innerHTML = user_score;
}

//Random image choice

let images = ["rock_img","paper_img","scissor_img","lizard_img","spock.img"]



//Modal//
let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick= function(){
    modal.style.display ="block";
}

// When the user clicks on <span> (x), close the modal
span.onclick= function(){
    modal.style.display ="none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display ="none"
    }
}

//Reset button//

let reset = 0;

document.getElementById("reset").onclick = function(){
    count = 0;
    document.getElementById("user_score").innerHTML= reset;
    document.getElementById("computer_score").innerHTML= reset;
    document.getElementById("counter").innerHTML= reset;
}



