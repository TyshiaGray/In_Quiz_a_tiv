// var tagName = prompt("Please enter an HTML Tag (ex. h1, h2, p, div):", "enter tag");

// if (tagName !== "h1" && tagName !== "h2" && tagName !== "p" && tagName !== "div") {
//   alert("please enter a valid tag");
// } else {
//   var tag = document.createElement(tagName);
//   tag.textContent = "This was made via prompts. It's a " + tagName;
//   document.body.appendChild(tag);
// }

// var nextTag = confirm("Would you like to add another tag?");
// if (nextTag === true) {
//   var secondTagName = prompt("Please enter another  HTML Tag (ex. h1, h2, p, div):", "enter tag here");
//   if(secondTagName !== "h1" && secondTagName !== "h2" && secondTagName !== "p" && secondTagName !== "div") {
//     alert("please enter a valid tag");
//   } else {
//     var secondTag = document.createElement(secondTagName);
//     secondTag.textContent = "This is our second tag via prompts, it's a " + secondTagName;
//     document.body.appendChild(secondTag);
//   }}
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in JavaScript can be used to store ____.",
        choices: [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above"
        ],
        answer: "all of the above"
    },
    {
        title:
            "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },
    {
        title:
            "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
        answer: "console.log"
    }
];
var clock
var timerEl= document.querySelector("#timer")
var startButton = document.querySelector("#start")
var answersEl = document.querySelector("#answers")
var currentQuestion = 0
var secondsLeft = 60
function displayQuestion(){
    var questionEl = document.querySelector("#question")
    questionEl.textContent = questions[currentQuestion].title
    answersEl.innerHTML = ""
    for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
       
       var button = document.createElement("button")
        button.textContent = questions[currentQuestion].choices[i]
        button.classList.add("btn", "btn-primary", "answer")
        button.value = i
        answersEl.appendChild(button)
    }
}
function timer(){
    clock = setInterval(
        function(){
            secondsLeft = secondsLeft -1
            timerEl.textContent = "Time: "+ secondsLeft + " seconds"
            if (secondsLeft <= 0){
                timerEl.textContent = "Time: 0 seconds"
                clearInterval(clock)
            }
        },
        1000
    )
}

function checkAnswer() {
    if(!event.target.classList.contains("answer")){
        return
    }
    var buttonValue = event.target.value
    if(questions[currentQuestion].choices[buttonValue] !== questions[currentQuestion].answers){
        secondsLeft = secondsLeft - 15
    }
    currentQuestion++
    displayQuestion()
}

function init() {
    var welcome = document.querySelector("#welcome")
    welcome.setAttribute("class", "d-none")
    displayQuestion()
    timer()
}


answersEl.addEventListener("click", checkAnswer)
startButton.addEventListener("click", init)