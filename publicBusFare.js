function publicBusFare(people){
    if (typeof people === typeof 0){

        const busCapacity = 50;
        const microbusCapacity = 11;
        const publicBusTicketPrice = 250;
    
        if (people / busCapacity >=1){
            let busNeeded = Math.floor(people / busCapacity)
            let busPassengers = busCapacity*busNeeded;
            let remainingPassengers = people - busPassengers;
    
            if(remainingPassengers / microbusCapacity >=1){
                let microbusNeeded = Math.floor(remainingPassengers / microbusCapacity)
                let microbusPassengers = microbusCapacity*microbusNeeded;
                let remainingPeople = remainingPassengers - microbusPassengers;
    
                let totalPublicBusTicketPrice = remainingPeople*publicBusTicketPrice
                return totalPublicBusTicketPrice;
            }
            else{
                let totalPublicBusTicketPrice = remainingPassengers*publicBusTicketPrice
                return totalPublicBusTicketPrice;
            }
    
        }
        else if (people / microbusCapacity >=1){
            let microbusNeeded = Math.floor(people / microbusCapacity)
            let microbusPassengers = microbusCapacity*microbusNeeded;
            let remainingPeople = people - microbusPassengers;
    
            let totalPublicBusTicketPrice = remainingPeople*publicBusTicketPrice
            return totalPublicBusTicketPrice;
        }
        else{
            let totalPublicBusTicketPrice = people*publicBusTicketPrice
            return totalPublicBusTicketPrice;
        }
    }
    else{
        return "please enter a number input"
    }
}
let peoples = 365;
let result = publicBusFare(peoples);
console.log(result);