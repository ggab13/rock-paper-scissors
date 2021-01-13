    var playerSelection;
    var computerSelection;    
    var things = ['Rock', 'Paper', 'Scissor'];
    var playerPoints = 0;
    var computerPoints = 0;     

    var playerRock = document.getElementById("Rock");
    var playerPaper = document.getElementById("Paper");
    var playerScissor = document.getElementById("Scissor"); 

    var computerRock = document.getElementById("computerRock");
    var computerPaper = document.getElementById("computerPaper");
    var computerScissor = document.getElementById("computerScissor"); 

    var buttonPlayAgain = document.getElementById("playAgain"); 
    var gameScore = document.getElementById("gameScore");
    var gameProgress = document.getElementById("gameProgress");
    var playerDiv = document.getElementsByClassName("section-player");
    
   let text = document.querySelector(".progressScore");
   let load = document.querySelector(".progressLoad");

    let numToText = 1;

    let time = setInterval(function() {
        
        text.textContent = "Player: " + playerPoints + "Computer" + computerPoints;

        if(playerPoints || computerPoints === 5) {

            clearInterval(time);
            load.style.fillOpacity = 1;
            text.style.fill = "#fff";
            text.style.fontSize = "30px";
            
            text.textCOntent = "Uploaded";
            text.textLength = "105";
        };
    }, 200);

    gameStart();

    function removeComputerSelect () {
        computerPaper.classList.remove("imgComputerSelected");
        computerRock.classList.remove("imgComputerSelected");
        computerScissor.classList.remove("imgComputerSelected"); 
    }

    function gameStart() {
      
        buttonPlayAgain.style.display = "none";

        if((playerPoints || computerPoints ) != 5 ){   
                   
            playerPlay();
        };     

    function playerPlay(){  

        

        playerRock.onclick = function () {
            playerSelection = playerRock.id;
            computerSelection = computerPlay();  
            
            playerChoice.innerHTML = playerSelection;         
            game();            
        };

        playerPaper.onclick = function () {
            playerSelection = playerPaper.id;
            computerSelection = computerPlay();  
           
            playerChoice.innerHTML = playerSelection;          
            game();            
        };

        playerScissor.onclick = function () {
            playerSelection = playerScissor.id;
            computerSelection = computerPlay();  
            
            playerChoice.innerHTML = playerSelection;              
            game();            
        }; 
    };

    function playAgain(){        
        buttonPlayAgain.onclick = function () {

        removeComputerSelect();
        buttonPlayAgain.style.display = "none";      
        computerPoints = 0;     
        playerPoints = 0; 
        gameScore.innerHTML =  playerPoints+"-"+computerPoints;
        gameProgress.innerHTML = "Good Luck!";
        playerPaper.className="notLost";
        playerScissor.className="notLost";
        playerRock.className="notLost"; 

                   
        }           
    };                

    function computerPlay(){
        var computerChoice = document.getElementById("computerChoice"); 
        var outcome;
        outcome = things[Math.floor(Math.random()*things.length)];
        computerChoice.innerHTML = outcome;

       

        return outcome;
    }

    function singleRound(playerSelection, computerSelection){

        if(playerSelection === computerSelection){
            gameProgress.innerHTML = ("Its a tie");
            return "Its a tie";
        }

        else if(playerSelection === "Rock"){   

            if(computerSelection === "Scissor"){
                playerPoints++;
                gameProgress.innerHTML = (`${playerSelection} beats ${computerSelection}`);
                return `${playerSelection} beats ${computerSelection}`;
            } else if(computerSelection ==="Paper"){
                computerPoints++;
                gameProgress.innerHTML = (`${computerSelection} beats ${playerSelection}`);
                return `${computerSelection} beats ${playerSelection}`;
            }
            
        }

        else if(playerSelection === "Paper"){   

            if(computerSelection === "Rock"){
                playerPoints++;
                gameProgress.innerHTML = (`${playerSelection} beats ${computerSelection}`);
                return `${playerSelection} beats ${computerSelection}`;
            } else if(computerSelection === "Scissor"){
                computerPoints++;
                gameProgress.innerHTML = (`${computerSelection} beats ${playerSelection}`);
                return `${computerSelection} beats ${playerSelection}`;
            }
            
        }

        else if(playerSelection === "Scissor")
        {   
            if(computerSelection === "Paper"){
                playerPoints++;
                gameProgress.innerHTML = (`${playerSelection} beats ${computerSelection}`);
                return `${playerSelection} beats ${computerSelection}`;
            } else if(computerSelection === "Rock"){
                computerPoints++;
                gameProgress.innerHTML = (`${computerSelection} beats ${playerSelection}`);
                return `${computerSelection} beats ${playerSelection}`;
            }
            
        }
    }    

    function game(){                 
                   
            removeComputerSelect();
            singleRound(playerSelection, computerSelection);  
            gameScore.innerHTML =  playerPoints+"-"+computerPoints;

            if (computerSelection == "Rock"){
                computerRock.classList.add("imgComputerSelected");
            } else if (computerSelection == "Scissor") {
                computerScissor.classList.add("imgComputerSelected");
            } else if ( computerSelection == "Paper"){
                computerPaper.classList.add("imgComputerSelected");
            }
           
            if (playerPoints === 5){         
            gameProgress.innerHTML = "Player Won!";          
            gameProgress.innerHTML = "You are the best!";
            buttonPlayAgain.style.display = "block";
            playerPaper.className="lost";
            playerScissor.className="lost";
            playerRock.className="lost";
            playAgain();
            load.style.strokeDashoffset="100";
            
        
            } else if (computerPoints === 5){                           
                gameProgress.innerHTML = "Looser!";
                buttonPlayAgain.style.display = "block";     
                playerPaper.className="lost";
                playerScissor.className="lost";
                playerRock.className="lost"; 
                playAgain();               
                load.style.strokeDashoffset="100";
                
            }
            }          
        }