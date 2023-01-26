class Trivia {
    constructor() {
        // Get Access to Buttons in HTML
        this.startButton = document.getElementById('startBtn');
        this.nextButton = document.getElementById('nextBtn');
        this.questionContainerElement = document.getElementById('question-container');
        this.questionElement = document.getElementById('question');
        this.answerButtonsElement = document.getElementById('answer-buttons');
        this.questionElement = document.getElementById('question');
        this.answerButtonsElement = document.getElementById('answer-buttons');

        // Array of Questions
        // Each Question is an Object
        // ----------------------------------------------------
        this.questions = [
            // ----------------------------------------------------
            // Question #1
            // ----------------------------------------------------
            {
                question: 'What is 2 + 2?',
                answers: [
                    { text: '4', correct: true },
                    { text: '22', correct: false }
                ]
            }
            // ----------------------------------------------------
            // Question #2
            // ----------------------------------------------------
        ]
    }

    // Init Method
    // This method will be called when the page loads
    // ----------------------------------------------------
    init() {
        // Add Event Listener to Start Button
        this.startButton.addEventListener('click', () => {
            this.startGame();
        });

        this.shuffledQuestions
        this.currentQuestionIndex; // Variables to be used later
    }

    

    // Start Game Method
    // This method will be called when the start button is clicked
    // ----------------------------------------------------
    startGame() {
        console.log('Started');
        this.startButton.classList.add('hide');
        this.shuffledQuestions = this.questions.sort(() => Math.random() - .5);
        this.currentQuestionIndex = 0;
        this.questionContainerElement.classList.remove('hide');
        this.setNextQuestion();
    }

    // Set Next Question Method
    // ----------------------------------------------------
    setNextQuestion() {
        this.showQuestion(this.shuffledQuestions[currentQuestionIndex]);
    }

    

}

const action = new Trivia();
action.init();