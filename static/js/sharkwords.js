const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

const WORDS = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];

let numWrong = 0;


const createDivsForChars = (word) => {
  for (const letter of word){
    document.querySelector('#word-container').insertAdjacentHTML('beforeend',
   `<div class="letter-box ${letter}"></div>`);
  }
};


const generateLetterButtons = () => {
  for (const letter of ALPHABET){
    document.querySelector('#letter-buttons').insertAdjacentHTML('beforeend',
    `<button class="letter-button">${letter}</button>`);
  }
};


const disableLetterButton = (buttonEl) => {
  buttonEl.setAttribute('disabled', '');
};


const isLetterInWord = (letter) => {

  return document.querySelectorAll(`.${letter}`).length > 0 ? true: null;
};


const handleCorrectGuess = (letter) => {
  for (const char of document.querySelectorAll(`.${letter}`)) {
    char.innerHTML = `${letter}`;
  }
}


function handleWrongGuess(){
  numWrong += 1;
  if (numWrong === 1){
    document.querySelector('img').setAttribute('src', 'static/images/guess1.png');
  } else if (numWrong === 2) {
    document.querySelector('img').setAttribute('src', 'static/images/guess2.png');
  } else if (numWrong === 3) {
    document.querySelector('img').setAttribute('src', 'static/images/guess3.png');
  } else if (numWrong === 4) {
    document.querySelector('img').setAttribute('src', 'static/images/guess4.png');
  } else if (numWrong === 5) {
    document.querySelector('img').setAttribute('src', 'static/images/guess5.png');
    for (const button of document.querySelectorAll('button')) {
      button.setAttribute('disabled', '');
    }
    document.querySelector('#play-again').setAttribute('style', '');
}
}


(function startGame() {

  const word = WORDS[Math.floor(Math.random() * WORDS.length)];

  createDivsForChars(word);
  generateLetterButtons();

  for (const button of document.querySelectorAll('button')) {
    button.addEventListener('click', () => {
      const letter = button.innerHTML;
      disableLetterButton(button);
      if (isLetterInWord(letter)) {
        handleCorrectGuess(letter);
      } else {
        handleWrongGuess(letter);
      }
    })
  }


  // document.querySelector('#play-again').addEventListener('click', startGame);

})();


