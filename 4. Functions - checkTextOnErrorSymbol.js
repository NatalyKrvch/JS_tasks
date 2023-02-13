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
            errorCallback(`Forbidden symbol was found"${errorSymbol}". Its index is ${i}.`);
            countErrors += 1;
        }
    }

    if (successCallback && countErrors === 0) {
        successCallback('No forbidden symbols in this text');
    }
}