function getLowestNumber(number) {
  let lowestNumber = number[0];
  for (var i = 0; i < number.length; i++) {
    const index = i;
    const element = number[index];
    if (element < lowestNumber) {
      lowestNumber = element;
    }
  }
  return lowestNumber;
}

var a = [26, 89, 64, 59, 87, 26, 99, 54, 62, 36, 21, 15, 95];
var getLowest = getLowestNumber(a);
console.log(getLowest);

// function number (num1, num2, num3){
//     if (num1<num2 && num1<num3){
//         console.log(num1, "is Lowest Number");
//     }
//     else if (num2<num1 && num2<num3){
//         console.log(num2, "is Lowest Number");
//     }
//     else{
//         console.log(num3, "is Lowest Number");
//     }
// }
// number(15,87,2);
