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


function game(){
  let userScore=0;
  
  for(i=0;i<5;i++){
    const input = prompt("Rock,Paper or Scissors?");
    const outcome = playRound(input,getComputerChoice())
    if(outcome.startsWith('You Win')){
      userScore+=1;
    } else if(outcome.startsWith('You Lose')){
      userScore-=1;
    }
    console.log(outcome+" score: "+userScore);
  }
  if(userScore>0){
    return "You Won!";
  }else if(userScore<0){
    return "You Lost!";
  }else {
    return "You Tied!";
  }
}

console.log(game());

