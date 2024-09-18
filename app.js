import { Questions } from './Questions.js';


document.addEventListener("DOMContentLoaded", () => {
    const quiz = new Questions();
    console.log(`is quiz? ${quiz}`);

    quiz.fetchQuestions().then(() => {
        quiz.handleDisplayQuestion(); // Call this after questions are fetched
    });
});