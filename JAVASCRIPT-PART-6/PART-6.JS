//?FUNCTIONS

function hello(){
    console.log("hello");
}

hello();

function numbers(){
    for(let i = 0; i < 10; i++){
        console.log(i);
    }
}

numbers();

//?CREATE A FUNCTION TO ROLE A DICE WHICH GIVES A NUMBER BETWEEN 1 TO 6

function dice(){
    let num = Math.floor(Math.random() * 6) + 1;
    console.log(num);
}

dice();

//?FUNCTION WITH ARGUMENTS

function add(a, b){
    console.log(a+b);
}

// console.log("give two numbers to add");
// let a = prompt("Enter first number: ");
// let b = prompt("Enter second number: ");
// let sum = add(a, b);
// console.log("sum of " + a + " and " + b + " is: " + sum);

add(5, 10);


function calcAvg(a,b,c){
    let avg = (a + b + c) / 3;
    console.log(avg);
}

calcAvg(5, 10, 15);


function printmultiplicationTable(num){
    for(let i = 1; i <= 10; i++){
        console.log(num + " * " + i + " = " + (num * i));
    }
}

printmultiplicationTable(5);

//?FUNCTION WITH RETURN VALUE

function add(a, b){
    return a + b;
}

let sum = add(5, 10);
console.log("sum of 5 and 10 is: " + sum);


function age(age){
    if(age >= 18){
        return "You are eligible to vote";
    }else{
        return "You are not eligible to vote";
    }
}

//?CREATE A FUNCTION THAT RETURNS THE CONCATENATION OF ALL STRINGS IN AN ARRAY.

let str = ["hello", "world", "this"];

function concatenation(){
    let result = "";
    for(let i = 0; i < str.length; i++){
        result += str[i];
    }
    return result;
}

//?LEXICAL SCOPE.

//* Lexical scope is a feature in JavaScript that determines the scope of a variable based on its location within the source code.
//* It means that a variable defined in a certain scope is accessible to all the inner scopes within that scope.
//*USED IN NESTED FUNCTIONS.
//* The inner function has access to the variables and parameters of its outer function.
//* This is called closure.
//*BUT OUTER FUNCTION DOES NOT HAVE ACCESS TO INNER FUNCTION VARIABLES.
//* This is called lexical scope.
//*HOISTING: The inner function is hoisted to the top of the outer function, but the outer function is not hoisted to the top of the inner function.

//?EXAMPLE:

let greet = "hello";

function changeGreet(){
    let greet = "namaste";
    console.log(greet);   //* prints "namaste"
    function innerGreet(){
        console.log(greet);  //* will not print because it is not called
    }

}

console.log(greet);   //* prints "hello"
changeGreet();   //* prints "namaste"

//?FUNCTION EXPRESSION

//* A function expression is a function that is defined within an expression instead of a declaration.
//* It can be stored in a variable, passed as an argument to another function, or returned from another function.

let sum3 = function(a, b){
    return a + b;
}

console.log(sum3(5, 10));   //* prints 15

//?HIGHER ORDER FUNCTIONS

//* A higher-order function is a function that takes one or more functions as arguments, or returns a function as its result.

function multipleGreet(func,n){
    for(let i = 0; i < n; i++){
        func();
    }
}

let greet1 = function(){
    console.log("hello");
}


multipleGreet(greet1, 5);   //* prints "hello" 5 times.

//?HIGHER ORDER FUNCTIONS WITH RETURNS.

function oddorEvenFactory(request){
    if(request == "odd"){
        return function(num){
            console.log(!(num % 2 == 0));
        }
    }else if(request == "even"){
        return function(num){
            console.log(num % 2 == 0);
        }
    }else{
        return function(num){
            return "Invalid request";
        }
    }
}

let odd = oddorEvenFactory("odd");
let even = oddorEvenFactory("even");
let invalid = oddorEvenFactory("invalid");

odd(5);   //* prints true
even(5);   //* prints false
invalid(5);   //* prints "Invalid request"


//?METHODS 

//* A method is a function that is associated with an object.
//* It is a property of an object that is a function.

const calculator = {
    add: function(a, b){
        return a + b;
    },
    subtract: function(a, b){
        return a - b;
    },
    multiply: function(a, b){
        return a * b;
    },
    divide: function(a, b){
        return a / b;
    }
}

console.log(calculator.add(5, 10));   //* prints 15
console.log(calculator.subtract(5, 10));   //* prints -5    
console.log(calculator.multiply(5, 10));   //* prints 50
console.log(calculator.divide(5, 10));   //* prints 0.5


