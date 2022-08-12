// function getarray(numbers){
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++){
//         const index = i;
//         let element = numbers[index];
//         if (element%2 === 1){
//         sum += numbers[i];
//         }
//         else{}
//     }
//     return sum;
// }
// let myNum = [48, 99, 56, 94, 87, 25, 64];
// let sumOfOdd = getarray(myNum);
// console.log(sumOfOdd);





function oddSum(oddNumber){
    let sum = 0;
    for (var i = 0; i < oddNumber.length; i++){
        const index = i;
        let elements = oddNumber[index]
        sum += elements;
    }
    return sum;
}
function getOdd(number){
    let oddNumber = [];
    for (var i = 0; i < number.length; i++){
        const index = i;
        let elements = number[index];
        if (elements%2 !== 0){
            oddNumber.push(elements)
        }
    }
    return oddNumber;
}



let myNum = [48, 99, 56, 94, 87, 25, 64, 45, 29];
let getOddNumber = getOdd(myNum)
console.log(getOddNumber);
let sumOfOddNumber = oddSum(getOddNumber)
console.log(sumOfOddNumber);