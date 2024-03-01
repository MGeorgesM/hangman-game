const letterButtons = document.querySelectorAll('.letter')
const answerSection = document.getElementById('answer-section')
const words = ['apple', 'banana', 'cat', 'dog', 'elephant', 'frog', 'giraffe', 'horse', 'iguana', 'jaguar'];
const challengeWordIndex = Math.floor(Math.random() * words.length);
console.log(words.length)
console.log(challengeWordIndex)
const challengeWord = words[challengeWordIndex]
console.log(challengeWord)


for (let i = 0; i < letterButtons.length; i++) {
    letterButtons[i].addEventListener('click', function () {
        console.log('Listening to button clicks')
        console.log(letterButtons[i].textContent)
        checkLetter(letterButtons[i].textContent)
    })
}

for (let i = 0; i < challengeWord.length; i++) {
    const dash = `<div class="letter">_</div>`;
    answerSection.innerHTML += dash
}

document.addEventListener('keyup', function (event) {
    console.log('Keypress listeneer')
    console.log(event.key)
    checkLetter(event.key)
})


function checkLetter (keyChoice) {
    if (keyChoice.length != 1) {
        return
    }
    if (challengeWord.includes(keyChoice.toLowerCase())) {
        console.log('Char is found', keyChoice);
        
        return
    }
    console.log('Char not found', keyChoice)
}