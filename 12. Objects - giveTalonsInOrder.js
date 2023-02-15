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