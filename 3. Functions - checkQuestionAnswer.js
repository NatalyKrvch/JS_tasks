// Task:
// Your task is to create checkQuestionAnswer function, which will ask the user a question and automatically check the response.
// It accepts two parameters: question and correctAnswer.
// The question parameter is a question that will be given to the user and passed as a parameter to the prompt function.
// The correctAnswer parameter is the correct answer to the question. 
// You need to get the value that the user enters into the text box and check it against the correctAnswer parameter. 
// If the user has given the right answer, print the message "Correct answer" in the modal window, otherwise - "Wrong answer".
// Also *****in the code we need to take into account, if the user enters this string "aPplE" and the parameter correctAnswer will be "Apple", 
// the answer should still be counted as correct. That is, the answer should not depend on the case of the characters 
// and the number of spaces at the beginning and end of the answer

const checkQuestionAnswer = (question, correctAnswer) => {
    let userAnswer = prompt(question);
    userAnswer = userAnswer.trim().toLowerCase();
    if (correctAnswer.toLowerCase() === userAnswer) {
        alert('The answer is correct');
    } else {
        alert('The answer is NOT correct');
    }
}
