
//function for computer to choose Random things
function getComputerChoice()
{
    let things = ['rock', 'paper', 'scissor'];
    let computerChoice = things[Math.floor(Math.random()*things.length)];
    alert('The computer chose:' + computerChoice);
    return computerChoice;
}

//function to get human choice
function getHumanChoice()
{
    let humanchoice = prompt("Enter human choice");
    let humanChoice = humanchoice.toLowerCase();
    return humanChoice;
}


    let humanScore = 0;
    let computerScore = 0;

    function playGame()
    {
            
         function playRound(humanChoice,computerChoice)
        
        {
            if(humanChoice == 'rock' && computerChoice == 'scissor') {
            console.log("You Win! Rock beats Scissor.")
            humanScore++;  
        }
        else if(humanChoice == 'scissor' && computerChoice == 'paper'){
            console.log("You Win! Scissor beats Paper.")
            humanScore++;
        }
        else if(humanChoice == 'paper' && computerChoice == 'rock'){
            console.log("You Win! paper beats Rock.")
            humanScore++;
        }
        else if(humanChoice == 'paper' && computerChoice == 'scissor'){
            console.log("You Lose! scissor beats paper.")
            computerScore++;
        }
        else if(humanChoice == 'scissor' && computerChoice == 'rock'){
            console.log("You Lose! rock beats scissor.")
            computerScore++;
        }
        else if(humanChoice == 'rock' && computerChoice == 'paper'){
            console.log("You Lose! paper beats Rock.")
            computerScore++;
        }
        else{ console.log("Play again")}
    }

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    
}

for(i=0;i<5;i++)
{
    playGame(i);
}
  
   
    //  playGame();
    
    //  playGame();
   
    //  playGame();
    
    //  playGame();
    
    if(computerScore>humanScore)
    {
        console.log("Winner is computer : "  + computerScore );
    }
    
    else if(computerScore<humanScore)
     { console.log("Winner is Human : " + humanScore);
    
    }
    else if(computerScore===humanScore)
    {
        console.log("Tie-Play again"); 
    }




