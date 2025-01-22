class game{
constructor(){

    this.humanScore = 0;
    this.computerScore = 0;
    this.choice = ['rock', 'paper','scissor'];
    this.addEventListeners();
}

addEventListeners() {
    document.querySelector("#Rock").addEventListener('click', () => {
        this.playRound('rock', this.getComputerChoice()); 
    })
        
    document.querySelector("#Paper").addEventListener('click', () => {
        this.playRound('paper', this.getComputerChoice());
    }); 
    document.querySelector("#Scissor").addEventListener('click', () => {
        this.playRound('scissor', this.getComputerChoice());
    }); 
  }

    getComputerChoice() {
    return this.choice[Math.floor(Math.random()*this.choice.length)];
    }

    displayMessage(message){
    document.getElementById("results").textContent = message;
    }

   resultMessage(){ 
    return document.getElementById("result2").textContent = `Current Score - Human: ${this.humanScore}, Computer: ${this.computerScore}`;
    }

   finalresult(finres){
       const rem = document.getElementById("winner");
    rem.textContent =finres;
//Timeout for message
    setTimeout(() => {
    rem.style.display = 'none';},800);
}; 

    resetgame(){
    this.humanScore = 0;
    this.computerScore = 0;
    }

playRound(humanChoice,computerChoice){

if(humanChoice == 'rock' && computerChoice == 'scissor'){ 
this.displayMessage("You Win! Rock beats Scissor."); 
this.humanScore++; 
} 
else if(humanChoice == 'scissor' && computerChoice == 'paper'){
this.displayMessage("You Win! Scissor beats Paper.");
this.humanScore++;
}
else if(humanChoice == 'paper' && computerChoice == 'rock'){
this.displayMessage("You Win! Paper beats Rock.");
this.humanScore++;
}
else if(humanChoice == 'paper' && computerChoice == 'scissor'){
this.displayMessage("You Lose! Scissor beats Paper.");
this.computerScore++;
}
else if(humanChoice == 'scissor' && computerChoice == 'rock'){
this.displayMessage("You Lose! Rock beats Scissor.");
this.computerScore++;
}
else if(humanChoice == 'rock' && computerChoice == 'paper'){
this.displayMessage("You Lose! paper beats Rock.");
this.computerScore++;
}
else{
     this.displayMessage("Play again")
    };


if (this.humanScore + this.computerScore === 5){
       if(this.computerScore>this.humanScore){
           this.finalresult("Winner is computer : " + this.computerScore);
          }
else if(this.computerScore<this.humanScore){ 
this.finalresult("Winner is Human : " + this.humanScore);
}
else if(this.computerScore===this.humanScore){
this.finalresult("Tie-Play again"); 
}
this.resetgame();
}

this.resultMessage (`Current Score - Human: ${this.humanScore}, Computer: ${this.computerScore}`);

}

}
new game();


