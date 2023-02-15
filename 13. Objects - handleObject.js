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
