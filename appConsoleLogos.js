    
    
    //var playerSelection = "Paper";            
    //var computerSelection = computerPlay();
    //var computerSelection1 = computerPlay();
    //console.log(singleRound(playerSelection, computerSelection));
    // console.log(computerSelection);
    //console.log(computerSelection1);
    
    var computerSelections = [];
    var playerSelections = [];
    var things = ['Rock', 'Paper', 'Scissor'];
    var playerPoints = 0;
    var computerPoints = 0;      

    game(); 
    
    function computerPlay(){
        var outcome;
        outcome = things[Math.floor(Math.random()*things.length)];
        return outcome;
    }

    function singleRound(playerSelection, computerSelection){

        if(playerSelection.toUpperCase() === computerSelection.toUpperCase()){
            console.log("Its a tie");
            return "Its a tie";
        }
        else if(playerSelection === "Rock")
        {   
            if(computerSelection === "Scissor"){
                playerPoints++;
                console.log(`${playerSelection} beats ${computerSelection}`);
                return `${playerSelection} beats ${computerSelection}`;
            } else if(computerSelection ==="Paper") {
                computerPoints++;
                console.log(`${computerSelection} beats ${playerSelection}`);
                return `${computerSelection} beats ${playerSelection}`;
            }
            
        }

        else if(playerSelection === "Paper")
        {   
            if(computerSelection === "Rock"){
                playerPoints++;
                console.log(`${playerSelection} beats ${computerSelection}`);
                return `${playerSelection} beats ${computerSelection}`;
            } else if(computerSelection === "Scissor") {
                computerPoints++;
                console.log(`${computerSelection} beats ${playerSelection}`);
                return `${computerSelection} beats ${playerSelection}`;
            }
            
        }

        else if(playerSelection === "Scissor")
        {   
            if(computerSelection === "Paper"){
                playerPoints++;
                console.log(`${playerSelection} beats ${computerSelection}`);
                return `${playerSelection} beats ${computerSelection}`;
            } else if(computerSelection === "Rock") {
                computerPoints++;
                console.log(`${computerSelection} beats ${playerSelection}`);
                return `${computerSelection} beats ${playerSelection}`;
            }
            
        }
    }  
    

    function game(){                   

        while((playerPoints || computerPoints) != 5 ) {        

           // console.log ("Player: " +playerPoints);
           // console.log ("Computer: " + computerPoints);          

            // Computer randomly choose options
            var computerSelection = computerPlay();
            // Player  choose options with prompt
            //var playerSelection = prompt("Enter your choice");
            // Player  choose options with image
            var playerSelection = 0;
            // Choice added to computerSelection array
            computerSelections.push(computerSelection);
            // Choice added to playerSelection array
            playerSelections.push(playerSelection);
            // Play a match
            singleRound(playerSelection, computerSelection);  

            console.log("Player Choice: "+ playerSelection + " - Player Points: " + playerPoints + "\n" +
            "Computer Choice: "+ computerSelection + " - Computer Points: " + computerPoints + "\n"+
            "--------------------------------------------------------------");

                if (playerPoints === 5) {
                console.log("Player Won!");
                }  else if (computerPoints === 5) {        
                    console.log("Computer Won!");
                }
            }  

        
    }        