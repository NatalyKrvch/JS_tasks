// Task description:

// You need to create a getSumOfSequence function that will create an array of numbers and calculate the sum of the first and last elements of the array.
// The function accepts one number parameter. Using this parameter, you need to create an array of numbers from 1 to this number. 
// For example, if the number given is 5, the array should be as follow: [1, 2, 3, 4, 5]
// The getSumOfSequence function should return the sum of the first and last elements of the resulting array.

const getSumOfSequence = (number) => {
    const finalArray = [];
    for (let i = 1; i <= number; i += 1) {
        finalArray.push(i);
    }

    return finalArray[0] + finalArray[finalArray.length - 1];
};
