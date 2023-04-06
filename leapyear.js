function leapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "Leap year"
            }
            return "Not a leap year"
        }
        return "leap year"
    }
    return "not a leap year"
}

const myYear = leapYear(2000);
console.log(myYear); 