//?JAVASCRIPT OBJCTS LITERALS

//*USED TO STORE KEYED COLLECTIONS AND COMPLEX ENTITIES
//* PROPERTY => (KEY,VALUE) PAIR
//*OBJECTS ARE A COLLECTION OF PROPERTIES 

// let student = {
//     name : "Anshul",
//     age : 19,
//     marks : 93,
// }

//?DIFFERENCE BETWEEN LET AND CONST

//*AGAR HAMNE CONST USE KIYA THEN MEMORY KE ANDAR JAHAN PAR BHI YE OBJECT STORED HAI VO CONST HOJAYGA LEKIN TAB BHI HAM OOSKE ELEMENTS ME
//*CHANGE KAR AKTE HAIN
//*REFERENCE

//?CREATE AN OBJECT LITEREAL FOR INSTGRAM USER
//*NAME, AGE, FOLLOWERS, FOLLOWING, LIKES, POST

// let userPost = {
//     name : "Anshul",
//     age : 19,
//     followers : 1000,
//     following : 500,
//     likes : 10000,
//     post : 50
// }



//?GET VALUES FROM OBJECTS

//*USING DOT NOTATION OR BRACKET NOTATION

//*BRACKET NOTATION => OBJECT["KEY"]

// console.log(userPost.name); //Anshul
// console.log(userPost["name"]); //Anshul

//*JS AUTOMATICALLY CONVERTS THE KEY TO STRING

// let obj = {
//     1 : "Anshul",
//     2 : "Sharma",
//     null : "Null",
//     true : "True",
//     undefined : "Undefined",
//     1.5 : "One Point Five",
// }

// console.log(obj[1]); //Anshul //*DOT OPERATER 1 KO STRING ME CONVERT NHI HO GA KYUKI DOT OPERATOR ME KEY STRING ME HONA CHAHIYE ALREADY
// console.log(obj["1"]); //Anshul



//?ADD AND UPDATE VALUES IN OBJECT LITERALS

//*UPDATE => OBJECT.KEY = VALUE
//*ADD => OBJECT.KEY = VALUE

//*AGAR KEY EXIST KARTA HAI TO UPDATE HO JAYGA NHI TO ADD HO JAYGA
//*AGAR KEY STRING ME HAI TO DOT OPERATOR USE NHI KAR SAKTE HAI

//*DELETE => DELETE OBJECT.KEY


//?OBJECTS OF OBJECTS

//*OBJECTS CAN CONTAIN OTHER OBJECTS AS VALUES

let student = {
    anshul : {
        age : 19,
        marks : 93,
    },
    sharma : {
        age : 20,
        marks : 95,
    },
    ansh : {
        age : 18,
        marks : 90,
    }

};


//?ARRAY OF OBJECTS



//*ARRAY CAN CONTAIN OBJECTS AS ELEMENTS
//*OBJECTS CAN CONTAIN ARRAY AS VALUES

let students = [
    {name : "Anshul", age : 19, marks : 93},
    {name : "Sharma", age : 20, marks : 95},
    {name : "Ansh", age : 18, marks : 90},
]


//?MATH OBJECTS

//*MATH OBJECTS CONTAINS MATH FUNCTIONS AND CONSTANTS
//*MATH IS A BUILT IN OBJECT

//*METHODS => MATH.METHOD_NAME()
//*PROPERTIES => MATH.PROPERTY_NAME 

//!PROPERTIES

//*MATH.PI => 3.14
//*MATH.E => 2.718281828459045

//!METHODS

//*MATH.SQRT(X) => SQUARE ROOT OF X
//*MATH.POW(X,Y) => X RAISED TO THE POWER Y
//*MATH.MAX(X,Y) => MAXIMUM OF X AND Y
//*MATH.MIN(X,Y) => MINIMUM OF X AND Y
//*MATH.RANDOM() => RANDOM NUMBER BETWEEN 0 AND 1
//*MATH.FLOOR(X) => ROUND DOWN TO THE NEAREST INTEGER
//*MATH.CEIL(X) => ROUND UP TO THE NEAREST INTEGER
//*MATH.ROUND(X) => ROUND TO THE NEAREST INTEGER
//*MATH.ABS(X) => ABSOLUTE VALUE OF X
//*MATH.SIN(X) => SINE OF X (X IN RADIANS)
//*MATH.COS(X) => COSINE OF X (X IN RADIANS)
//*MATH.TAN(X) => TANGENT OF X (X IN RADIANS)
//*MATH.LOG(X) => NATURAL LOGARITHM OF X (BASE E)
//*MATH.LOG10(X) => LOGARITHM OF X (BASE 10)
//*MATH.LOG2(X) => LOGARITHM OF X (BASE 2)
//*MATH.EXP(X) => EXPONENTIAL OF X (e^x)
//*MATH.SQRT(X) => SQUARE ROOT OF X



//?RANDOM INTEGERS B/W 1 AND 10

//*MATH.FLOOR(MATH.RANDOM() * 10) + 1

// let randomNumber = Math.floor(Math.random() * 10) + 1;

//?GUSSENG GAME

// let maxNmber = prompt("Enter the maximum number: ");
// let randomNumber = Math.floor(Math.random() * maxNmber) + 1;
// let userGuess = prompt("Guess the number: ");
// while (userGuess != randomNumber) {
//     if (userGuess > randomNumber) {
//         alert("Too High!")
//     } else if (userGuess < randomNumber) {
//         alert("Too Low!")
//     } else {
//         alert("Correct!")
//     }
//     userGuess = prompt("Guess the number: ");
// }