// recursion : kono ek function er bitor theke oi function ke call korle take recursion bole 
// recursion is similar to loop


function recurction(i) {
    if (i === 1) {
        return 1
    }
    return i + recurction(i - 1);
}
console.log(recurction(10));
