//?IF STATEMENT

let color = "red";
if(color === "red"){
    console.log("stop");
}
if(color === "yellow"){
    console.log("slow down");
}
if(color === "green"){
    console.log("go");
}

//? IF ELSE STATEMENT

let firstName = "shravan";
if(firstName === "shravan"){
    console.log(`Hello ${firstName}`);
}else{
    console.log("Hello Guest");
}

//? ELSE IF STATEMENT

let time = 10;
if(time < 10){
    console.log("Good Morning");
}
else if(time < 20){
    console.log("Good Afternoon");
}
else if(time < 24){
    console.log("Good Evening");
}


//?PRACTICE QESTION

let poopcornPrice = "XL";
if(poopcornPrice === "XL"){
    console.log("Price is 200");
}
else if(poopcornPrice === "L"){
    console.log("Price is 150");
}
else if(poopcornPrice === "M"){
    console.log("Price is 100");
}
else if(poopcornPrice === "S"){
    console.log("Price is 50");
}
else{
    console.log("Invalid Size");
}

//?NESTED IF ELSE

let marks = 20;
if(marks >= 35){
    console.log("pass");
    if(marks >= 60){
        console.log("first class");
    }
    else{
        console.log("second class");
    }
}
else{
    console.log("Better Luck Next Time");
}


//? PRACTICE QUESTION

let str = "apple";
if((str[0] === 'a') && (str.length > 3)){
    console.log("String is a good string");
}else{
    console.log("String is not a good string")
}


//? PRACTICE QUESTION

let num = 12;
if((num%3 === 0) && ((num-1 ===11) || (num+1 === 11))){
    console.log("Safe"); 
}else{
    console.log("Unsafe");
}


//? TRUTHY AND FALSY VALUES

//*EVERYTHING IN JS IS ASSIGNED A BOOLEAN VALUE TRUE OR FALSE
//*EXCEPT FOR THE FOLLOWING VALUES  
//*Falsy values are: false, 0, "", null, undefined, NaN
//*Truthy values are: true, 1, " ", [], {}, function(){}   EVERYTHING ELSE OTHER THAN FALSY VALUES


//? SWITCH CASE STATEMENT

let color1 = "red";
switch (color1) {
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("slow down");
        break;
    case "green":
        console.log("go");
        break;
    default:
        console.log("Invalid Color");
}

//? ALERT AND PROMPT

//* ALERT = DISPLAYS AN ALERT MESSAGE ON THE PAGE
//* PROMPT = DISPLAYS A PROMPT BOX TO ENTER SOME VALUE INPUT


// let name = prompt("Enter your name");       //!PROMPT BOX USED TO ENTER VALUE INPUT
// alert("something is wrong");                //!ALERT BOX USED TO DISPLAY ALERT MESSAGE
// console.error("this is an error");          //!THIS IS USED TO DISPLAY ERROR MESSAGE IN THR CONSOLE
// console.warn("this is a warning");          //!THIS IS USED TO DISPLAY WARNING MESSAGE IN THR CONSOLE   


//? PRACTICE QUESTION

// let firstName1 = prompt("Enter your first name");
// let lastName = prompt("Enter your last name");
// let fullName = `${firstName1} ${lastName}`;
// console.log(`Hello ${fullName}`);


//? PRACTICE QUESTION

let num1 = 12;
if(num%10 ===0){
    console.log("divisible by 10");
}
else{
    console.log("not divisible by 10");
}


//? PRACTICE QUESTION

let name = prompt("enter your name");
let age = prompt("enter your age");
console.error(`Hello ${name} you are ${age} years old`);






