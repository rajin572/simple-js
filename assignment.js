//************** Problem:1 ****************
//============ radianToDegree =============

function radianToDegree(radian){
    if (typeof radian === typeof 0 && radian >=0){
        let degree = radian*57.296;
        degree = parseFloat(degree.toFixed(2))
        return degree;
    }
    else{
        return "Plese enter a number"
    }

}
// let number = radianToDegree(5);
// console.log(number);



// --------------------------------------------------------------------------------------------------



//************** Problem:2 ****************
//=========== isJavaScriptFile ============

function isJavaScriptFile(fileName){
    if (typeof fileName === typeof ""){
        const checking = fileName.endsWith(".js");
        return checking;   
    }
    else{
        return "please enter a string"
    }
}
// let myFile = isJavaScriptFile("joke.js")
// console.log(myFile);




// ----------------------------------------------------------------------------------------------------------



//************** Problem:3 ****************
//=============== oilPrice ================

function oilPrice(diesel, petrol, octane){
    if (typeof diesel === typeof 0 && diesel >=0){
        if (typeof petrol === typeof 0 && petrol >=0){
            if (typeof octane === typeof 0 && octane >=0){
                let dieselPrice = 114;
                let petrolPrice = 130;
                let octanePrice = 135;
            
                let totalDieselprice = diesel*dieselPrice;
                let totalPetrolPrice = petrol*petrolPrice;
                let totalOctanePrice = octane*octanePrice;
            
                let totalOilPrice = totalDieselprice+totalPetrolPrice+totalOctanePrice;
                return totalOilPrice;
            }
            else{
                return "Plese enter a number"
            }
        }
        else{
            return "Plese enter a number"
        }
    }
    else{
        return "Plese enter a valid number"
    }
}

// let dieselQuantity= 30;
// let petrolQuantity = 20;
// let octaneQuantity = 10;
// let total = oilPrice(dieselQuantity, petrolQuantity, octaneQuantity);
// console.log(total);




// -------------------------------------------------------------------------------------------------------------


//************** Problem:4 ****************
//============ publicBusFare ==============

function publicBusFare(people){
    const publicBusTicketPrice = 250;
    if (typeof people === typeof 0 && people >=0){
        let bus = people % 50;
        let microBus = bus % 11;
        let publicBus = microBus;
        let totalPublicBusTicketPrice = publicBusTicketPrice * publicBus;    
        return totalPublicBusTicketPrice;
    }
    else{
        return "please enter a valid number input"
    }
}
// let peoples = 55;
// let result = publicBusFare(peoples);
// console.log(result);


// -------------------------------------------------------------------------------------------------------------




////************** Problem:5 ****************
//============== isBestFriend ===============

function isBestFriend(friendOne, friendTwo){
    if (typeof friendOne === typeof {} && typeof friendTwo === typeof {}){
        if (friendOne.name === friendTwo.friend && friendTwo.name === friendOne.friend){
            return true;
        }
        else{
            return false;
        }   
    }
    else{
        return "please enter a object"
    }
}

// let friendOneDetails  = {
//     name : "abul",
//     friend : "babul"
// }
// let friendTwoDetails  = {
//     name : "babul",
//     friend : "abul"
// }

// console.log(isBestFriend(friendOneDetails, friendTwoDetails));