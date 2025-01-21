const rck = document.querySelector("#Rock");
const papr = document.querySelector("#Paper");
const scissr = document.querySelector("#Scissor");

let humanScore=0;
let computerScore=0;

rck.addEventListener('click', () => {
playRound('rock', getComputerChoice());
});

papr.addEventListener('click', () => {
playRound('paper', getComputerChoice());
});
scissr.addEventListener('click', () => {
playRound('scissor', getComputerChoice());
});

//function for computer to choose Random things
function getComputerChoice()
{
let things = ['rock', 'paper', 'scissor'];
let computerChoice = things[Math.floor(Math.random()*things.length)];
// alert('The computer chose: ' + computerChoice);
return computerChoice;
}

function displayMessage(message)
{ 
const res = document.getElementById("results");
res.textContent= message;
}

function resultMessage(messager)
{ 
const resmess = document.getElementById("result2");
resmess.textContent= messager;
}

function finalresult(finres)
{
const rem = document.getElementById("winner");
rem.textContent =finres;

setTimeout(() => {
rem.style.display = 'none';},800);
}; 

function resetgame()
{
humanScore = 0;
computerScore = 0;
}
function playRound(humanChoice,computerChoice)
{
if(humanChoice == 'rock' && computerChoice == 'scissor') 
{ 
displayMessage("You Win! Rock beats Scissor."); 
//console.log("You Win! Rock beats Scissor.")
humanScore++; 
} 
else if(humanChoice == 'scissor' && computerChoice == 'paper'){
displayMessage("You Win! Scissor beats Paper.");
// console.log("You Win! Scissor beats Paper.")
humanScore++;
}
else if(humanChoice == 'paper' && computerChoice == 'rock'){
displayMessage("You Win! Paper beats Rock.");
//console.log("You Win! Paper beats Rock.")
humanScore++;
}
else if(humanChoice == 'paper' && computerChoice == 'scissor'){
displayMessage("You Lose! Scissor beats Paper.");
//console.log("You Lose! Scissor beats Paper.")
computerScore++;
}
else if(humanChoice == 'scissor' && computerChoice == 'rock'){
displayMessage("You Lose! Rock beats Scissor.");
//console.log("You Lose! Rock beats Scissor.")
computerScore++;
}
else if(humanChoice == 'rock' && computerChoice == 'paper'){

//console.log("You Lose! paper beats Rock.")
displayMessage("You Lose! paper beats Rock.");
computerScore++;
}
else{ displayMessage("Play again")};
// console.log("Play again")}

if (humanScore + computerScore === 5)
{
if(computerScore>humanScore)
{
//console.log
finalresult("Winner is computer : " + computerScore );
}
else if(computerScore<humanScore)
{ //console.log
finalresult("Winner is Human : " + humanScore);
}
else if(computerScore===humanScore)
{
//console.log
finalresult("Tie-Play again"); 
}

resetgame();
}
resultMessage (`Current Score - Human: ${humanScore}, Computer: ${computerScore}`);

}