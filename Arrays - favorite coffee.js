// Task description:

// Imagine you have a friend Alex who owns a coffee shop. He wants to make a website for this coffee shop so people can order coffee to go. 
// The most important feature Alex wants to see is finding coffee by name.
// Your friend asks you to help him with site development.
// Initially, you have a coffees array that stores all the kinds of coffee that Alex has at the coffee shop. 
// Drinks here are in the order of popularity. So "Latte" is the most popular coffee.
// coffees = ['Latte', 'Cappuccino', 'Americano'];
// With the prompt function you need to request the name of the coffee. Send a prompt message "Find your favourite coffee by its name:". 
// If entered coffee exists, display the message with the alert "Here is your favourite coffee favoriteCoffee. It's number in our ranking." 
// where coffee is the name of the found coffee, number - the number of the found coffee in the array coffees. If coffee was not found, 
// display the message "Unfortunately, this kind of coffee is unavailable".
// Terms:
// 1. The name of the coffee should be case-insensitive. So if the user prints "lATte", the result should be "Latte"
// 2. You must use findIndex.


let favoriteCoffeeName = prompt('Find your favourite coffee by its name:');
favoriteCoffeeName = favoriteCoffeeName.trim().toLowerCase();

const favoriteCoffeeIndex = coffees.findIndex((coffee) => coffee.toLowerCase() === favoriteCoffeeName);
const favoriteCoffee = coffees[favoriteCoffeeIndex];
if (favoriteCoffee) {
    alert(`Here is your favourite coffee ${favoriteCoffee}. It's ${favoriteCoffeeIndex + 1} in our ranking.`);
} else {
    alert('Unfortunately, this kind of coffee is unavailable');
}
