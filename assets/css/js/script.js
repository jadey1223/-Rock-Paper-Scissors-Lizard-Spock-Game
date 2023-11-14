const game = ()=> {
    let pscore = 0;
    let cscore = 0;

    //Play match
    const playMatch = () => {
        const gameArea = document.querySelectorAll(".game-area");
        const playerhand = document.querySelectorAll("player-hand")
        const computerhand = document.querySelectorAll("computer-hand")

        //Computer Options
        const computerOptions = ["rock","paper", "sccissors", "lizard", "spock"];
           
        gameArea.forEach(gameArea => {
            gameArea.addEventListener("click", function(){
                console.log(this);
            //Computer choice
             const computerNumber = Math.floor(math.random()* 5);    
            });
        });

       
        
    };
};

//Call all inner functions
playMatch();