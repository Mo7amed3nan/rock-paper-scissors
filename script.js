
let userScore = 0, computerScore = 0;
let ties = 0; let rounds = 0;

function getRandom(n){
  return Math.floor(Math.random() * n);
}

function getComputerChoice(){
  let x = getRandom(3);
  if(!x) return 'rock';
  else if(x == 1) return 'paper';
  else return 'scissors';
}

function getUserChoice(){
  let x = prompt('enter: rock or paper or scissors');
  return x.toLowerCase();
}

function playRound(userChoice, computerChoice){
  let ret;
  if(userChoice === computerChoice) {
    ret = 'it is a tie!';
    ties++;
    return ret;
  }
  let win = 0;
  if(userChoice === 'rock' && computerChoice === 'scissors'
    || userChoice === 'paper' && computerChoice === 'rock'
    || userChoice === 'scissors' && computerChoice === 'paper') win = true;

  if(win) ret = `You Win! ${userChoice} beats ${computerChoice}`;
  else ret = `You Lose! ${computerChoice} beats ${userChoice}`;
  userScore += (win === true);
  computerScore += (!win);
  return ret;
}


function playGame(round){
  if(round == 5){
    if(userScore > computerScore) console.log('You won :)');
    else if(userScore < computerScore) console.log('you lose :(');
    else console.log('it is a tie');
    return;
  }

}

playGame(0);