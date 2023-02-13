const checkQuestionAnswer = (question, correctAnswer) => {
    let userAnswer = prompt(question);
    userAnswer = userAnswer.trim().toLowerCase();
    if (correctAnswer.toLowerCase() === userAnswer) {
        alert('The answer is correct');
    } else {
        alert('The answer is NOT correct');
    }
}