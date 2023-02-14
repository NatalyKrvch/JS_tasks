let favoriteCoffeeName = prompt('Find your favourite coffee by its name:');
favoriteCoffeeName = favoriteCoffeeName.trim().toLowerCase();

const favoriteCoffeeIndex = coffees.findIndex((coffee) => coffee.toLowerCase() === favoriteCoffeeName);
const favoriteCoffee = coffees[favoriteCoffeeIndex];
if (favoriteCoffee) {
    alert(`Here is your favourite coffee ${favoriteCoffee}. It's ${favoriteCoffeeIndex + 1} in our ranking.`);
} else {
    alert('Unfortunately, this kind of coffee is unavailable');
}