// Task description:

// You must create getSumOfNumbers function. It will calculate the sum from 0 to the passed number. 
// getSumOfNumbers takes 2 parameters: number and type.
// The number parameter is the number to which the sum is calculated. 
// If the number 10 was passed, the function should calculate the sum from 0 to 10 (0 + 1 + 2 + ... + 10).
// The type parameter is responsible for selecting the numbers to calculate the sum. It can be 3 values: 
// "odd", "even" and "". If type equals "odd", then the sum should include only odd numbers, "even" - even numbers, and the empty string "" - all numbers. 
// By default, the type parameter should be odd.


const getSumOfNumbers = (number, type = 'odd') => {
    let sum = 0;
    for (let i = 0; i <= number; i += 1) {
        const isEven = i % 2 === 0;
        const isOdd = !isEven;
        if (!type) {
            sum += i;
        } else if (isEven && type === 'even') {
            sum += i;
        } else if (isOdd && type === 'odd') {
            sum += i;
        }
    }

    return sum;
}
