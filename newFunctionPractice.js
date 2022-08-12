// function foo(){
//     console.log("foo");
//     bar();
// }
// function bar(){
//     console.log("bar");
// }
// foo();





// function marksAvg(num1 , num2, num3){
//     var sum = num1+num2+num3;
//     var avg = sum / 3;
//     return avg;
// }


// console.log(marksAvg(95, 95, 95));





function marks_Avg(number){
    var sum = 0;  
    for (var i =0; i < number.length; i++){
        sum += numbers[i];
    }
    var avg = sum / number.length;
    return avg;
}

var numbers = [85, 88, 65, 95, 100];
var avarageNumber = marks_Avg(numbers);
console.log(avarageNumber);

