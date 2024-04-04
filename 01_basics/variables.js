const userId = 12345
let email = "utkarh@gmail.com"
var city = "Kanpur"

let state;

// password = 1234 // not allowed

// => single line comment

/*
 multi line comment
*/ 

/*
    Prefer not to use var
    because of issue in block scope and functional scope
*/

email = "new@mail.com"
city = "Jaipur"
password = 567

console.table([email, city, password, state])
