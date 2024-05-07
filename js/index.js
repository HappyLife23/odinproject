// let myNumber = '15';
// myNumber = Number(myNumber) + 5;
// console.log(myNumber);

// let myNum = '15';
// myNum += 5;
// console.log(myNum)

// let a = 10;
// console.log(a);

// console.log(9 * a);

// let b = 7 * a;
// console.log('B:' + b);

// let msg = 'hello';
// msg = 12345;

// console.log(msg)

// /*---------------------------------*/
// function showMsg() {
//     let message = 'Hello World!';
//     //alert(message);
// }
// showMsg();

// /*---------------------------------*/
// let firstName = 'David';
// function greeting() {
//     let msg = `Hello ${firstName}!`;
//     //alert(msg)
// }
// greeting();

/*---------------------------------*/

const arr = ['David', 'Sofie', 'Sara']
const result = arr.slice(1);

console.log(result);
console.log(arr)

/*---------------
--- OR, AND , NOT
--- Operators
----------------*/

// OR "||" finds the first truthy value
// In other words, a chain of OR || returns the first truthy value or the last one if no truthy value is found.
console.log( null || 1 ); // 1 (1 is the first truthy value)
console.log(null || 0 || 1); // 1 (the first truthy value)


// AND “&&” finds the first falsy value
// In other words, AND returns the first falsy value or the last value if none were found.
//ex
console.log( true && true );   // true
console.log(false && true);  // false

// (!) NOT
// The precedence of NOT ! is the highest of all logical operators, so it always executes first, before && or ||.
// the operator accepts a single argument
// convert the operand to boolean-type
// return the inverse value
//ex
let num = 10;
let value = 12;
let result2 = num < value;

console.log(result2);
console.log(!result2);
console.log(!!result2);

// onmouseover
const header = document.querySelector('h1');
function mouseOver() {
    header.style.backgroundColor = "lightBlue"
    header.style.cursor = "pointer"
}
/*---------------
----- Cool thing
---------------*/

let msg = "We are \"Vikings\"";
console.log(msg)


const fruits = ["Apple", "Banana", "Orange"];
for (x in fruits) {
  console.log(x);
}