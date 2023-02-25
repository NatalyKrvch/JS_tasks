Let's create two functions. They will be our future callbacks:
1. showSuccessMessage - accepts the message parameter and displays it to the console via console.log
2. showErrorMessage - accepts the message parameter and prints it to the console via console.error

// Task description:

// Then you need to create another function called checkTextOnErrorSymbol. 
// With it, we will search the text for the forbidden symbol and display an error in the console if such a symbol was found.

// checkTextOnErrorSymbol takes 4 parameters:
// 1. text. Responsible for the text in which we will search for the forbidden symbol
// 2. errorSymbol. This is the forbidden symbol we will be looking for
// 3. successCallback is a function that will display a successful message if no forbidden symbols have been found
// 4. errorCallback is a function that will display an error in the console if forbidden symbol has been found. 
// If forbidden symbol has been found, call the errorCallback and pass the message "Forbidden symbol "${errorSymbol}" was found. Its index is ${i}." 

// If no forbidden symbols have been found in the string, call the successCallback colback and pass the message 
// "There are no forbidden symbols in this text" to it.

const showSuccessMessage = (message) => {
    console.log(message);
}

const showErrorMessage = (message) => {
    console.error(message);
}

const checkTextOnErrorSymbol = (text, errorSymbol, successCallback, errorCallback) => {
    let countErrors = 0;
    for (let i = 0; i < text.length; i += 1) {
        const currentSymbol = text[i];
        if (currentSymbol === errorSymbol && errorCallback) {
            errorCallback(`Forbidden symbol "${errorSymbol}" was found. Its index is ${i}.`);
            countErrors += 1;
        }
    }

    if (successCallback && countErrors === 0) {
        successCallback('There are no forbidden symbols in this text');
    }
}
