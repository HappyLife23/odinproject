// Om vi vill att random number bara generas en gång så ska vi

// ha det utanföt loopen ananrs genererar den en ny varje gång
let secretNumber = Math.floor(Math.random() * 20) + 1;
const click = document.querySelector('.check');
const number = document.querySelector('.number');
const myScore = document.querySelector('.score');
const guess = document.querySelector('.guess');
const resetBtn = document.querySelector('.again');
const message = document.querySelector('.message');
let score = 20;
let highScore = 0;

// omvandlar värdet på input-value till number
// om värdet i inputen är inte ett nummer
// om guess-number är lika med secret number == vinst
// om score är större än highscore: highscores nya värde blir den nya score
click.addEventListener('click', () => {
  const guessNum = Number(document.querySelector('.guess').value);
  let message = document.querySelector('.message');
  if (!guessNum) {
    message.textContent = '⛔️ No Number';
    document.body.style.backgroundColor = 'Red';
  } else if (guessNum === secretNumber) {
    message.textContent = '🎉 Correct you won 🎉';
    number.textContent = guessNum;
    document.body.style.backgroundColor = '#28a745';
    number.style.width = '30rem';
    number.style.borderRadius = '10px';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      message.textContent = guessNum > secretNumber ? 'Too High' : 'Too Low';
      score--;
      myScore.textContent = score;
    } else {
      message.textContent = 'You Lost the game 🥲';
      myScore.textContent = 0;
    }
  }
});
//   } else if (guessNum < secretNumber) {
//     if (score > 1) {
//       message.textContent = 'Too Low';
//       score--;
//       myScore.textContent = score;
//     } else {
//       message.textContent = 'You Lost the game 🥲';
//       myScore.textContent = 0;
//     }
//   } else if (guessNum > secretNumber) {
//     if (score > 1) {
//       message.textContent = 'Too High';
//       score--;
//       myScore.textContent = score;
//     } else {
//       message.textContent = 'You Lost the game 🥲';
//       myScore.textContent = 0;
//       document.body.style.backgroundColor = '#dc3545';
//     }
//   }
// });

resetBtn.addEventListener('click', () => {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  myScore.textContent = score;
  number.style.width = '15rem';
  document.body.style.backgroundColor = '#222';
  message.textContent = 'Start guessing...';
  guess.value = '';
  number.textContent = '?';
});
