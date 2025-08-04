//?THIS KEYWORD

//*THIS KEYWORD IN JS REFERS TO AN OBJECT THAT IS EXECUTING THE CURRENT PIECE OF CODE.

const student = {
    name: "anshul rana",
    age: 20,
    eng: 95,
    math: 90,
    phy: 97,
    getAvg: function(){
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(`${this.name} got average marks = ${avg}`);
    },
}

//!THIS IS BASICALLY EVERYTHING WHICH IS INSIDE THE OBJECT.

function getAvg(){
    console.log(this);   //* prints the window object
}

getAvg();   //* prints the window object

student.getAvg();   //* prints "anshul rana got average marks = 91"



//?TRY AND CATCH BLOCKS

//*TRY AND CATCH BLOCKS ARE USED TO HANDLE ERRORS IN JAVASCRIPT.
//*THE TRY BLOCK CONTAINS CODE THAT MAY THROW AN ERROR, AND THE CATCH BLOCK CONTAINS CODE THAT HANDLES THE ERROR.

// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("a");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");


//*since a is not defined, it will throw an error and the code will stop executing.
//*TO PREVENT THIS, WE CAN USE A TRY AND CATCH BLOCK.


console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");
try{
    console.log(a);
}catch(err){
    console.log("caught an error a is not defined");
}
onsole.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");



//?ARROW FUNCTIONS
//*ARROW FUNCTIONS ARE A MORE CONCISE WAY TO WRITE FUNCTIONS IN JAVASCRIPT.

const add = (a, b) => {
    console.log(a + b);
};

add(5, 10);   //* prints 15


const cube = (n) => {
    return n * n * n;
};


//?IMPLICIT RETURN OF AN ARROW FUNCTION
//*IF THE FUNCTION BODY CONTAINS ONLY ONE EXPRESSION, WE CAN OMIT THE CURLY BRACES AND THE RETURN KEYWORD.

const add1 = (a, b) => a + b;   //* prints 15
const cube1 = n => n * n * n;   //* prints 27


const subtract = (a, b) => (
    a - b
    );                          //* prints 5



//?SET TIMEOUT FUNCTION

console.log("hello");

setTimeout(() => {                       //*TIMEOUT FUNCTION  KE ANDAR  ARROW FUNCTOIN KO AS A CALLING FUNCTION LIYA HAI.
    console.log("hello");               //* prints "hello" after 3 seconds
    console.log("anshul rana");
}, 3000);

console.log("welcome");



//?SET INTERVAL FUNCTION   ---   kaam karta rahega jab tak clear nahi karte
//*THE SET INTERVAL FUNCTION REPEATEDLY CALLS A FUNCTION WITH A FIXED TIME DELAY BETWEEN EACH CALL.

console.log("hello");   

let id = setInterval(() => {
    console.log("anshul rana");
}   , 1000);   //* prints "anshul rana" every 1 second



clearInterval(id);   //* stops the interval



//?THIS KEYWORD IN ARROW FUNCTIONS

//*THE THIS KEYWORD IN ARROW FUNCTIONS REFERS TO THE PARENT SCOPE, NOT THE OBJECT THAT IS EXECUTING THE FUNCTION.
//*THIS MEANS THAT THE THIS KEYWORD IN AN ARROW FUNCTION WILL NOT WORK AS EXPECTED WHEN USED INSIDE AN OBJECT.

//*FOR NORMAL FUNCTION DEFINITIONS, THE THIS KEYWORD REFERS TO THE OBJECT THAT IS EXECUTING THE FUNCTION.
//*FOR EXAMPLE, IN THE FOLLOWING CODE, THE THIS KEYWORD REFERS TO THE STUDENT OBJECT.


const student2 = {
    name: "anshul rana",
    age: 20,
    eng: 95,
    math: 90,
    prop:this,                           //*global scope
    phy: 97,
    getName: function (){
        console.log(this);               //* prints the student object
        return this.name;                //!IN THIS THE VALUE OF THIS REFERS TO THE STUDENT OBJECT  (CALLING FUNCTION).
    },

    getAvg: () => {
        console.log(this);               //* prints the global object (window object)
        return this.math;
    },

    getAvg1: function () {
        console.log(this);               //* prints the student object
        return this.math;
    },

    getInfo: function () {               //* ARROW FUNCTION KE HOTA HAI OOSKE PARENT KA THIS AND I THIS CODE ARROW FUNCTION KE LIYE  
        setTimeout(() => {               //* PARENT HAI FUNCTION SET TIME OUT TO BAS EK CALLING FUNCTION HAI. AND FUHNCTION KA THIS BHI STUDENT HAI.
            console.log(this);           //* prints the student object
        }, 2000);
    },

    getInfo1: function () {              //*NORMAL FUNCTION KE LIYE THIS HOTA HAI JISNE OOS FUNCTION KO CALL KIYA HAI.
        setTimeout(function () {         //*AND SETTIME OUT FUNCTION KO CALL KIYA HAI OOSKE LIYE THIS WINDOW OBJECT HAI.
            console.log(this);           //* prints the window object
        }, 2000);
    }

};


//*ARROW FUNCTION KE LIYE THIS OONKI CALLING OBJECT NAHI HOTI JAISE PARENT FUNCTION KE LIYE HOTI HAI.
//*BALKI ARROW FUNCTION KE LIYE THIS OONKI PARENT SCOPE HOTI HAI.


//?MAKE A FUNCTOIN THAT PRINTS HELLO WORLD AFTER 5 TIMES IN INTERVAL OF 2 SECCONDS.


let id1 = setInterval(() => {
    console.log("hello world");
}, 2000);

setTimeout(() => {
    clearInterval(id1);   //* stops the interval
}, 11000);                //* stops the interval after 10 seconds



const square = (n) => {
    return n * n;
};

//?MAKE AN ARROW FUNCTION THAT TAKES AN ARRAY AS AN ARGUMENT AND RETURNS THE AVERAGE OF THE ELEMENTS IN THE ARRAY.


const arrAvg = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
  
};


let arr = [1, 2, 3];

console.log(arrAvg(arr));   //* prints 2


