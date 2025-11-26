// var  marks = 45;
// if(marks < 35){
//     console.log("The student has been Failed");
// }else if(marks <= 60){
//     console.log("The student has secured third grade");
// }else if(marks <= 80){
//     console.log("The student hs secured second grade");
// }else if(marks <= 100){
//      console.log("The student hs secured first grade");
// }else{
//     console.log("Not valid may")
// }

// var age = 30
// if(age < 15){
//     let b = 25
    
// }

// let numArr = [25, 50, 100, 78, 56, 29, 35];
// console.log(numArr[3])
// numArr[4] = 0
// console.log(numArr);
// numArr.push(56)
// console.log(numArr);
// numArr.pop()
// console.log(numArr);

// for(let i = 0; i<numArr.length; i++){
//     console.log(numArr[i]);
// }
// let resultArr = []
// for(let i=0; i<numArr.length; i++){
//     if(numArr[i] > 20){
//         resultArr.push(numArr[i])

//     }
// }
// console.log(resultArr);

// const student = {
//     name: "Aaditya",
//     age: 28,
//     hobbies: ["read", "write"],
//     address: {
//         city: "Bhandara",
//         state: "Maharashtra",
//         pincode: 421301,
//         streetName: "Sarojini Nagar"
//     },
//     "full name": "Vipul Kayate"
// };

// // Accessing name
// console.log("studentName:", student.name);

// // Updating properties
// student.age = 27;
// student.marks = 81;

// // Updating hobbies
// student.hobbies.push("reels", "coding");

// // Printing the updated object
// console.log(student);

// // Accessing property with space
// console.log(student["full name"]);

let studentData = [
    {name : "viki", age:21, gender:"Male"},
    {name : "Aryan", age:20, gender:"Male"},
    {name : "kaustubh", age:21, gender:"Male"},
    {name : "kishan", age:21, gender:"Male"},
    {name : "Harshad", age:17, gender:"Male"},
];

let nameArr = [];

for(let i = 0; i < studentData.length; i++){
    
    if(studentData[i].age > 18){
        console.log(studentData[i]);

        nameArr.push(studentData[i].name);
    }
}

console.log(nameArr);
