import { Questions } from './Questions.js';


const quiz = new Questions();

quiz.fetchQuestions().then(() => {
    quiz.handleDisplayQuestion(); // Display the first question

    // Setup event listeners for answer buttons
    const optionsDiv = document.getElementById('options');
    optionsDiv.addEventListener('click', (event) => {
        if (event.target.classList.contains('answerButton')) {
            const selectedOption = event.target.textContent;
            console.log(`This is the selected option: ${selectedOption}`);
            quiz.handleAnswer(selectedOption); // Pass the selected option to handleAnswer
        }
    });
});