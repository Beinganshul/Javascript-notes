//? LOOPS

//? FOR LOOPS

//* USED TO ITERATE A PIECE OF CODE

//* FOR(INITIALIZATION; CONDITION; UPDATION) {
//* DO SOMETHING 
//* }

//! Example 1: Print "yeah" 5 times
// for (let i = 1; i <= 5; i++) {
//     console.log("yeah");
// }

//! Example 2: Print odd numbers from 1 to 15
// for (let i = 1; i <= 15; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }

//! Example 3: Print multiplication table of 5
// for (let i = 1; i <= 10; i++) {
//     console.log(`5 * ${i} = ${5 * i}`);
// }

//? NESTED LOOPS

//! Example: Nested loops demonstration
// for (let i = 1; i <= 3; i++) {
//     console.log(`Outer loop ${i}`);
//     for (let j = 1; j <= 3; j++) {
//         console.log(`Inner loop: ${j}`);
//     }
// }

//? WHILE LOOPS

//*JAB BHI HAME CHAHIYE KI HAMARA LOOP CHALTA EK SEPERATE CONDITION TAK RAHE TO HUM IS LOOP KA USE KARENGE AND CONDITION ME TURE DENGE
//*THEN BREAK STATEMENT DENGE

//* FIRST, VARIABLE IS DECLARED
//* THEN THE LOOP RUNS WHILE THE CONDITION IS TRUE
//* ONCE THE CONDITION BECOMES FALSE, THE LOOP STOPS
//* UPDATION IS DONE INSIDE THE LOOP

//! Example: Print numbers from 1 to 50
// let i = 1;
// while (i <= 50) {
//     console.log(i);
//     i++;
// }

//? FAVORITE MOVIE GUESSING GAME

// let favMovie = "Endgame";
// let guess = prompt("Enter the favorite movie (type 'quit' to exit):");

// while (guess !== favMovie && guess !== "quit") {
//     guess = prompt("Wrong answer. Try again (type 'quit' to exit):");
// }

// if (guess === favMovie) {
//     console.log("Correct! That's the favorite movie.");
// } else {
//     console.log("You exited the game.");
// }


//? LOOPS WITH ARRAYS 

// let fruits = ["mango", "banana", "apple", "pineapple", "licchi"];
// for (let i = 0; i < fruits.length; i++) {
//     console.log(`${i} ${fruits[i]}`);
// }

//? NESTED LOOPS AND NESTED ARRAYS

// let heroes = [
//              ["iron man", "spider man", "thor"],
//              ["super man", "wonder woman", "bat man"],
//              ["anshul", "suman"]
//              ];
// for (let i = 0; i < heroes.length; i++) {
//     console.log(`List #${i}`);
//     for (let j = 0; j < heroes[i].length; j++) {
//         console.log(heroes[i][j]);
//     }
// }


//?FOR OF LOOOPS

//*FOR(ELEMENT OF COLLECTION){
    //*DO SOMETHING
   //*}

//!FOR ARRAYS

// let fruits = ["mango", "banana", "apple", "pineapple", "licchi"];
// for(fruit of fruits){
//     console.log(fruit);
// }

//!FOR STRINGS

// let apnacollege = "ApnaCollege";
// for (char of apnacollege) {               // //here char is a variable that will take each character of the string one by one
//     console.log(char);
// }


//?NESTED FOR OF LOOPS

// let heroes = [
//              ["iron man", "spider man", "thor"],
//              ["super man", "wonder woman", "bat man"],
//              ["anshul", "suman"]
//              ];
// for (list of heroes) {
//     for (heroName of list) {
//         console.log(heroName);
//     }
// }


//?DELETE ALL OCCURRENCES OF NUM FROM ARRAY 

// let arr = [1,2,3,4,5,4];
// let num = 4;
// for(let i = 0; i<arr.length; i++){
//     if(arr[i] == num){
//         arr.splice(i,1);
//     }
// }
// console.log(`${arr}`);

//?WRITE A JS PROGRAM TO FIND THE NUMBER OF DIGITS IN A NUMBER AND SUM OF DIGITS

// let number = 231334;
// let count = 0;
// let sum = 0;

// while (number > 0) {
//     sum += number % 10; // Add the last digit to sum
//     count++; // Increment the digit count
//     number = Math.floor(number / 10); // Remove the last digit
// }

// console.log(`Sum of digits is ${sum} and number of digits are ${count}`);


// //?WRITE A JS PROGRAM TO FIND THE NUMBER OF DIGITS IN A NUMBER AND SUM OF DIGITS

// let number = 231334;
// let count = 0;
// let sum = 0;
// while(number == 0){
//     sum = sum + number%10
//     count++;
//     number = number/10;
// }
// console.log(`sum of digits is ${sum} and number of digits are ${count}`);

//?WRITE A JS PROGRAM TO FIND FACTORIAL OF ANY POSITIVE NUMBER

// let num = 5;
// let fact = 1;
// for(let i = 1; i<=num; i++){
//     fact = fact*i
// }
// console.log(fact);


//?FIND THE LARGERST IN AN ARRAY 

// let arr = [1,2,3,4,3,4,5];
// let largest = 0;
// for(let i = 0; i<arr.length; i++){
//     if(arr[i]>largest){
//         largest = arr[i];
//     }
// }
// console.log(largest);



