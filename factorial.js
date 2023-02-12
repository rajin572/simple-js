function factorial(num) {
    let multi = 1;
    for (var i = num; i >= 1; i--) {
        multi = multi * i;
    }
    return multi
}
let number = 9;
let getFactorial = factorial(number);
console.log(getFactorial);