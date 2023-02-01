class Trivia {
    constructor() {
        // Access Start Button
        this.startButton = document.getElementById('startBtn');
        // Access Next Button
        this.nextButton = document.getElementById('nextBtn');
        // Access Question Container
        this.questionContainerElement = document.getElementById('questionContainer');
        // Get Access to Question Element
        this.questionElement = document.getElementById('question');
        // Get Access to Answer Buttons
        this.answerButtonsElement = document.getElementById('answerButtons');
        // Varibiabls to Randomize Questions must use Let here or initializer error will occur
        this.shuffledQuestions, this.currentQuestionIndex;
        
        // Event Listeners

        // Event Listener for Start Button
        this.startButton.addEventListener('click', this.startGame);
        // -----------------------------------------------------
        // Event Listener for Next Button
        this.nextButton.addEventListener('click', () => {
            // Itterate to next qestion buy adding currentQuestionIndex++ 
            this.currentQuestionIndex++;
            // Call next question with setNextQuestion(); 
            this.setNextQuestion();
        });

        
        // Problem code
        // -----------------------------------------------------
        questions = [
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
    }

    init() {
        this.startGame();
        // this.setNextQuestion()
    }

    startGame() {
        // Make Sure start button is working once clicked
        console.log('Game Started');
        // Hide Start Button after it is clicked
        // Use the classList to remove and add classes
        this.startButton.classList.add('hide');
        // Use the classList to remove the hide class to show the question container
        // Assign the shuffled Questions Variabe to the Questions Array for SOrting and Randomizatioin 
        this.shuffledQuestions = questions.sort(() => Math.random() - .5);
        // Set Question Index to  0
        this.currentQuestionIndex = 0;
        this.questionContainerElement.classList.remove('hide');
        // call the setNextQUestion() function ro show 1st Question.
        this.setNextQuestion();
    }

    setNextQuestion() {
        // Create a reset State method to remove the previous answers
        this.resetState()
        // Use method Show Question to show the Shuffled Questions from the Current Question Index
        this.showQuestion(this.shuffledQuestions[this.currentQuestionIndex]);
    }

    showQuestion(question) {
        this.questionElement.innerText = question.question;
        question.answers.forEach(answer => {
            const button = document.createElement('button');
            button.innerText = answer.text;
            button.classList.add('btn');
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener('click', this.selectAnswer);
            this.answerButtonsElement.appendChild(button);
        });
    }

    resetState() {
        this.clearStatusClass(document.body);
        this.nextButton.classList.add('hide');
        while (this.answerButtonsElement.firstChild) {
            this.answerButtonsElement.removeChild(this.answerButtonsElement.firstChild);
        }
    }

    selectAnswer(e) {
        const selectedButton = e.target;
        const correct = selectedButton.dataset.correct;
        this.setStatusClass(document.body, correct);
        Array.from(this.answerButtonsElement.children).forEach(button => {
            this.setStatusClass(button, button.dataset.correct);
        });
        if (this.shuffledQuestions.length > this.currentQuestionIndex + 1) {
            this.nextButton.classList.remove('hide');
        } else {
            this.startButton.innerText = 'Restart';
            this.startButton.classList.remove('hide');
        }
    }

    setStatusClass(element, correct) {
        this.clearStatusClass(element);
        if (correct) {
            element.classList.add('correct');
        } else {
            element.classList.add('wrong');
        }
    }

    clearStatusClass(element) {
        element.classList.remove('correct');
        element.classList.remove('wrong');
    }

        
}

const action = new Trivia();
action.init();