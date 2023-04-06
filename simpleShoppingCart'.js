var products = [
    {
        name: "shirt",
        price: 4000,
        quantity: 5
    },
    {
        name: "Pant",
        price: 5000,
        quantity: 5
    },
    {
        name: "shoe",
        price: 2000,
        quantity: 2
    },
    {
        name: "belt",
        price: 400,
        quantity: 2
    },
    {
        name: "sunGlass",
        price: 900,
        quantity: 3
    },
    {
        name: "watch",
        price: 4000,
        quantity: 2
    },
];

function getSum(ary) {
    let sum = 0;
    for (var i = 0; i < ary.length; i++) {
        const index = [i];
        const product = ary[index];
        let productTotal = product.price * product.quantity;
        sum += productTotal;
    }
    return sum;
}

var giveToFunction = getSum(products);
console.log(giveToFunction);
