var person = {
    name : "noor",
    gender : "female",
    year : 21,
    type : "cute",
    relationStatus :" single"
}

// console.log(person.relationStatus);
// person.relationStatus = "mingle";
// console.log(person)
var propartis = Object.keys(person)
var value = Object.values(person)
// console.log(propartis);
// console.log(value);

var propartisName = "name";
var propartisevale = person[propartisName];
// console.log(propartisName,":" , propartisevale);
// console.log("i need some","money");

// get looping
// for (var i = 0; i< propartis.length; i++){
//     var propartisNames = propartis[i];
//     var val = value[i]
//     console.log(propartisNames, val);
// }