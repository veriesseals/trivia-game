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

const audioCorrect = document.getElementById('audioCorrect');
// const audioWrong = document.getElementById('audioWrong');



// Event Listener for Start Button
// -----------------------------------------------------

// Event Listener for Start Button to start the game
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

// Scoreboard
// -----------------------------------------------------
let score = 0;
const scoreDisplay = document.querySelector("#score");

score += 0;

scoreDisplay.innerText = score;

function answerQuestion(isCorrect) {
    if (isCorrect === answer.correct) {
        score += 3;
    }
    scoreDisplay.innerText = score;
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
    // Loop through the buttons to set the status of the button
    
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

// Function Check to see if Answer is correct
// --------------------------------------------------
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct');
        // Audio for Correct Answer
        audioCorrect.play();
    }
    else {
        element.classList.add('wrong');
        // Audio for Wrong Answer (BUG🐞)
        // audioWrong.play();
    }

}

function clearStatusClass (element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}


// Create Questions by using arrays and objects
// Array of Questions
// ---------------------------------------------------------------------

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
        question: 'One chess piece can only move diagonally - which is it?',
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
            {text: 'Light', correct: true},
            {text: 'Sound', correct: false},
            {text: 'Rain', correct: false},
            {text: 'Heat', correct: false}
        ]
    },
    {
        question: 'What was stored in Fort Knox?',
        // Array of Answers
        answers: [
            {text: 'Diamonds', correct: false},
            {text: 'Money', correct: false},
            {text: 'Oil', correct: false},
            {text: 'Gold', correct: true}
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
        question: 'In the movie Shrek which type of mythical creature is he?',
        // Array of Answers
        answers: [
            {text: 'Fairy', correct: false},
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
        question: 'The documentary \'Super-Size Me\' was about which fast food chain?',
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
        question: 'Which type of food is a Scotch Bonnet?',
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
        question: 'The months of April, June, and September have 30 days which other month only has 30 days?',
        // Array of Answers
        answers: [
            {text: 'July', correct: false},
            {text: 'May', correct: false},
            {text: 'November', correct: true},
            {text: 'August', correct: false}
        ]
    },
    {
        question: 'With whom did Lionel Richie co-write the \'80s hit song for Africa, \'We Are the World\'?',
        // Array of Answers
        answers: [
            {text: 'Michael Jackson', correct: true},
            {text: 'Prince', correct: false},
            {text: 'Paul McCartney', correct: false},
            {text: 'David Bowie', correct: false}
        ]
    },
    {
        question: 'Which James Bond actor known for his distinctive voice died in 2020?',
        // Array of Answers
        answers: [
            {text: 'Timothy Dalton', correct: false},
            {text: 'Pierce Brosnan', correct: false},
            {text: 'Daniel Craig', correct: false},
            {text: 'Sean Connery ', correct: true}
        ]
    },
    {
        question: 'Greek salad contains which cheese?',
        // Array of Answers
        answers: [
            {text: 'Gorgonzola', correct: false},
            {text: 'Feta', correct: true},
            {text: 'Mozzarella', correct: false},
            {text: 'Cheddar', correct: false}
        ]
    },
    {
        question: 'Which color of the moon means once in a very long time?',
        // Array of Answers
        answers: [
            {text: 'Yellow', correct: false},
            {text: 'Red', correct: false},
            {text: 'Blue', correct: true},
            {text: 'Orange', correct: false}
        ]
    },
    {
        question: 'Speedy Gonzales is which type of cartoon creature?',
        // Array of Answers
        answers: [
            {text: 'Cat', correct: false},
            {text: 'Dog', correct: false},
            {text: 'Mouse', correct: true},
            {text: 'Horse', correct: false}
        ]
    },
    {
        question: 'Benjamin Franklin is said to have created which piece of furniture?',
        // Array of Answers
        answers: [
            {text: 'Rocking chair', correct: true},
            {text: 'Platform bed', correct: false},
            {text: 'Chaise lounge', correct: false},
            {text: 'Recliner', correct: false}
        ]
    },
    {
        question: 'Thriller\' was a worldwide hit in 1984 for which artist?',
        // Array of Answers
        answers: [
            {text: 'Elton John', correct: false},
            {text: 'Michael Jackson', correct: true},
            {text: 'George Michael', correct: false},
            {text: 'Prince', correct: false}
        ]
    },
    {
        question: 'What is the first name of the French painter Cezanne?',
        // Array of Answers
        answers: [
            {text: 'James', correct: false},
            {text: 'George', correct: false},
            {text: 'Steve', correct: false},
            {text: 'Paul', correct: true}
        ]
    },
    {
        question: 'Which country\'s film industry is known as \'Bollywood\'?',
        // Array of Answers
        answers: [
            {text: 'Nigeria', correct: false},
            {text: 'India', correct: true},
            {text: 'Mumbai', correct: false},
            {text: 'Punjabi', correct: false}
        ]
    },
    {
        question: 'Which instrument do you use to determine your position relative to the North Pole?',
        // Array of Answers
        answers: [
            {text: 'Protractor', correct: false},
            {text: 'Ruler', correct: false},
            {text: 'Compass', correct: true},
            {text: 'Sun dial ', correct: false}
        ]
    },
    {
        question: 'Which composer had the Christian name, Johann Sebastian?',
        // Array of Answers
        answers: [
            {text: 'Bach', correct: true},
            {text: 'Mozart', correct: false},
            {text: 'Beethoven', correct: false},
            {text: 'Chopin', correct: false}
        ]
    },
    {
        question: 'Which mythical creature has the top of a woman and the bottom of a fish?',
        // Array of Answers
        answers: [
            {text: 'Unicorn', correct: false},
            {text: 'Centaur', correct: false},
            {text: 'Mermaid', correct: true},
            {text: 'Chimera', correct: false}
        ]
    },
    {
        question: 'Which creatures work at the North Pole, helping Santa make toys?',
        // Array of Answers
        answers: [
            {text: 'Minions', correct: false},
            {text: 'Dwarves', correct: false},
            {text: 'Gnomes', correct: false},
            {text: 'Elves', correct: true}
        ]
    },
    {
        question: 'Which famous scientist invented the color wheel?',
        // Array of Answers
        answers: [
            {text: 'Sigmund Fraud', correct: false},
            {text: 'Isaac Newton', correct: true},
            {text: 'Albert Einstein', correct: false},
            {text: 'Marie Curie', correct: false}
        ]
    },
    {
        question: 'A crepe is a French version of which food?',
        // Array of Answers
        answers: [
            {text: 'Donut', correct: false},
            {text: 'Bagel', correct: false},
            {text: 'Pancake', correct: true},
            {text: 'Cupcake', correct: false}
        ]
    },
    {
        question: 'Swahili is a language spoken on which continent?',
        // Array of Answers
        answers: [
            {text: 'Asia', correct: false},
            {text: 'Europe', correct: false},
            {text: 'Australia', correct: false},
            {text: 'Africa', correct: true}
        ]
    },
    {
        question: 'Which Italian city claims to have invented pizza?',
        // Array of Answers
        answers: [
            {text: 'Naples', correct: true},
            {text: 'Venice', correct: false},
            {text: 'Bologna', correct: false},
            {text: 'Rome', correct: false}
        ]
    },
    {
        question: 'A bibliophile is a lover of which items?',
        // Array of Answers
        answers: [
            {text: 'Bibles', correct: false},
            {text: 'Books', correct: true},
            {text: 'Baby bibs', correct: false},
            {text: 'Biographies', correct: false}
        ]
    },
    {
        question: 'Which animal is said to bury its head in the sand?',
        // Array of Answers
        answers: [
            {text: 'Emu', correct: false},
            {text: 'Crane', correct: false},
            {text: 'Ostrich', correct: true},
            {text: 'Rheas', correct: false}
        ]
    },
    {
        question: 'What was the profession of the Seven Dwarves in the Disney movie?',
        // Array of Answers
        answers: [
            {text: 'Carpentry', correct: false},
            {text: 'Blacksmithing', correct: false},
            {text: 'Mining', correct: true},
            {text: 'Farming', correct: false}
        ]
    },
    {
        question: 'Murder on the Orient Express\' is the most famous work by which writer?',
        // Array of Answers
        answers: [
            {text: 'Jessica Fletcher', correct: false},
            {text: 'Agatha Christie ', correct: true},
            {text: 'Jane Austen', correct: true},
            {text: 'Elizabeth Browning', correct: false}
        ]
    },
    {
        question: 'In mythology, Achilles was killed by an arrow in which part of the body?',
        // Array of Answers
        answers: [
            {text: 'Knee', correct: false},
            {text: 'Chest', correct: false},
            {text: 'Heel', correct: true},
            {text: 'Arm', correct: false}
        ]
    },
    {
        question: 'Aromatherapy works on which of the senses?',
        // Array of Answers
        answers: [
            {text: 'Smell', correct: true},
            {text: 'Touch', correct: false},
            {text: 'Taste', correct: false},
            {text: 'Sight', correct: false}
        ]
    },
    {
        question: 'Car exhaust fumes contain mainly what poisonous gas?',
        // Array of Answers
        answers: [
            {text: 'Hydrogen Gas', correct: false},
            {text: 'Helium', correct: false},
            {text: 'Carbon Monoxide ', correct: true},
            {text: 'Carbon Dioxide', correct: false}
        ]
    },
    {
        question: 'Shoes made by Christian Louboutin have which distinctive color on the soles?',
        // Array of Answers
        answers: [
            {text: 'Tan and white', correct: false},
            {text: 'Black and white', correct: false},
            {text: 'Blue and white', correct: false},
            {text: 'Red and white', correct: true}
        ]
    },
    {
        question: 'Which string instrument is slightly larger than a violin?',
        // Array of Answers
        answers: [
            {text: 'Lute', correct: false},
            {text: 'Viola', correct: true},
            {text: 'Cello', correct: false},
            {text: 'Harp', correct: false}
        ]
    },
    {
        question: 'Which Caribbean Island is famous for producing cigars?',
        // Array of Answers
        answers: [
            {text: 'Saint Martin', correct: false},
            {text: 'Cuba', correct: true},
            {text: 'Antigua', correct: false},
            {text: 'Grand Cayman', correct: false}
        ]
    },
    {
        question: 'Two\'s company, but three is a what?',
        // Array of Answers
        answers: [
            {text: 'Trio', correct: false},
            {text: 'Duo', correct: false},
            {text: 'Group', correct: false},
            {text: 'Crowd', correct: true}
        ]
    },
    {
        question: 'What is a scarlet ibis?',
        // Array of Answers
        answers: [
            {text: 'Bird', correct: true},
            {text: 'Frog', correct: false},
            {text: 'Horse', correct: false},
            {text: 'Snake', correct: false}
        ]
    },
    {
        question: 'A skull and crossbones symbol is associated with which group of people?',
        // Array of Answers
        answers: [
            {text: 'Doctors', correct: false},
            {text: 'Pirates', correct: true},
            {text: 'Witches', correct: false},
            {text: 'Sorcerers', correct: false}
        ]
    }

]