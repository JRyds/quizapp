//QUESTION.JS
//constructor(questionData): Initializes a question object with its text, options, and correct answer.
// display(): Updates the DOM to show the question and its answer options.
// highlightCorrectAnswer(): Highlights the correct answer when the user selects an incorrect option.

import { Quiz } from "./Quiz";

export class Question {
    constructor(questionData) {
        this.loadedQuestions = Quiz.loadedQuestions;
        this.questionText = questionData.question;
        this.options = questionData.options;
        this.correctAnswer = questionData.answer;
    }


    handleDisplayQuestion() {
        //check if run out of questions

        option - buttons.forEach(button => {
            button.classList.remove('incorrect'); // Remove the incorrect class
        });

        if (this.loadedQuestions.length === 0) {
            console.log("No more questions available.");
            return;
        }
        //select a random quesiton remaing from the pool
        const randomIndex = Math.floor(Math.random() * this.loadedQuestions.length);
        const randomQuestion = this.loadedQuestions[randomIndex];

        // Shuffle the options array to randomize the answer order
        randomQuestion.options.sort(() => Math.random() - 0.5);

        //assign question elements to the correct items
        this.currentQuestionAnswer = randomQuestion.answer;
        document.getElementById('question').textContent = randomQuestion.question;
        document.getElementById('answerA').textContent = randomQuestion.options[0];
        document.getElementById('answerB').textContent = randomQuestion.options[1];
        document.getElementById('answerC').textContent = randomQuestion.options[2];
        document.getElementById('answerD').textContent = randomQuestion.options[3];

        //remove current question from the pool
        this.loadedQuestions.splice(randomIndex, 1);
    }


}