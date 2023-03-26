// get the lowest number of an array
function price(array) {
  let lowestPrice = array[0];
  for (var i = 0; i < array.length; i++) {
    let element = array[i];
    if (element < lowestPrice) {
      lowestPrice = element;
    }
  }
  return lowestPrice;
}

var prices = [59, 264, 3615, 5, 22165];
var getLowestPrice = price(prices);
console.log(getLowestPrice);

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // get the lowest age from an array of object

function presons(array) {
  let lowestpresons = array[0];
  for (var i = 0; i < array.length; i++) {
    let element = array[i];
    if (element.age < lowestpresons.age) {
      lowestpresons = element;
    }
  }
  return lowestpresons;
}

var presonss = [
  {
    name: "karim",
    age: 58,
  },
  {
    name: "sarim",
    age: 68,
  },
  {
    name: "marim",
    age: 18,
  },
  {
    name: "jarim",
    age: 28,
  },
  {
    name: "tarim",
    age: 98,
  },
  {
    name: "karim",
    age: 58,
  },
  {
    name: "warim",
    age: 8,
  },
  {
    name: "narim",
    age: 5,
  },
];
var getLowestpresons = presons(presonss);
console.log(getLowestpresons);
