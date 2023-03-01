// Task description: 

// Your task now is to create a function that will return the number of days until the next birthday. 
// This function should accept 1 parameter, which is a date object and indicates the date of your nearest birthday. 
// The year should be the closest to the current date, not the year of your birth.

const convertMsToDays = (ms) => Math.round(ms / 1000 / 60 / 60 / 24);

const getDaysBeforeBirthday = (birthdayDate) => {
    const currentDateMs = Date.now();
    const birthdayDateMs = birthdayDate.getTime();
    return convertMsToDays(birthdayDateMs - currentDateMs);
}

console.log(getDaysBeforeBirthday(new Date(2021, 11, 10)))
