function getSingara(money) {
    var price = 7;
    var giveSingara = money / price;
    giveSingara = parseInt(giveSingara)
    return giveSingara;
}
function returnMoney(money) {
    var price = 7;
    var moneyReturn = money % price;
    return moneyReturn;
}
var singara = getSingara(65);
var getMoneyBack = returnMoney(65);

console.log(singara);
console.log(getMoneyBack);
