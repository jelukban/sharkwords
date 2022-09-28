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

const numWrong = 0;

// Loop over the chars in `word` and create divs.
// The divs should be appended to the section with id="word-container".
const createDivsForChars = (word) => {
  for (const letter of word){
    document.querySelector('#word-container').insertAdjacentHTML('beforeend',
   `<div class="letter-box ${letter}"></div>`);
  }
};

// Loop over each letter in the alphabet and generate a button for each letter
// The buttons should be appended to the section with id="letter-buttons"
const generateLetterButtons = () => {
  for (const letter of ALPHABET){
    document.querySelector('#letter-buttons').insertAdjacentHTML('beforeend',
    `<button class="letter-button">${letter}</button>`);
  }

};

// Set the `disabled` property of `buttonEl` to `true.
//
// `buttonEl` is an `HTMLElement` object.
//
const disableLetterButton = (buttonEl) => {
  // const buttonA = document.querySelector('button');
  // buttonA.setAttribute('disabled', '');
};

// This is a helper function we will use in the future
// It should return `true` if `letter` is in the word
// For now, you should test it out to make sure it works

const isLetterInWord = (letter) => {

  return document.querySelectorAll(`.${letter}`).length > 0 ? true: null;
};

// This is like if __name__ == '__main__' in Python
// It will be called when the file is run (because
// we call the function on line 66)
(function startGame() {
  // For now, we'll hardcode the word that the user has to guess
  // You can change this to choose a random word from WORDS once you
  // finish this lab but we hard code it so we know what the word is
  // and can tell if things look correct for this word
  // const word = WORDS[Math.floor(Math.random() * WORDS.length)];
  const word = 'hello';
  // call the function that makes an empty line for each letter in the word
  // Replace this line with the function call
  createDivsForChars(word);
  generateLetterButtons();
  const buttonA = document.querySelector('button');
  buttonA.setAttribute('disabled', '');
  console.log(isLetterInWord('h'));
  // call the function that makes a button for each letter in the alphabet
  // Replace this line with the function call

  // in the next lab, you will be adding functionality to handle when
  // someone clicks on a letter
})();