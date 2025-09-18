
let userScore = 0, computerScore = 0;
let ties = 0; let targetScore = 5;

const r_p_s = ['✊', '✋', '✌️', '❓'];

document.querySelector('.buttons .rock').innerHTML = r_p_s[0];
document.querySelector('.buttons .paper').innerHTML = r_p_s[1];
document.querySelector('.buttons .scissors').innerHTML = r_p_s[2];

const userChoiceE = document.querySelector('.choice .user-choice p');
const computerChoiceE = document.querySelector('.choice .computer-choice p');

const rockButtonE = document.querySelector('.buttons .rock');
const paperButtonE = document.querySelector('.buttons .paper');
const scissorsButtonE = document.querySelector('.buttons .scissors');

const userScoreE = document.querySelector('.result .user-score p');
const computerScoreE = document.querySelector('.result .computer-score p');
const winnerE = document.querySelector('.result .winner p');
const descriptionE = document.querySelector('.result .description p');

const finalWinnerE = document.querySelector('.final-winner p');

const playAgainE = document.querySelector('.play-again .button');
playAgainE.disabled = true;

function getRandom(n){
  return Math.floor(Math.random() * n);
}

function getComputerChoice(){
  let x = getRandom(3);
  return x;
}

let userChoice = 3;
let computerChoice = 3;

rockButtonE.addEventListener('click', ()=>handleChoice(0));

paperButtonE.addEventListener('click', ()=>handleChoice(1));

scissorsButtonE.addEventListener('click', ()=>handleChoice(2));

function showUserChoice(){
  userChoiceE.innerHTML = r_p_s[userChoice];
}

function showComputerChoice(){
  computerChoiceE.innerHTML = r_p_s[computerChoice];
}
const winningStates = [{a: 0, b: 2}, {a: 1, b: 0}, {a: 2, b: 1}];

showUserChoice(userChoice);
showComputerChoice(computerChoice);

function handleChoice(choice){
  userChoice = choice;
  computerChoice = getComputerChoice();
  // show user, computer choices
  showComputerChoice();
  showUserChoice();

  // play the round
  playRound();
}

function showUserScore(){
  userScoreE.innerHTML = `Player: ${userScore}`;
}
showUserScore();
function showComputerScore(){
  computerScoreE.innerHTML = `Computer: ${computerScore}`;
}
showComputerScore();

function showWinner(){ // player: 0, computer: 1, tie: 2
  if(computerChoice == 3){
    winnerE.innerHTML = '';
    return;
  }
  const myState = {a: userChoice, b: computerChoice};
  let winner = -1;
  if(userChoice === computerChoice) winnerE.innerHTML = `Tie`, winner = 2;
  else if(winningStates.some(state => state.a == myState.a && state.b == myState.b))
     winnerE.innerHTML = `You Win`, winner = 0;
  else winnerE.innerHTML = `You Lose`, winner = 1;
  return winner;
}

function showDescription(){
  if(computerChoice === userChoice) {
    descriptionE.innerHTML = '';
     return;
  }
  let c = [false, false, false];
  c[computerChoice] = c[userChoice] = 1;
  if(c[0] && c[1]) descriptionE.innerHTML =  'paper beats rock';
  else if(c[0] && c[2]) descriptionE.innerHTML = 'rock beats scissors';
  else descriptionE.innerHTML = 'scissors beats paper';
}

function playRound(){
  const winner = showWinner();
  showDescription();
  if(winner === 0) userScore++;
  else if(winner === 1) computerScore++;
  console.log(winner);
  showUserScore();
  showComputerScore();
  if(userScore === targetScore || computerScore === targetScore){
    showFinalWinner(winner);
    forcePlayAgain();
  }
}

function showFinalWinner(w){
  let winner = w == 0 ? 'You have' : 'Computer has';
  finalWinnerE.innerHTML = `${winner} Won 🎉`;
}

function forcePlayAgain(){
    rockButtonE.disabled = paperButtonE.disabled 
    = scissorsButtonE.disabled = true;
  playAgainE.disabled = false;
}

function resetAll(){
  userScore = 0;
  computerScore = 0;
  descriptionE.innerHTML = '';
  winnerE.innerHTML = '';
  userChoice = computerChoice = 3;
  finalWinnerE.innerHTML = '';
  showComputerChoice();
  showComputerScore();
  showUserChoice();
  showUserScore();
  showDescription();
  showWinner();
  rockButtonE.disabled = paperButtonE.disabled 
  = scissorsButtonE.disabled = false;
  playAgainE.disabled = true;
}

playAgainE.addEventListener('click', resetAll);
