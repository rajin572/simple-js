function getYears(years) {
  let leapYears = [];
  for (var i = 0; i < years.length; i++) {
    const index = i;
    let element = years[index];

    if (element % 4 === 0) {
      if (element % 100 === 0) {
        if (element % 400 === 0) {
          leapYears.push(element);
        } else {
        }
      } else {
        leapYears.push(element);
      }
    } else {
    }
  }
  return leapYears;
}
let yearsInArray = [2000, 2004, 2020, 1258, 1555];
let getLeapYear = getYears(yearsInArray);
console.log(getLeapYear);
