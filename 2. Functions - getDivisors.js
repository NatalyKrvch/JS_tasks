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
