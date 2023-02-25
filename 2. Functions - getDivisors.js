// Task description:

// You need to create a getDivisorsCount function that will calculate the number of divisors for the passed number. It takes the only number parameter.
// By default it should be 1.
// If the number is less than zero or is not an integer (you can check it with Number.isInteger(number)), 
// then display the alert message "number should be more than 0 and also integer!".


function getDivisors(number = 1) {
    if (!Number.isInteger(number) || number < 0) {
        alert('number should be more than 0 and also integer!');
    } else {
        let counter = 0;
        for (let i = number; i > 0; i -= 1) {
          const isDivisor = number % i === 0;
          if (isDivisor) {
              counter += 1;
          }
        }
      
        return counter;   
    }
}
