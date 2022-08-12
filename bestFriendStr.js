function bestFriend(names){
    let higher = names[0];
    for (var i = 0; i < names.length; i++){
        const element = names[i];
        if (element.length > higher.length){
            higher = element
        }
    }
    return higher
}

let myBestFriends = ["salahuddin", "israfil", "hemel", "alif", "rokon"];

let getHigher = bestFriend(myBestFriends);
console.log(getHigher);