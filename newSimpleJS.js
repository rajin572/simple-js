// var math = 75.25;
// var bangla = 35.45;
// var management = 80;
// var economics = 65;
// var accounting = 99.50;

// var totalNumber = math+bangla+management+economics+accounting;
// console.log(totalNumber);
// var avarege = totalNumber/5;
// avarege = avarege.toFixed(8);
// avarege = parseFloat(avarege)
// console.log(avarege);

function publicBusFare(people) {
    const publicBusTicketPrice = 250;
    if (typeof people != 'number') {
        let bus = people % 50;
        let microBus = bus % 11;
        let publicBus = microBus;
        let totalPublicBusTicketPrice = publicBusTicketPrice * publicBus;
        return totalPublicBusTicketPrice;
    }
    else {
        return "please enter a number input"
    }
}
let peoples = true;
let result = publicBusFare(peoples);
console.log(result);