// Task description:

// Often we write the dates in the following format "day.month.year". Now you need to create a getDateFormat function that will bring the date to this format. 
// It accepts 2 parameters:
// 1. date is the date object to be translated into this text format "day.month.year"
// 2. separator - divider of day, month and year. By default, it should be the "." 
//    If "-" (dash) is passed as the separator, the format should already be the "day-month-year"
// Also, note that if a day or a month is returned a single digit number, then you need to add 0 to it. So the result should not be "5.5.2001" but "05.05.2001".

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
