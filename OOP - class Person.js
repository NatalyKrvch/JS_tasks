// Task description:

// You need to create a Person class from which we can create instances of people. Class constructor will accept 2 parameters:
// 1. name - a person’s name
// 2. age - number of full years
// You also need to implement compareAge method in the Person class. 
// It takes the Person class instance and compares the values of the full years.
// This method should return the result in the following format: If one person has more or equal years than another, 
// display the message via alert "name1 older than name2". Otherwise "name1 is less than name2".

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    compareAge(person) {
        if (this.age > person.age) {
            alert(`${this.name} is older than ${person.name}`);
        } else {
            alert(`${this.name} is younger than ${person.name}`);
        }
    }
}