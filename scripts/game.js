const letterButtons = document.querySelectorAll('.letter');
const answerSection = document.getElementById('answer-section');
const words = ['apple', 'banana', 'cat', 'dog', 'elephant', 'frog', 'giraffe', 'horse', 'iguana', 'jaguar'];
const challengeWordIndex = Math.floor(Math.random() * words.length);
const challengeWord = words[challengeWordIndex];

let mistakesCount = 0;

function checkLetter(keyChoice) {
    let letterFound = 0;
    for (let i = 0; i < challengeWord.length; i++) {
        if (challengeWord[i] === keyChoice) {
            answerSection.children[i].textContent = keyChoice;
            letterFound ++;
        }
    }
    if (letterFound === 0) {
        drawings[mistakesCount]?.();
        mistakesCount ++;
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
    setTimeout(function() {
        location.reload();
      }, 3000);
}

populateDashes(challengeWord);

for (let i = 0; i < letterButtons.length; i++) {
    letterButtons[i].addEventListener('click', function () {
        if (!letterButtons[i].classList.contains('pressed')) {
            letterButtons[i].classList.add('pressed');
            checkLetter(letterButtons[i].textContent.toLowerCase());
        }
    })
}

document.addEventListener('keypress', function (event) {
    for (let i = 0; i < letterButtons.length; i++) {
        if (!letterButtons[i].classList.contains('pressed') && 
            letterButtons[i].textContent === event.key.toUpperCase()) {
            letterButtons[i].classList.add('pressed');
            checkLetter(event.key);
        }
    }
})