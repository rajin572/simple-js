function reverseWord(str){
    const words = str.split(" ");
    const reverseWordArray = [];
for (var i = words.length-1; i >= 0; i--){
    const element = words[i];
    reverseWordArray.push(element);
} 
const reverseStr = reverseWordArray.join(" ")
return reverseStr;
}

var string = "I am a good boy";
var give = reverseWord(string);
console.log(give);