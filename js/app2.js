// Get Access to Start Button, Questions, Next Button
// -----------------------------------------------------
// Access Start Button
const startButton = document.getElementById('startBtn');
// Access Next Button
const nextButton = document.getElementById('nextBtn');
// Access Question Container
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

// Event Listener for Start Button
startButton.addEventListener('click', startGame);
// -----------------------------------------------------
// Event Listener for Next Button
nextButton.addEventListener('click', () => {
    // Itterate to next qestion buy adding currentQuestionIndex++ 
    currentQuestionIndex++;
    // Call next question with setNextQuestion(); 
    setNextQuestion();
});
// -----------------------------------------------------


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
    // Resets background color to default each question
    clearStatusClass(document.body)
    // Next Button Must be created in order for this to function
    nextButton.classList.add('hide');
    // loop though buttons if there is a child and remove extra buttons
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)

    }
}

// add e to take in the event as a parameter for the selectAnswer Eventlistener
function selectAnswer(e) {
    // Get selected button by using target for the eventlistener for selectAnswer
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct)
    // 
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    // Check to see if we have another question by using .length
    // ----------------------------------------------------------
    if(shuffledQuestions.length > currentQuestionIndex +1){
        // Show Next button after answer is selected
        nextButton.classList.remove('hide');
    }
    else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
} 

// Fuction Check to see if Answer is correct
function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct');
    }
    else {
        element.classList.add('wrong');
    }

}

function clearStatusClass (element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}
// Create Questions by using arrays and objects
// Array of Questions
const questions = [
    {
        question: 'What is 2+2?',
        // Array of Answers
        answers: [
            {text: '4', correct: true},
            {text: '22', correct: false},
            {text: '92', correct: false},
            {text: '82', correct: false}
        ]
    },
    {
        question: 'What is 4+4?',
        // Array of Answers
        answers: [
            {text: '8', correct: true},
            {text: '452', correct: false},
            {text: '92', correct: false},
            {text: '82', correct: false}
        ]
    },
    {
        question: 'What is 6+4?',
        // Array of Answers
        answers: [
            {text: '10', correct: true},
            {text: '52', correct: false},
            {text: '92', correct: false},
            {text: '82', correct: false}
        ]
    },
    {
        question: 'What is 24+4?',
        // Array of Answers
        answers: [
            {text: '28', correct: true},
            {text: '277', correct: false},
            {text: '92', correct: false},
            {text: '82', correct: false}
        ]
    },
    {
        question: 'Voodoo beliefs originated in which Caribbean island nation?',
        // Array of Answers
        answers: [
            {text: 'Haiti', correct: true},
            {text: 'Canada', correct: false},
            {text: 'Louisiana', correct: false},
            {text: 'Africa', correct: false}
        ]
    }

]