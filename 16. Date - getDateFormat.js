const addZero = (numberStr) => String(numberStr).length === 1 ? `0${numberStr}` : String(numberStr);

const getDateFormat = (date, separator = '.') => {
    const dateItem = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const dateArray = [dateItem, month + 1, year].map((item) => addZero(item));
    console.log('dateArray', dateArray)

    return dateArray.join(separator);
}

console.log(getDateFormat(new Date()));