function fivonacci(num){
    let result = [];
    if (num === 1){
        result.push(0)
    }
    else if (num === 2){
        result.push(0,1)
    }
    else {
        result.push(0,1)
        for (var i = 3; i <= num; i++){
            result.push((result[(result.length)-1]+result[(result.length)-2]))
        }
    }
    return result
}
console.log(fivonacci(15));