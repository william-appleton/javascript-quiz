// Variables and functions to start quiz
let stBtnEl = document.querySelector("#stBtn")
let homepageEl = document.querySelector('#homepage')
let questDisplayEl = document.querySelector('#questDisplay')
let timerEl = document.querySelector('#timer')
let timer2;
let time = 60

stBtnEl.addEventListener('click', function(){
    homepageEl.classList.add('hide');
    questDisplayEl.classList.remove('hide');
    timer2 = setInterval(timeFunction, 1000);
    timerEl.textContent=time;
    nextQuestion();
})

function timeFunction(){
    time--;
    timerEl.textContent = time;
    if (time <=0) {
        Over(); 
    }
}

//Variables and functions to proceed through questions
let actualQuestionEl = document.querySelector('#actualQuestion')
let questChoicesEl = document.querySelector('#questChoices')
let questI = 0
let wrongEl = document.querySelector('#wrong')

function nextQuestion(){
    wrongEl.textContent = ''
    let questToDisplay = questArr[questI]
    actualQuestionEl.textContent = questToDisplay.userQuest
    questChoicesEl.textContent = ''

    for (let j = 0; j < 4; j++) {
        let newChoiceBtn = document.createElement('button')
        let newText = questArr[questI].choices[j]
        newChoiceBtn.textContent = newText
        newChoiceBtn.onclick = checkQuestion
        questChoicesEl.appendChild(newChoiceBtn)
    }
}

//Questions to plug into nextQuestion() function above
const questArr = [
    {   userQuest: "1. What does DOM stand for?",
        choices: ["Document Object Model", "Digitally Oriented Methods", "Document On Machine", "Digital Object Model"],
        answer: "Document Object Model" 
    },

    {   userQuest: "2. Do functions need to be called in order to execute their code blocks?",
        choices: ["No, never", "Yes, always", "Usually, but not always", "Only in very special cases"],
        answer: "Yes, always" 
    },

    {   userQuest: "3. Arrays can hold which of the following types:",
        choices: ["Numbers", "Strings", "Other Arrays", "All of the Above"],
        answer: "All of the Above" 
    },

    {   userQuest: "4. A method is followed by which of the following",
        choices: ["Parantheses", "Curly Brackets", "Square Brackets", "Quotation Marks"],
        answer: "Parantheses" 
    },
    ];

//Function to check answers
function checkQuestion(){
    if (this.textContent === questArr[questI].answer) {
        questI++
        if (questI === questArr.length) {
            Over()
        } else {
            nextQuestion()
        }
    } else {
        wrongEl.textContent = 'Wrong'
        if (time <= 10) {
            time = 0
            timerEl.textContent = 0
            Over()
        } else {
            time -= 10
        }
    }
}

//Variables and function to end game
let quizOverEl = document.querySelector('#quizOver')
let scoreEl = document.querySelector('#score')

function Over(){
    quizOverEl.classList.remove('hide')
    questDisplayEl.classList.add('hide')
    scoreEl.textContent = time
    clearInterval(timer2)
}

//Variables and function to store high scores
let playerIntEl = document.querySelector('#playerInt')
let enterEl = document.querySelector('#enter')
let highScoresEl = document.querySelector('#highScores')
let startOverEl = document.querySelector('#startOver')

enterEl.addEventListener('click', function(){
    let finalValue = playerIntEl.value + ': ' + time + ' seconds'
    let newScoreEntry = document.createElement('P')
    newScoreEntry.textContent = finalValue
    highScoresEl.appendChild(newScoreEntry)
    quizOverEl.classList.add('hide')
    startOverEl.classList.remove('hide')
})

//Function to start game over again
startOverEl.addEventListener('click', function(){
    startOverEl.classList.add('hide')
    questI = 0
    time = 60
    questDisplayEl.classList.remove('hide');
    timer2 = setInterval(timeFunction, 1000);
    timerEl.textContent=time;
    nextQuestion();

})