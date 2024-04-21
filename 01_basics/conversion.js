let age = null // string

let ageToNumber = Number(age) // 35
// console.log(ageToNumber);
// console.log(typeof ageToNumber);
// console.log(typeof(ageToNumber));

// "35" => 35
// "35abc" => NaN => Type of NaN is Number
// null => value = 0 and type number
// undefined => NaN => Number

let name = 0
let isLoggedIn = Boolean(name)
// console.log(isLoggedIn);

// "" => false
// "utkarsh" => true
// 1 or any number => true
// 0 => false

let score = 35
let scoreTOString = String(score)
// console.log(scoreTOString);
// console.log(typeof scoreTOString);

// 35 => "35"
// true => "true"
// null or undefined => "null", "undefined"
 


// *********************************Operations*********************************

let value = 3
let negValue = -value

// console.log(negValue);

// console.log(2 + 3);
// console.log(2 - 3);
// console.log(2 * 3);
// console.log(2 / 3);
// console.log(2 ** 100); // ** => power
// console.log(17 % 5); // % =>  return reminder

let fName = "Utkarsh"
let lName = "Khare"

let fullName = fName + " " + lName
// console.log(fullName);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2); 
console.log(1 + 2 + "3");
console.log((23+ 24) * (62 /87));

let counter = 0;

console.log(counter++); // ++ increment of one digit
console.log(counter++);
console.log(++counter);

// ++<Value> => pre increment => pehle increment karege then return krega value
// <Value>++ => post increment => pehele return krega value then increment krega value

