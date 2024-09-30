//QUIZ.JS
//constructor(): Initializes the quiz state, including score and loaded questions.
// fetchQuestions(): Fetches questions from the JSON file and stores them.
// startQuiz(): Begins the quiz process, displaying the first question.

export class Quiz {
    constructor() {
        this.loadedQuestions = [];
        this.score = 0;
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

    startQuiz() {
        //reset score to 0
        this.score = 0;
        //fetch new questions
        this.fetchQuestions()

    }

}