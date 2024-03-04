const letterButtons = document.querySelectorAll('.letter');
const answerSection = document.getElementById('answer-section');
const words = ['apple', 'banana', 'cat', 'dog', 'elephant', 'frog', 'giraffe', 'horse', 'iguana', 'jaguar'];

let challengeWord = '';
let guessWord = '';
let mistakesCount = 0;

function generateChallengeWord() {
    const challengeWordIndex = Math.floor(Math.random() * words.length);
    challengeWord = words[challengeWordIndex];
    console.log(challengeWord)
}

function checkLetter(keyChoice) {
    let letterFound = 0;
    for (let i = 0; i < challengeWord.length; i++) {
        if (challengeWord[i] === keyChoice) {
            answerSection.children[i].textContent = keyChoice;
            guessWord += keyChoice
            letterFound++;
        }
    }
    if (letterFound === 0) {
        drawings[mistakesCount]?.();
        mistakesCount++;
    }
    else if (guessWord.length === challengeWord.length) {
        setTimeout(() => {
            resetGame();
        }, 3000);
    }
}

function populateDashes(challengeWord) {
    for (let i = 0; i < challengeWord.length; i++) {
        const dash = `<span>_</span>`;
        answerSection.innerHTML += dash;
    }
}

function populateWord(challengeWord) {
    answerSection.innerHTML = `<span>${challengeWord}</span>`;
}

function resetGame() {
    for (let i = 0; i < letterButtons.length; i++) {
        letterButtons[i].classList.remove('pressed')
    }
    mistakesCount = 0;
    hang.innerHTML = `<img src="./assets/hang.svg" class="stand" />`;
    answerSection.innerHTML = "";
    generateChallengeWord();
    populateDashes(challengeWord);
}

document.addEventListener('DOMContentLoaded', function () {
    generateChallengeWord();
    populateDashes(challengeWord);
});

document.addEventListener('keypress', function (event) {
    for (let i = 0; i < letterButtons.length; i++) {
        if (!letterButtons[i].classList.contains('pressed') &&
            letterButtons[i].textContent === event.key.toUpperCase()) {
            letterButtons[i].classList.add('pressed');
            checkLetter(event.key);
        }
    }
})

for (let i = 0; i < letterButtons.length; i++) {
    letterButtons[i].addEventListener('click', function () {
        if (!letterButtons[i].classList.contains('pressed')) {
            letterButtons[i].classList.add('pressed');
            checkLetter(letterButtons[i].textContent.toLowerCase());
        }
    })
}

