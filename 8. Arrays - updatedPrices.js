// Task description:

// You initially have 2 arrays: coffees (keeps the names of coffee) and prices (keeps the prices of coffee). 
// Indexes for coffee names and prices are interrelated. That is, "Latte" costs 1.5 euros, "Cappuccino" - 1 euros.
// coffees = ['Latte', 'Cappuccino', 'Americano'];
// prices = [1.5, 1, 2];
// You need to create a new array that will contain the same numbers from the prices array, but only increased by 0.5. 
// After the price rise you need to notify the customers of the coffee shop, so print for each type of coffee message via alert 
// "Coffee name now costs price euro", where name is the name of coffee and price is the updated price of coffee.
// Terms:
// 1. You must use the map and forEach array methods

const coffees = ['Latte', 'Cappuccino', 'Americano'];
const prices = [1.5, 1, 2];

const updatedPrices = prices.map((price) => price + 0.5);

coffees.forEach((coffeeName, index) => {
    alert(`${coffeeName} costs ${updatedPrices[index]}$ now.`);
});
