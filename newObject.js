var person = {
    name: "noor",
    gender: "female",
    year: 21,
    type: "cute",
    relationStatus: " single"
}

// console.log(person.relationStatus);
// person.relationStatus = "mingle";
// console.log(person)
var propartis = Object.keys(person)
var value = Object.values(person)
// console.log(propartis);
// console.log(value);

var propartisName = "name";S
var propartisevale = person[propartisName];
// console.log(propartisName,":" , propartisevale);
// console.log("i need some","money");

// get looping
// for (var i = 0; i< propartis.length; i++){
//     var propartisNames = propartis[i];
//     var val = value[i]
//     console.log(propartisNames, val);
// }



const mySelf = {
    name: "Rajin",
    age: 21,
    occupation: "student",
    relationStatus: "single",
    phone: 01647742754,
}
// const items = "age";
// const values = mySelf[items];
// console.log(items , values);
const keys = Object.keys(mySelf)
// console.log(keys);
for (var i = 0; i <= keys.length; i++) {
    const item = keys[i];
    const value = mySelf[item];
    const getResult = "your key is " + item + " your value is " + value;
    console.log(getResult);
}