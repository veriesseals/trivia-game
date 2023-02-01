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
// ---------------------------------------------------------------
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
// ---------------------------------------------------------------
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
        question: 'Norma Jean Mortenson was the birth name of which movie star?',
        // Array of Answers
        answers: [
            {text: 'Billy Holiday', correct: false},
            {text: 'Nancy Reagan', correct: false},
            {text: 'Marilyn Monroe ', correct: true},
            {text: 'Doris Day', correct: false}
        ]
    },
    {
        question: 'What is the single-word title of the famous novel by Alex Haley?',
        // Array of Answers
        answers: [
            {text: 'Flowers', correct: false},
            {text: 'Roots', correct: true},
            {text: 'Willow', correct: false},
            {text: 'Orchid', correct: false}
        ]
    },
    {
        question: 'Rattlesnakes are native to which continent?',
        // Array of Answers
        answers: [
            {text: 'South America', correct: false},
            {text: 'Europe', correct: false},
            {text: 'Africa', correct: false},
            {text: 'North America ', correct: true}
        ]
    },
    {
        question: 'Jazz and Civic are models from which car company?',
        // Array of Answers
        answers: [
            {text: 'Ford', correct: false},
            {text: 'Honda', correct: true},
            {text: 'Chevrolet', correct: false},
            {text: 'Toyota', correct: false}
        ]
    },
    {
        question: 'Queen Elizabeth II is linked with which breed of dog?',
        // Array of Answers
        answers: [
            {text: 'Goldendoodle', correct: false},
            {text: 'Labrador', correct: false},
            {text: 'Corgi ', correct: true},
            {text: 'Cane Corso', correct: false}
        ]
    },
    {
        question: 'Uncle Sam is the personification of which country?',
        // Array of Answers
        answers: [
            {text: 'United States', correct: true},
            {text: 'Cuba', correct: false},
            {text: 'Canada', correct: false},
            {text: 'Brazil', correct: false}
        ]
    },
    {
        question: 'Which word can come after baby, bridal, and meteor?',
        // Array of Answers
        answers: [
            {text: 'Party', correct: false},
            {text: 'Monitor', correct: false},
            {text: 'Registry', correct: false},
            {text: 'Shower', correct: true}
        ]
    },
    {
        question: 'Which bird is often used as a symbol of peace?',
        // Array of Answers
        answers: [
            {text: 'Pigeon', correct: false},
            {text: 'Dove', correct: true},
            {text: 'Hawk', correct: false},
            {text: 'Eagle', correct: false}
        ]
    },
    {
        question: 'Only one chess piece can only move diagonally - which is it?',
        // Array of Answers
        answers: [
            {text: 'Knight', correct: false},
            {text: 'Rook', correct: false},
            {text: 'Bishop', correct: true},
            {text: 'Pawn', correct: false}
        ]
    },
    {
        question: 'What cooking term means to submerge food very quickly in boiling water?',
        // Array of Answers
        answers: [
            {text: 'Sous vide', correct: false},
            {text: 'Poach', correct: false},
            {text: 'Blanche', correct: true},
            {text: 'Broil', correct: false}
        ]
    },
    {
        question: 'Papa John\'s is a fast-food chain serving which food?',
        // Array of Answers
        answers: [
            {text: 'Tacos', correct: false},
            {text: 'Pizza', correct: true},
            {text: 'Chicken', correct: false},
            {text: 'Burgers', correct: false}
        ]
    },
    {
        question: 'In which language does \'Konnichi Wa\' mean hello?',
        // Array of Answers
        answers: [
            {text: 'Korean', correct: false},
            {text: 'Chinese', correct: false},
            {text: 'Thai', correct: false},
            {text: 'Japanese', correct: true}
        ]
    },
    {
        question: 'Photophobia is extreme sensitivity to what?',
        // Array of Answers
        answers: [
            {text: 'Diamonds', correct: false},
            {text: 'Money', correct: false},
            {text: 'Oil', correct: false},
            {text: 'Gold', correct: true}
        ]
    },
    {
        question: 'What was stored in Fort Knox?',
        // Array of Answers
        answers: [
            {text: 'Goldendoodle', correct: true},
            {text: 'Labrador', correct: false},
            {text: 'Corgi ', correct: false},
            {text: 'Cane Corso', correct: false}
        ]
    },
    {
        question: 'Which crystal is put in watches to help them keep time?',
        // Array of Answers
        answers: [
            {text: 'Citrine', correct: false},
            {text: 'Amethyst', correct: false},
            {text: 'Quartz', correct: true},
            {text: 'Onyx ', correct: false}
        ]
    },
    {
        question: 'According to the saying, you shouldn\'t put all of which food in one basket?',
        // Array of Answers
        answers: [
            {text: 'Apples', correct: false},
            {text: 'Onions', correct: false},
            {text: 'Eggs', correct: true},
            {text: 'Potatoes', correct: false}
        ]
    },
    {
        question: 'Which color of cat is associated with witches?',
        // Array of Answers
        answers: [
            {text: 'Calico', correct: false},
            {text: 'White', correct: false},
            {text: 'Ginger', correct: false},
            {text: 'Black', correct: true}
        ]
    },
    {
        question: 'The movie \'Walk the Line\' is about which singer?',
        // Array of Answers
        answers: [
            {text: 'Bob Dylan', correct: false},
            {text: 'Johnny Cash', correct: true},
            {text: 'Tom Petty', correct: false},
            {text: 'Roy Orbison', correct: false}
        ]
    },
    {
        question: 'Shrek in the movies was which type of mythical creature?',
        // Array of Answers
        answers: [
            {text: 'Portrait', correct: false},
            {text: 'Dragon', correct: false},
            {text: 'Ogre', correct: true},
            {text: 'Gargoyle', correct: false}
        ]  
    },
    {
        question: 'A painting of a countryside scene has which name?',
        // Array of Answers
        answers: [
            {text: 'Portrait', correct: false},
            {text: 'Abstract', correct: false},
            {text: 'Landscape', correct: true},
            {text: 'Minimalism', correct: false}
        ]
    },
    {
        question: 'Which name is given to a group of crows?',
        // Array of Answers
        answers: [
            {text: 'Flock', correct: false},
            {text: 'Murder', correct: true},
            {text: 'School', correct: false},
            {text: 'Herd', correct: false}
        ]
    },
    {
        question: 'What do dog sled drivers shout to get the dogs to run quicker?',
        // Array of Answers
        answers: [
            {text: 'Mush!', correct: true},
            {text: 'Faster!', correct: false},
            {text: 'Go!', correct: false},
            {text: 'Move it!', correct: false}
        ]
    },
    {
        question: 'In Scotland, what is a loch?',
        // Array of Answers
        answers: [
            {text: 'Pond', correct: false},
            {text: 'River', correct: false},
            {text: 'Stream', correct: false},
            {text: 'Lake', correct: true}
        ]
    },
    {
        question: 'Documentary \'Super-Size Me\' was about which fast food chain?',
        // Array of Answers
        answers: [
            {text: 'Dairy Queen', correct: false},
            {text: 'Burger King', correct: false},
            {text: 'McDonald’s', correct: true},
            {text: 'Sonic', correct: false}
        ]
    },
    {
        question: 'Call me Ishmael\' is the first line of which novel?',
        // Array of Answers
        answers: [
            {text: 'Grapes of Wrath', correct: false},
            {text: 'To Kill a Mockingbird', correct: false},
            {text: 'The Tale of Two Cities', correct: false},
            {text: 'Moby Dick ', correct: true}
        ]
    },
    {
        question: 'Ancient Greek myth said that which man carried the world on his shoulders?',
        // Array of Answers
        answers: [
            {text: 'Hermes', correct: false},
            {text: 'Artemis', correct: false},
            {text: 'Atlas', correct: true},
            {text: 'Achilles', correct: false}
        ]  
    },
    {
        question: 'Who was the first female US Secretary of State?',
        // Array of Answers
        answers: [
            {text: 'Madeleine Albright', correct: true},
            {text: 'Nancy Pelosi', correct: false},
            {text: 'Kamala Harris', correct: false},
            {text: 'Stacy Abrahams', correct: false}
        ]
    },
    {
        question: 'Which food is a Scotch Bonnet?',
        // Array of Answers
        answers: [
            {text: 'Fruit', correct: false},
            {text: 'Chili', correct: true},
            {text: 'Pastry', correct: false},
            {text: 'Pasta', correct: false}
        ]   
    },
    {
        question: 'What is the usual setting for John Grisham\'s novels?',
        // Array of Answers
        answers: [
            {text: 'Hospital', correct: false},
            {text: 'Corporate Office', correct: false},
            {text: 'School', correct: false},
            {text: 'Courtroom', correct: true}
        ]
    },
    {
        question: 'April, June, September, and which other month only have 30 days?',
        // Array of Answers
        answers: [
            {text: 'July', correct: false},
            {text: 'May', correct: false},
            {text: 'November', correct: true},
            {text: 'August', correct: false}
        ]
    }

]