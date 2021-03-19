console.time('time');

// document.getElementById("demo2").innerHTML = "Hello JavaScript";
// JavaScript accepts both double and single quotes:


console.log('hello JavaScript is the programming language of the Web.'); //string
console.log(10*2); //int
document.write(5 + 6);
window.alert(5 + 6);


// A computer program is a list of "instructions" to be "executed" by a computer.

// In a programming language, these programming instructions are called statements.

// A JavaScript program is a list of programming statements.
// In HTML, JavaScript programs are executed by the web browser.


console.log(true); // boolean 
console.log([1,2,3,4]); //array



console.log({name : 'arpit', age : 20}); //object
console.table({name : 'arpit', age : 20}); //object in tabular form


console.warn('this is a warning made by us');
// console.clear(); // it will clear the console
console.log();


console.timeEnd('time');

console.error('this is an error made by us');
/*
multiple 
line Comment
*/

// variable
var a, b, c;     // Declare 3 variables
a = 5;           // Assign the value 5 to a
b = 6;           // Assign the value 6 to b
c = a + b;       // Assign the sum of a and b to c

//var is used in old js

/*The main difference between let and var is that scope of a variable defined with let is limited to the block
     in which it is declared while variable declared with var has the global scope. 
    So we can say that var is rather a keyword which defines a variable globally regardless of block scope.*/

    // eg:
    var city = 'kolkata';
    {
        let city = 'london';
        city = 'lko'
        console.log(city);
    }
    console.log(city);

// When separated by semicolons, multiple statements on one line are allowed:
a = 5; b = 6; c = a + b;

let z = a;
let myname = 'Arpit';
let age = 20;

console.log('my name is '+myname+' and my age is'+age);

// Rules for creating variable
/* 1 cannot start with number
   2 cannot start with letter and underscore or $
   3 case sensitive
*/

const ownername= 'ownername';

console.log(ownername);
// ownername = 'owmername2'; //this will give an error
console.log(ownername);
