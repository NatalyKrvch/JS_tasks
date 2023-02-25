// Task description:

// Imagine you’re developing a ticket program for a local hospital. Previously, tickets were issued manually and you need to optimize this task.
// You need to create a function that sorts the queue from patients. It takes 2 parameters:
// 1. patients - an array of objects. Each object stores information about the patient’s name and unique number - id.
// 2. orders - an array of unique id numbers that specifies the order in which patients should queue. 
// The function should return a new array in which the objects in the patients array will be sorted by id from the orders array.

const ordersArr = [4, 2, 1, 3];
const people = [
    {id: 1, name: "Max"},
    {id: 2, name: "Nick"},
    {id: 3, name: "Andjela"},
    {id: 4, name: "Harry"},
];

function giveTalonsInOrder (patients, orders) {
    result = [];
    orders.forEach(orderNumber => {
        let item = patients.find(patientItem => {return patientItem.id === orderNumber});
        result.push(item);
    });
   return result;
}

let res = giveTalonsInOrder(people, ordersArr);
console.log('result :',res)
