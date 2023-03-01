// Task descriptions:

// Create a function that should output the message "How do you rate our coffee shop from 1 to 10?" via prompt. 
// If you have entered a number from 1 to 10, add this score to the array, otherwise do not do anything.
// To add assessments, call this function 5 times. Use for loop.
// Once the scores are added, you need to count positive and negative scores. Positive is the number greater than 5, 
// negative - the number less in 5 or equal to 5. Print the alert message "Total positive ratings: goodEstimations; Total negative ratings: notGoodEEations" 
// where goodEstimations - number of positive ratings, a notGoodEstimations - the number of negative ratings.
// Terms:
// 1. Use filter method.

const clientsEstimations = [];

const askClientToGiveEstimation = () => {
    const clientEstimationString = prompt('How do you rate our coffee shop from 1 to 10?');
    const clientEstimation = Number(clientEstimationString.trim());
    if (clientEstimation >= 1 && clientEstimation <= 10) {
        clientsEstimations.push(clientEstimation);
    }
}

for (let i = 0; i < 5; i += 1) {
    askClientToGiveEstimation();
}

const goodEstimations = clientsEstimations.filter((estimation) => estimation > 5);
const notGoodEstimations = clientsEstimations.filter((estimation) => estimation <= 5);

alert(`Total positive ratings: ${goodEstimations.length}; Total negative ratings: ${notGoodEstimations.length}`);
