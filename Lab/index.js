// Lab 
let name, human;
name = "Thanawat";
human = name;
console.log(human);

// Lab 
let myMoney, myParentsName, myAddress, ourUniverseAge;
myMoney = 100;
myParentsName = "DM";
myAddress = "Bangkhen, Bangkok, Thailand";
ourUniverseAge = "13.8e9"

// Exercise 
let name = "Codecamp";

console.log(`hello ${1}`);        // hello 1
console.log(`hello ${"name"}`);   // hello name
console.log(`hello ${name}`);     // hello Codecamp

// Exercise 
let myName, myAge, myAddress;
name = 'Thanawat';
age = '24';
address = 'Bangkhen, Bangkok, Thailand';
let myBio = `My name is ${myName}. \nI am ${myAge}. \nI live in ${myAddress}`;
console.log(myBio);

// Exercise 
"" + 1 + 0          // "10"
"" - 1 + 0          // -1
true + false        // 1
6 / "3"             // 2
"2" * "3"           // 6
4 + 5 + "px"        // "9px"
"$" + 4 + 5         // "$45"
"4" - 2             // 2
"4px" - 2           // NaN
7 / 0               // Infinity
" -9 " + 5          // "-9 5"
" -9 " - 5          // -14
null + 1            // 1
undefined + 1       // NaN
" \t\n" - 2         // -2

// Exercise Browser จะโชว์ข้อความ "Hello Codecamp #5" ไหม
// ans. แสดง
if ("0") {
    alert('Hello Codecamp #5');
}   

// Exercise ใช้ if else ในการเขียนถามชื่อของคุณ ถ้าตอบถูกให้แสดงคำว่า “เก่งมาก” ถ้าตอบผิดให้แสดงคำว่า “คุณไม่รู้จักชื่อฉัน”
let myName = prompt ('What is my name?');
if (myName == 'thanawat', 'Thanawat') {
    console.log("เก่งมาก");
} else {
    console.log("คุณไม่รู้จักชื่อฉัน");}

// Exercise ใช้ prompt ในการรับคะแนนมาคำนวณเกรด
let myScore = prompt ('Insert your scores');

if (myScore >= 80) {
    alert('A');
} else if (myScore >= 70) {
    alert('B');
} else if (myScore >= 60) {
    alert('C');
} else if (myScore >= 50) {
    alert('D');
} else {
    alert('A');
}
// ในรูป Ternary Operators : myScore >= 80 ? console.log('A') : myScore >= 70 ? console.log('B') : myScore >= 60 ? console.log('C') : myScore >= 50 ? console.log('D') : console.log('A');

// Exercise เปลี่ยน if-else ข้างล่างในอยู่ในรูปของ Ternary Operators
// let age = prompt ('How old are you?');
// let price;
// if (age < 18) {
//     price = 20000
// } else {
//     price = 3500
// }

let yourAge = prompt ('How old are you');
let price;

price = (yourAge < 18) ? 2000 : 3500;
alert(price)

// เสริมในคลาส
// let isOver18 = confirm ('Over 18');
// if (isOver18 > 18) {
//     console.log('คุณสามารถผ่านไปได้');
// } else {
//     console.log('คุณไม่สามารภผ่านไปได้');
// }
