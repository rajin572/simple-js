function positiveNumbers(num) {
    let positive = [];
    for (var i = 0; i < num.length; i++) {
        const element = num[i];
        if (element >= 0) {
            positive.push(element);
        }
        else {
            break;
        }
    }
    return positive
}
let numbers = [0, 5, 9, 65, 14, 25, -66, 57, 69];

let getPositive = positiveNumbers(numbers);
console.log(getPositive);