function temp(celsius){
    let fahrenheit = 9/5*celsius +32;
    return fahrenheit
}
console.log(temp(32));




function temp2(fahrenheit){
    let celsius = (fahrenheit -32)* 5/9 ;
    return celsius
}
console.log(temp2(89.6));