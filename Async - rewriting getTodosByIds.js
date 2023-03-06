// Task description:

// You need to rewrite this code, which uses then, catch and finally, 
// into code that uses async await and try, catch, finally.

// const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
// const getTodosByIds = (ids) => {
//     const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
//     Promise.all(requests)
//         .then((responses) => {
//             const dataResults = responses.map((data) => data.json());
//             return Promise.all(dataResults)
//         })
//         .then((allTasks) => {
//             console.log(allTasks);
//         })
//         .catch((error) => {
//             console.log(error);
//         })
// }
// getTodosByIds([43, 21, 55, 100, 10]);


const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
const getTodosByIds = async (ids) => {
    try {
        const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
        const responses = await Promise.all(requests);
        const allTasks = await Promise.all(responses.map((data) => data.json()));
        console.log('allTasks', allTasks);
    } catch (error) {
        console.error(error);
    }
};

getTodosByIds([43, 21, 55, 100, 10]);