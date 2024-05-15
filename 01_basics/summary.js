// Primitive types: number, string, boolean, null, undefined, symbol, bigint
// call by value => It gives copy of the value not the original value

let num = 43

const isLoogedIn = true
let temperature = null
let userEmail;
let bigNumber = 1228749873214986987321294817298n
let id = Symbol("abc")
let anotherId = Symbol("abc")

console.log(id === anotherId)

// statically typed language => data type is defined at the time of declaration
// dynamically typed language => data type is not defined at the time of assignment

// (Reference type) Non-primitive types: object, array, function

// call by reference => It gives the original value not the copy of the value

let heros = ['superman', 'batman', 'spiderman']
let myObj = {
    name: 'utkarsh',
    age: 18
}

const myFunc = function(){
    console.log("Hello World");
}


console.log(typeof myFunc);

//https://262.ecma-international.org/5.1/#sec-11.4.3



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack 
// Heap

// Primitive data types are stored in stack
// Non-primitive data types are stored in heap

let subject = "Physics"

let subject2 = subject

subject2 = "Chemistry"

console.log(subject);
console.log(subject2);

let user = {
    username: 'khare',
    password: '1234'
}

let anotherUser = user

anotherUser.username = 'utkarsh'

console.log(user);
console.log(anotherUser);

