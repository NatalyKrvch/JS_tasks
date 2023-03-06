// Task description:

// You need to rewrite this code, which uses then, catch and finally, 
// into code that uses async await and try, catch, finally.

// const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
// let isLoading = false;
// const createNewPost = () => {
//     isLoading = true;
//     fetch(POSTS_URL, {
//         method: 'POST',
//     })
//         .then((response) => response.json())
//         .then((result) => {
//             console.log('result', result)
//         })
//         .catch((error) => {
//             console.log('error', error)
//         })
//         .finally(() => {
//             isLoading = false;
//         });
// };
// createNewPost();

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
let isLoading = false;
const createNewPost = async () => {
    try {
        isLoading = true;
        const response = await fetch(POSTS_URL, { method: 'POST' });
        const result = await response.json();
        console.log('result', result)
    } catch (error) {
        console.error('Error', error);
    } finally {
        isLoading = false;
    };
};
createNewPost();