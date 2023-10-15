function getComputerChoice(){
  const choices=[ 'Rock', 'Paper','Scissors'];
  const index=Math.floor(Math.random()*choices.length);
  return choices[index];
}


function playRound( playerSelection, computerSelection){
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

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

