function getAvgNumber(number){
    let sum = 0;
    for (var i = 0; i < number.length; i++){
        const index = i;
        const element = number[index];
        sum += element;
    }
    let avg = sum / number.length;
    return avg;
}

var n = [26, 89, 64, 59, 87, 26, 99, 54, 62, 36, 21, 15, 95]
var getAvg = getAvgNumber(n);
console.log(getAvg);