//?ARRAY METHODS

//?1. forEach() method

//* The forEach() method executes a provided function once for each array element.
//* It is a higher-order function that takes a callback function as an argument and applies it to each element of the array.

let arr = [1, 2, 3, 4, 5];

let print = function (el) {
  console.log(el);
};

arr.forEach(print); // 1 2 3 4 5

arr.forEach((el) => { console.log(el) }); // 1 2 3 4 5

arr.forEach(function (el) {
  console.log(el);
});



//?WITH ARRAY OF OBJECTS

let arr1 = [
  {
    name: "A",
    marks: 95,
  },
  {
    name: "B",
    marks: 75,
  },
  {
    name: "C",
    marks: 85,
  },
];  

arr1.forEach((student) => {
  console.log(student.marks);
});


//?2. map() method

//* The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
//* It is a higher-order function that takes a callback function as an argument and applies it to each element of the array, returning a new array with the results.

//*makes a new array with the results of calling a provided function on every element in the calling array.
//* It does not modify the original array.


let num = [1, 2, 3, 4, 5];

let double = num.map((el) => {  //*Double will be the new array    ,,,,    aage element ki tarah input liya jara hai
  return el * 2;
});



let arr3 = [
    {
      name: "A",
      marks: 95,
    },
    {
      name: "B",
      marks: 75,
    },
    {
      name: "C",
      marks: 85,
    },
  ];  


  let gpa = arr3.map((student) => {
    return student.marks / 10;
  });

  console.log(gpa); // [9.5, 7.5, 8.5]


//?3. filter() method

//* The filter() method creates a new array with all elements that pass the test implemented by the provided function.
//* It is a higher-order function that takes a callback function as an argument and applies it to each element of the array, returning a new array with the elements that pass the test.
//* It does not modify the original array.
//* It is used to filter out elements from an array based on a condition.
//* It returns a new array containing all elements that satisfy the condition specified in the callback function.


//*NAYA ARRAY BANATA HAI DEPENDING ON KI HAMNE KONSI CONDITION DII HAI FILTER KI

let num4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let even = num.filter((el) => {             //*Even will be the new array    ,,,,    aage element ki tarah input liya jara hai
  return el % 2 === 0;                      //*Condition hai ki jo bhi even number ho wahi naya array banega
});



//?EVERY METHOD

//* The every() method tests whether all elements in the array pass the test implemented by the provided function.
//* It returns a Boolean value (true or false) based on the result of the test.

//*RETURNS TRUE IF ALL ELEMENTS PASS THE TEST, OTHERWISE FALSE


let arr5 = [1, 2, 3, 4, 5];


let allEven = arr5.every((el) => {  //*Condition hai ki jo bhi even number ho wahi naya array banega
  return el % 2 === 0;              
});
console.log(allEven); // false


//?SOME METHOD

//* The some() method tests whether at least one element in the array passes the test implemented by the provided function.
//* It returns a Boolean value (true or false) based on the result of the test.

let arr6 = [1, 2, 3, 4, 5];

let anyEven = arr6.some((el) => {  //*Condition hai ki jo bhi even number ho wahi naya array banega
  return el % 2 === 0;              
});

console.log(anyEven); // true



//?REDUCE METHOD

//* The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
//*REDUCES THE ARRAY TO A SINGLE VALUE

//! arr.reduce(callback(accumulator, currentValue), initialValue)

//* The reduce() method takes two arguments: a callback function and an initial value for the accumulator.


//![1,2,3,4].reduce((res,el) => (res+el));


//* The callback function takes two arguments: the accumulator and the current value.
//* The accumulator is the accumulated value returned from the previous iteration, 
//*and the current value is the current element being processed in the array.




let nums5 = [1, 2, 3, 4, 5];

let finalValue = nums5.reduce((res, el) => {
  return res + el;
});
 



//?FIND MAXIMUM IN AN ARRAY BY USING REDUCE METHOD


let max = nums5.reduce((max, el) => {
  return Math.max(max, el);
});
// let finalValue1 = nums5.reduce((res, el) => res + el);      syntax alag hai bas



//?DEFULT PARAMETER 

//* Default parameters allow named parameters to be initialized with default values if no value or undefined is passed.
//* Default parameters are a way to set default values for function parameters in JavaScript.

function sum(a, b = 3) {
  return a + b;
}

console.log(sum(2)); // 5
console.log(sum(2, 4)); // 6



//?SPREAD OPERATOR

//* The spread operator is a syntax that allows an iterable (like an array or string) to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.
//* It is represented by three dots (...).

Math.min(1, 2, 3, 4, 5); // 1

arr = [1, 2, 3, 4, 5];

Math.min(...arr); // 1

//?SPRED WITH ARRAY LITERALS

let newArr = [...arr];  // [1, 2, 3, 4, 5]

let newArr1 = [...arr, 6, 7, 8]; // [1, 2, 3, 4, 5, 6, 7, 8]
let newArr2 = [0, ...arr, 6, 7, 8]; // [0, 1, 2, 3, 4, 5, 6, 7, 8]


//?SPREAD WITH OBJECTS

//* The spread operator can also be used with objects to create shallow copies or merge objects.

//* It allows you to expand the properties of an object into another object.

let data = {
  email: "XXXXXXXXXXXXX",
  password: "abc",
};

let data1 = {
  ...data,
  name: "XYZ",
  age: 20,
};


let obj = {...arr}; // {0: 1, 1: 2, 2: 3, 3: 4, 4: 5}
let obj1 = {..."abc"}; // {0: "a", 1: "b", 2: "c"}



//?REST OPERATOR

//* The rest operator is a syntax that allows you to represent an indefinite number of arguments as an array.
//* It is represented by three dots (...) and is used in function parameters to collect all remaining arguments into an array.

function sum(...args) {
  for(let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}

sum(1, 2, 3, 4, 5); // 1 2 3 4 5
sum(1, 2, 3); // 1 2 3  
sum(1, 2); // 1 2 

//!sum funtion har ek argument ko lera hai aur unhe ek array mein daal raha hai


function min(){
  console.log(arguments); // [1, 2, 3, 4, 5]
}

min(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]

//!arguments is an array-like object that contains the arguments passed to the function (collection)

//*array ke methods use nahi kar skate hai

function sum(...args){
  return args.reduce((sum, el) => sum + el);

}

console.log(sum(1, 2, 3, 4, 5)); // 15


//?DEDSTRUCTURING ASSIGNMENT

//* Destructuring assignment is a syntax that allows you to unpack values from arrays or properties from objects into distinct variables.
//* It is a convenient way to extract values from arrays or objects and assign them to variables in a more readable and concise manner.

let names = ["A", "B", "C", "D"];

let [a, b, c] = names; // a = "A", b = "B", c = "C"
let [x, y, ...rest] = names; // x = "A", y = "B", rest = ["C", "D"]

//?WITH OBJECTS

let obj2 = {
  name: "A",
  age: 20,
  email: "XXXXXXXXXXXX",
  address:  {
    city: "XYZ",
    state: "ABC",
  },
  hobbies: ["reading", "writing"],
  password: "abc",
};

let { name, hobbies, email, password: pass, father: dad = "father" } = obj2; 
// name = "A", hobbies = ["reading", "writing"], email = "XXXXXXXXXXXX", pass = "abc"

console.log(pass); // abc