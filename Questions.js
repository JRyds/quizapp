export class Questions {

    constructor(score) {
        this.loadedQuestions = [];
        this.score = 0
        this.currentQuestionAnswer = null;
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
        //check if run out of questions
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

    //receive user answer and check against correct answer and update score then call new quesiton
    handleAnswer(userAnswer) {
        if (userAnswer === this.currentQuestionAnswer) {
            this.score += 1;
            document.getElementById('score-count').textContent = this.score;

        } else {
            console.log("incorrect");
        }
        this.handleDisplayQuestion();
    }
}
