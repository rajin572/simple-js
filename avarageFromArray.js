function getAvgNumber(number) {
    let sum = 0;
    for (var i = 0; i < number.length; i++) {
        const index = i;
        const element = number[index];
        sum += element;
    }
    let avg = sum / number.length;
    return avg;
}

var n = [57, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60]
console.log(n.length);
var getAvg = getAvgNumber(n);
console.log(getAvg);