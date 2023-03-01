// Task description:

// You need to create a function that will work with objects.
// The function takes 3 parameters:
// 1. obj. The object with which the function will work
// 2. key. object key
// 3. action. The action we will take over the object
// The action parameter can be 4 values:
// 1. 'get'. If the action is 'get', the function should return the key value in the obj object.
// 2. 'add'. If the action is 'add', the function must add a new key to the object and assign an empty string "". 
//     The updated obj must also be returned from the function.
// 3. 'delete'. If the action is 'delete', the function should remove the key property from the object and return the updated object. 
// If the action is equal to any other value, the function must return obj.

const handleObject = (obj, key, action = 'get') => {
    switch (action) {
        case 'get':
            return obj[key];
        case 'delete': {
            delete obj[key];
            return obj;
        }
        case 'add':
            obj[key] = '';
            return obj;
        default:
            return obj;
    }
}

const student = {
    name: 'Nazar',
    programmingLanguage: 'JavaScript',
}

const result = handleObject(student, 'programmingLanguage', 'delete');
console.log('result', result);
