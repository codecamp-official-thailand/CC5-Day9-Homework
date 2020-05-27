// 1. จงคำนวณค่าด้านล่างต่อไปนี้ และ คอมเม้นตอบหลังคำถาม
5 + "34"; // 534
5 ** 4; // 625
5 - "4"; // 1
10 % 5; // 0
5 % 10; // 5
2 ** 5 % 2; // 0
"Java" + "Script"; // JavaScript
" " + " "; // " "
" " + 0; // 0
20 + 4 + "15"; //2415
true + true; // 2
true + false; // 1
false + true; // 1
false - true; // -1
false - true + false - true + false; // -2
(true + true) ** 4; //16
19 + true + "20"; // 2020
3 - 4; // -1
"Bob" - "bill"; // NaN
"Code" + "Camp" + true + false + null + undefined; // CodeCamptruefalsenullundefined

// 2. จงคำนวณค่าเปรียบเทียบต่อไปนี้ และ คอมเม้นตอบด้านหลังเหมือนข้างบน
5 >= 1; // T
0 === 1; // F
4 <= 1; // F
1 != 1; // F
1 == "1"; // T
1 === "1"; // F
"2" == "2"; // T
"2" === "2"; // T
"12" !== 12; // T
"15" != 15; // F
"A" > "B"; // F
"B" < "C"; // T
"a" > "A"; // T
"b" < "A"; // F
"bee" > "bbe"; // T
"BeE" < "Bee"; // T
"SonTer" > "Soncom"; // F
"circle" > "circles"; // F
"NaRuTo" < "nArUtO"; // T
true === false; // F
true != true; // F

// 3. สร้าง String ที่มีค่า "Hello, It's me. "Mario"."
let hello = "Hello";
let world = `${hello}, It's me. "Mario". `;
console.log(world);
