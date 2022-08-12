function toFeet(inch){
    return inch/12;
}
function toInch(feet){
    return feet*12;
}
let myHeightInFeet = toInch(5.6);
let myHeightInInch = toFeet(myHeightInFeet);
myHeightInInch = myHeightInInch.toFixed(2);
myHeightInFeet = myHeightInFeet.toFixed(2);
console.log(myHeightInFeet);
console.log(myHeightInInch);