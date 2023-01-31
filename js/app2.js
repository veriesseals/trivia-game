// Get Access to Start Button, Questions, Next Button
// -----------------------------------------------------
const startButton = document.getElementById('startBtn');
const nextButton = document.getElementById('nextBtn');
const questionContainerElement = document.getElementById('questionContainer');

// Get Access to Question Element
const questionElement = document.getElementById('question');
// Get Access to Answer Buttons
const answerButtonsElement = document.getElementById('answerButtons');
// Varibiabls to Randomize Questions must use Let here or initializer error will occur
// Will Default to Undefined
let shuffledQuestions, currentQuestionIndex; //Init

// Event Listener for Start Button
// -----------------------------------------------------
startButton.addEventListener('click', startGame);


// Functions -- Methods 
function startGame() {
    // Make Sure start button is working once clicked
    console.log('Game Started');
    // Hide Start Button after it is clicked
    // Use the classList to remove and add classes
    startButton.classList.add('hide');
    // Use the classList to remove the hide class to show the question container
    // Assign the shuffled Questions Variabe to the Questions Array for SOrting and Randomizatioin 
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    // Set Question Index to  0
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    // call the setNextQUestion() function ro show 1st Question.
    setNextQuestion();

}

function setNextQuestion() {
    // Create a reset State method to remove the previous answers
    resetState()


    // Use method Show Question to show the Shuffled Questions from the Current Question Index
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

// Create Show Question Function and pass in the question Array
function showQuestion(question) {
    questionElement.innerText = question.question;
    // Loop through answers by using a ForeEach Loop
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        // Conditional to check to see if the answer is correct only
        if (answer.correct) {
            button.dataset.correct = answer.correct; 
        }
        // Add Eventlistener for selectAnswer
        button.addEventListener('click', selectAnswer);
        // Append buttons that was just created
        answerButtonsElement.appendChild(button);
    });

}

// Reset 
function resetState() {
    // Next Button Must be created in order for this to function
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)

    }
}


// add e to take in the event as a parameter foe the selectAnswer Eventlistener
function selectAnswer(e) {
    // 

} 

// Create Questions by using arrays and objects
// Array of Questions
const questions = [
    {
        question: 'What is 2+2?',
        // Array of Answers
        answers: [
            {text: '4', correct: true},
            {text: '22', correct: false}
        ]
    }
]