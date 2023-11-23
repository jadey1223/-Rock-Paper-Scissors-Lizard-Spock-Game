function checker(input){
    let choices = ["rock","paper","scissors","lizard","spoke"]
    let num = Math.floor(Math.random()*4);

    document.getElementById("comp_choice").innerHTML = `computer choose <span>${choices[num].toUpperCase()}</span>`;

    document.getElementById("user_choice").innerHTML = `computer choose <span>${choices[num].toUpperCase()}</span>`;

    
}