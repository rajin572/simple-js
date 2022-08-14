// For of only work in Array and String

let database = [
    {name : "Rahim" , age : 20, mobileName : "Samsung"},
    {name : "Karim" , age : 30, mobileName : "IPhone"},
    {name : "tarek" , age : 18, mobileName : "Xiomi"},
    {name : "Jamal" , age : 29, mobileName : "IPhone"},
    {name : "borkot" , age : 44, mobileName : "Nokia"},
    {name : "shofiq" , age : 35, mobileName : "Nokia"},
    {name : "rofiq" , age : 10, mobileName : "Realme"},
    {name : "salam" , age : 15, mobileName : "Xiomi"},
    {name : "Kamal" , age : 40, mobileName : "Nokia"},
    {name : "Siam" , age : 20, mobileName : "xiomi"},
];
function searchResult (datas , search){
    const result = [];
    for (const data of datas){
        // here for (const data of datas) it means 
        // for (var i = 0; i < datas.length; i++){
        //     const data = datas[i];
        //     console.log(data);
        // }
        if(data.mobileName.toLowerCase().includes(search.toLowerCase())){
            result.push(data)
        }
    }
    return result;
}
// let find = searchResult(database, "xi")
// console.log(find);

// let peoples = [
//     {name : "Karim" , age : 30, mobileName : "IPhone", sim : "Airtel"},
//     {name : "Rahim" , age : 20, mobileName : "Samsung", sim : "Robi"},
//     {name : "tarek" , age : 18, mobileName : "Xiomi", sim : "Airtel"},
//     {name : "Jamal" , age : 29, mobileName : "IPhone", sim : "Banglalink"},
//     {name : "borkot" , age : 44, mobileName : "Nokia", sim : "Graminphone"},
//     {name : "shofiq" , age : 35, mobileName : "Nokia", sim : "Robi"},
//     {name : "rofiq" , age : 10, mobileName : "Realme", sim : "teletok"},
//     {name : "salam" , age : 15, mobileName : "Xiomi", sim : "Graminphone"},
//     {name : "Kamal" , age : 40, mobileName : "Nokia", sim : "Airtel"},
//     {name : "Siam" , age : 20, mobileName : "xiomi", sim : "Graminphone"},
// ]

// function result (peoples , search){
//     let simNames = [];
//     for (const people of peoples){
//         // console.log(people);
//         if (people.sim.toLowerCase().includes(search.toLowerCase())){
//             simNames.push(people)
//         }
//     }
//     return simNames;
// }
// let findingout = result(peoples, "teletok")
// console.log(findingout);


let peoples = [
    {name : "Karim" , age : 30, mobileName : "IPhone", sim : "Airtel"},
    {name : "Rahim" , age : 20, mobileName : "Samsung", sim : "Robi"},
    {name : "tarek" , age : 18, mobileName : "Xiomi", sim : "Airtel"},
    {name : "Jamal" , age : 29, mobileName : "IPhone", sim : "Banglalink"},
    {name : "borkot" , age : 44, mobileName : "Nokia", sim : "Graminphone"},
    {name : "shofiq" , age : 35, mobileName : "Nokia", sim : "Robi"},
    {name : "rofiq" , age : 18, mobileName : "Realme", sim : "teletok"},
    {name : "salam" , age : 18, mobileName : "Xiomi", sim : "Graminphone"},
    {name : "Kamal" , age : 40, mobileName : "Nokia", sim : "Airtel"},
    {name : "Siam" , age : 20, mobileName : "xiomi", sim : "Graminphone"},
]

function result (peoples , search){
    let simNames = [];
    for (const people of peoples){
        // console.log(people);
        if (people.age.toString().includes(search)){
            simNames.push(people)
        }
    }
    return simNames;
}
// let findingout = result(peoples, 18)
// console.log(findingout);