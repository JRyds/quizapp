export class Questions {
    constructor() {
        this.loadedQuestions = [];
    }

    fetchQuestions() {
        return fetch('questions.json') // Return the fetch promise
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Convert the response to JSON
            })
            .then(loadedQuestions => {
                this.loadedQuestions = loadedQuestions[0].questions; // Access the questions
            })
            .catch(error => {
                console.error('Error fetching JSON:', error); // Log any errors
            });
    }

    handleDisplayQuestion() {
        if (this.loadedQuestions.length === 0) {
            console.log("No more questions available.");
            return;
        }

        const randomIndex = Math.floor(Math.random() * this.loadedQuestions.length);
        const randomQuestion = this.loadedQuestions[randomIndex];

        document.getElementById('question').textContent = randomQuestion.question;
        document.getElementById('answerA').textContent = randomQuestion.options[0];
        document.getElementById('answerB').textContent = randomQuestion.options[1];
        document.getElementById('answerC').textContent = randomQuestion.options[2];
        document.getElementById('answerD').textContent = randomQuestion.options[3];

        // Add event listeners for answer buttons here
        const answerButtons = document.querySelectorAll('.answerButton');
        answerButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                this.handleAnswer(randomQuestion.options[index], randomQuestion.answer);
            });
        });

        this.loadedQuestions.splice(randomIndex, 1);
    }
}
