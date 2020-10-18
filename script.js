// Variables and functions to start quiz
let stBtnEl = document.querySelector("#stBtn")
let homepageEl = document.querySelector('#homepage')

stBtnEl.addEventListener('click', function(){
    homepageEl.classList.add('hide')
})






const quest = [
    {   userQuest: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts" 
    },

    {   userQuest: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts" 
    },

    {   userQuest: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts" 
    },

    {   userQuest: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts" 
    },
    ];

    let questEl = document.querySelector('#quest')

