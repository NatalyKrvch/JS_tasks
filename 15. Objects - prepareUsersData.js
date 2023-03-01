// Task description:

// There is an array of data about each client of the bank. 
// It is necessary to create a function that will display an array of users older than 18 and separately about those who have a credit card debt

const userList = [{
    firstName: 'Bob',
    lastName: 'Marley',
    age: 21,
    balance: '12.2$'
},
{
    firstName: 'Ariana',
    lastName: 'Grande',
    age: 17,
    balance: '162$'
},
{
    firstName: 'Bill',
    lastName: 'Gates',
    age: 18,
    balance: '15.4$'
},
{
    firstName: 'John',
    lastName: 'Bonjovi',
    age: 19,
    balance: '-12.0$'
}
];


function preparedData(users) {
    const mappedUsers = users.filter(item => item.age >= 18).map(x => {
        return {
            age: x.age,
            name: x.firstName + ' ' + x.lastName,
            balance: x.balance
        };
    });
    const balanceSum = mappedUsers.reduce((sum, item) => {
        return sum += +item.balance.replace('$', '');
    }, 0);
    mappedUsers.push({ userBalanceSum: parseFloat(balanceSum).toFixed(2) + '$' });
    console.log(mappedUsers);

    const userNegativeBalance = mappedUsers.find(user => +user.balance.replace('$', '') < 0);
    console.log(userNegativeBalance);
}

preparedData(userList); 
