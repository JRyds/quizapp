1. app.js to quiz.js
   Message: Fetch questions
   Method Call: quiz.fetchQuestions()
   Purpose: To load the questions into the Quiz class.

2. quiz.js to question.js
   Message: Display a question
   Method Call: question.display(questionData)
   Purpose: To show the current question and its options in the UI.

3. quiz.js to answerHandler.js
   Message: Handle user's selected answer
   Method Call: answerHandler.handleAnswer(selectedAnswer, currentQuestionAnswer)
   Purpose: To check the selected answer against the correct answer and update the score.

4. answerHandler.js to quiz.js
   Message: Update score
   Data: score
   Purpose: To inform the Quiz class that the score has been updated
   (if applicable, this can also return the updated score for UI purposes).

5. question.js to quiz.js
   Message: Highlight the correct answer
   Method Call: question.highlightCorrectAnswer()
   Purpose: To visually indicate the correct answer when the user selects incorrectly.

6. quiz.js to timer.js
   Message: Start/stop timer
   Method Call: timer.startTimer(duration) / timer.stopTimer()
   Purpose: To manage the quiz timing for each question.

7. app.js to timer.js
   Message: Update timer display
   Method Call: timer.updateDisplay(timeLeft)
   Purpose: To reflect the remaining time on the UI.

8. quiz.js to app.js
   Message: End of quiz
   Method Call: app.displayFinalScore(score)
   Purpose: To display the final score to the user when there are no more questions.

Overall Flow

    Initialization: app.js instantiates the Quiz, Timer, and AnswerHandler classes and calls quiz.fetchQuestions().

    Display Question: Once questions are fetched, quiz.js handles displaying a question by calling question.display().

    Answer Handling: User clicks an answer button, app.js sends the selected answer to answerHandler for checking.

    Score Update: Depending on the correctness of the answer, the score is updated, and the UI reflects the correct answer if the selection was incorrect.

    Timer Management: Timer starts for each question and updates accordingly, with notifications for when time runs out or when the question is answered.

    End of Quiz: Once all questions are answered, the final score is displayed to the user.
    This structured communication will help ensure that each class only concerns itself with its specific responsibilities, improving the overall design of your application. Let me know if you need any further assistance!
