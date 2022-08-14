// //Problem:1 
// //radianToDegree 

// function radianToDegree(radian) {
//     if (typeof radian === typeof 0 && radian >=0){    
//         let convert = radian * 180 / 3.1416;
//         let fixedPoint = convert.toFixed(2);
//         let degree = parseFloat(fixedPoint);
//         return degree;
//     }
//     else{
//         return "Plese enter a valid number"
//     }

// }
// console.log(radianToDegree(0));


// // __________________________________

// //Problem:2
// //isJavaScriptFile

// function isJavaScriptFile(fileName) {
//     if (typeof fileName === typeof ""){
//         const checking = fileName.endsWith(".js");
//         return checking;   
//     }
//     else{
//         return "please enter a string"
//     }
// }
// // console.log(isJavaScriptFile("5.js"));


// // __________________________________



// //Problem:3
// //oilPrice 

// function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
//     if (typeof dieselQuantity === typeof 0 && dieselQuantity >=0){
//         if (typeof petrolQuantity === typeof 0 && petrolQuantity >=0){
//             if (typeof octaneQuantity === typeof 0 && octaneQuantity >=0){
//                 const dieselPerLitre = 114;
//                 const petrolPerLitre = 130;
//                 const octanePerLitre = 135;
            
//                 const dieselprice = dieselQuantity * dieselPerLitre;
//                 const petrolPrice = petrolQuantity * petrolPerLitre;
//                 const octanePrice = octaneQuantity * octanePerLitre;
//                 const totalPrice = dieselprice + petrolPrice + octanePrice;
//                 return totalPrice;
//             }
//             else{
//                 return "Plese enter a valid number"
//             }
//         }
//         else{
//             return "Plese enter a valid number"
//         }
//     }
//     else{
//         return "Plese enter a valid number"
//     }
// }

// // console.log(oilPrice(30, 20, 10));


// // __________________________________



// //Problem:4 
// // publicBusFare 

// function publicBusFare(totalPassenger){
//     if (typeof totalPassenger === typeof 0 && totalPassenger >=0){
//         const reservedBus = 50;
//         const microBus = 11;
//         const publicBusTicket = 250;
       
//         let busRemaining = totalPassenger % reservedBus ;
//         let microBusRemaining = busRemaining % microBus;
//         let publicBus = publicBusTicket * microBusRemaining;
       
//         return publicBus;
//     }
//     else{
//         return "please enter a valid number input"
//     }
   
// }

// // UserInput - 50, 55, 112, 235, 365
// // const totalPublicBusCost = publicBusFare(10);
// // console.log(totalPublicBusCost);



// // __________________________________

// // Problem:5 
// // isBestFriend 

// // const object1 = { name: "abul", friend: "babul" };
// // const object2 = { name: "babul", friend: "abul" };

// function isBestFriend(object1, object2) {
//     if (typeof object1 === typeof {} && typeof object2 === typeof {}){
//         if(object1.name === object2.friend && object1.friend === object2.name){
//             return true;
//         }else{
//             return false
//         }
//     }
//     else{
//         return "please enter a object"
//     }
// }

// // console.log(isBestFriend(object1, object2));

// let arr = [2,3, ["a", "b", {name :"rajin", number: [2,5,6]}]]
// console.log(arr[2][2].number[2]);
const object1 = { name: "abul", friend: "babul" };
object1.name = "nm"
console.log(object1);