let age = undefined

const ageToNumber = Number(age)
console.log(ageToNumber);
console.log(typeof ageToNumber);
console.log(typeof(ageToNumber));

// "35" => 35
// "35abc" => NaN => Type of NaN is Number
// null => value = 0 and type number
// undefined => NaN => Number

let name = 0
let isLoggedIn = Boolean(name)
console.log(isLoggedIn);

// "" => false
// "utkarsh" => true
// 1 or any number => true
// 0 => false

let score = 35
let scoreTOString = String(score)
console.log(scoreTOString);
console.log(typeof scoreTOString);

// 35 => "35"
// true => "true"
// null or undefined => "null", "undefined"
 
