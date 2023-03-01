// Task description:

// You have been given a function that allows you to create object instances.
// Your task is to rewrite this function to a class.

// function Student(name, age) {
//     this.name = name;
//     this.age = age;
//     this.technologies = [];
//     this.status = 'Junior';

//     this.setTechnologies = function(technologies) {
//         this.technologies = [
//             ...this.technologies,
//             ...technologies,
//         ];
//     }

//     this.setNewStatus = function(newStatus) {
//         this.status = newStatus;
//     }
// }

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;

        this.technologies = [];
        this.status = 'Junior';
    }

    setTechnologies(technologies) {
        this.technologies = [
            ...this.technologies,
            ...technologies,
        ];
    }

    setNewStatus(newStatus) {
        this.status = newStatus;
    }
}