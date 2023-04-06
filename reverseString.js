function reverse(str) {
    let result = "";
    for (var i = str.length - 1; i >= 0; i--) {
        const element = str[i];
        result += element;
    }
    return result;
}

var string = "i am a good boy";
var give = reverse(string);
console.log(give);