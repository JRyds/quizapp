// APP.JS

//Instantiate Classes: Create instances of the Quiz, Timer, and any other necessary classes.

// Fetch Questions: Call the fetchQuestions method from the Quiz class to load the questions from the
// JSON file.

// Start the Quiz: After fetching questions, call the startQuiz method to display the first question.

// Set Up Event Listeners: Add event listeners for user interactions, such as answer button clicks.
// These listeners would call methods from the AnswerHandler or Question classes to handle user responses.

// Manage Quiz Flow: Control the overall flow of the quiz by coordinating between the Quiz,
// Question, and Timer classes, ensuring that questions are displayed, scores are updated,
// and the timer is managed appropriately.

// Handle End of Quiz: Determine when the quiz is over (e.g., when there are no more questions) and
// handle the display of the final score or any other end-of-quiz actions.

import { Quiz } from './Question.js';

const quiz = new Quiz;
console.log(quiz);

