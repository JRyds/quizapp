questionObject = {
    "id": 1,
    "question": "What is the chemical symbol for water?",
    "options": ["H2O", "O2", "CO2", "NaCl"],
    "answer": "H2O"
}

let currentAnswer = questionObject.answer;
console.log(`current answer is ${currentAnswer}`);

let answerBank = questionObject.options;
console.log(`answerbank contains ${answerBank}`);

let randomiseAnswers = answerBank.sort(() => Math.random() - 0.5);
console.log(`randomised answers are now: ${randomiseAnswers}`);


document.getElementById('answerA').textContent = randomiseAnswers[0];
document.getElementById('answerB').textContent = randomiseAnswers[1];
document.getElementById('answerC').textContent = randomiseAnswers[2];
document.getElementById('answerD').textContent = randomiseAnswers[3];


let selectedAnswer;

const optionButtons = document.querySelectorAll('.answerButton');

optionButtons.forEach(button => {
    button.addEventListener('click', function () {
        selectedAnswer = this.textContent; // Save the clicked button's text in selectedAnswer
        console.log(selectedAnswer); // Optional: log the selected answer
        if (selectedAnswer !== currentAnswer) {
            this.style.backgroundColor = 'red';
        }
    });
});