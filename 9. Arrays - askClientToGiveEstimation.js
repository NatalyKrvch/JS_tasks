const clientsEstimations = [];

const askClientToGiveEstimation = () => {
    const clientEstimationString = prompt('Rate our work from 1 to 10');
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

console.log(goodEstimations, notGoodEstimations);

alert(`Positive feedback: ${goodEstimations.length}; Negative feedback: ${notGoodEstimations.length}`);