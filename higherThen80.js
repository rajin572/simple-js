// তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো 




function number(num) {
    let higherThen80 = [];
    for (var i = 0; i < num.length; i++) {
        const element = num[i];
        if (element > 80) {
            higherThen80.push(element)
        }
    }
    return higherThen80;
}

let myNumbers = [80, 50, 90, 88, 60, 15, 87, 78, 81, 97, 21, 36, 45, 58, 65, 78];
let putToFunction = number(myNumbers);
console.log(putToFunction);
