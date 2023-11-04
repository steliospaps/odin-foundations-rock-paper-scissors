function getComputerChoice(){
  const choices=[ 'Rock', 'Paper','Scissors'];
  const index=Math.floor(Math.random()*choices.length);
  return choices[index];
}


function playRound( playerSelection, computerSelection){
  console.log("playRound "+playerSelection+" "+computerSelection);
  const playerSelectionLc=playerSelection.toLowerCase();
  const computerSelectionLc=computerSelection.toLowerCase();
  if(playerSelectionLc === computerSelectionLc){
    return `Tied! ${playerSelection} ties with ${computerSelection}`;
  }
  if(playerSelectionLc === 'rock'){
    if(computerSelectionLc === 'paper'){
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }else{
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
  }
  if(playerSelectionLc === 'paper'){
    if(computerSelectionLc === 'scissors'){
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }else{
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
  }
  if(playerSelectionLc === 'scissors'){
    if(computerSelectionLc === 'rock'){
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }else{
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
  }

}

let userScore=0;
let computerScore=0;
let round=0;
function playRoundUi(userChoice){
  if(round>=5){
    return;
  }
  const historyList=document.querySelector('#hList');
  const results=document.querySelector('#result');
  const outcome = playRound(userChoice,getComputerChoice())
  
  round+=1;
  
  if(outcome.startsWith('You Win')){
    userScore+=1;
  } else if(outcome.startsWith('You Lose')){
    computerScore+=1;
  }
  const li = document.createElement('li');
  li.textContent=outcome;
  historyList.appendChild(li);
  console.log(`${outcome} You: ${userScore} Computer: ${computerScore}`);
  if(round==5){
    if(userScore>computerScore){
      results.textContent=`You Win! ${userScore}-${computerScore}`;
    }else if(userScore<computerScore){
      results.textContent=`You Lose! ${userScore}-${computerScore}`;
    }else{
      results.textContent=`You Tie! ${userScore}-${computerScore}`;
    }
  }else{
    results.textContent=`You: ${userScore} Computer: ${computerScore}`;
  }
}

document.querySelector("#rock").addEventListener('click',()=>playRoundUi('Rock'));
document.querySelector("#paper").addEventListener('click',()=>playRoundUi('Paper'));
document.querySelector("#scissors").addEventListener('click',()=>playRoundUi('Scissors'));

