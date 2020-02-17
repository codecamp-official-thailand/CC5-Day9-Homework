// 1. จงคำนวณค่าด้านล่างต่อไปนี้ และ คอมเม้นตอบหลังคำถาม
5 + "34"            // 534
5 ** 4              // 625
5 - "4"             // 1
10 % 5              //0
5 % 10;             //5
(2 ** 5) % 2        //0
"Java" + "Script"   //JavaScript
" " + " "           //  
" " + 0             // 0
20 + 4 + "15"       //2415
true + true         //2
true + false        //1
false + true        //1
false - true        //-1
false - true + false - true + false;    //-2
(true + true) ** 4  //1
19 + true + "20"    //2020
3 - 4               //-1
"Bob" - "bill"      // NaN
"Code" + "Camp" + true + false + null + undefined   //CodeCamptruefalsenullundefined


// 2. จงคำนวณค่าเปรียบเทียบต่อไปนี้ และ คอมเม้นตอบด้านหลังเหมือนข้างบน
5 >= 1              //True
0 === 1             //False
4 <= 1              //False
1 != 1              //False
1 == "1"            //True
1 === "1"           //False
"2" == "2"          //True
"2" === "2"         //True
"12" !== 12         //True
"15" != 15          //False
"A" > "B"           //False
"B" < "C"           //True
"a" > "A"           //True
"b" < "A"           //False
"bee" > "bbe"       //True
"BeE" < "Bee"       //True
"SonTer" > "Soncom" //True
"circle" > "circles"//False
"NaRuTo" < "nArUtO" //True
true === false      //False
true != true        //False


// 3. สร้าง String ที่มีค่า "Hello, It's me. "Mario"."
let sayHi = `Hello, It's me. "\Mario\".`;
console.log (sayHi);