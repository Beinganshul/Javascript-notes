//? CALL STACK


// function one () {
//     return 1;
// }

// function two () {
//     return one() + one();
// }

// function three () {
//     let ans = two() + one();
//     console.log(ans);
// }

// three();


// ?JS IS SINGLE THREADED LANGUAGE


//*BUT STILL CAN DO ASYNC OPERATIONS LIKE CALL BACKS WHICH WORKS ON  WHEN SOME THING IS GOING ALREADY
//? ASYNC OPERATIONS
//? 1. setTimeout   


// setTimeout(()=>{
//     console.log("Hello from setTimeout");   
// },2000); // 2 second delay

// console.log("hello");


//*HELLO PEHELE PRINT HOGA PHIR SET TIMEOUT KA CALLBACK FUNCTION


//*ISME BROWSER KA BHI EK IMP ROLE HAI JS ME JITNE BHI SET TIME OUT FUNCTION HONGE VO BROWSER ME CHALE JAYENGE AUR BROWSER WAIT KAREGA JITNE SEC KA 
//*SET TIME OUT HAI OOS WAIT ME JS NORMALLY RUN HOTA RAHEGA JITNA TIME THA HONE KE BAAD BROWSER STO KO JS KE CALL STACK ME BHEJ DEGA 
//*JS WAIT WALI RESPONSIBILITY LETA HI NAHI HAI OOSE BROWSER KO DEDETA HAI 


//*EK KE BAAD EK KAAM HOGA TO OOSE SYNCHRONUS NATURE BOLA JAYEGA 
//*STO SI AND CAAL BACKS JAISI CHEEJEIN HO TO OOSE ASYNCHRONUS BOLENGE


//?CALL BACK HELL

// h1 = document.querySelector("h1")


// function changeColor(color,delay){
//     setTimeout(()=>{
//         h1.style.color = color;
//     },delay)
// }

// changeColor("red", 1000);
// changeColor("green", 2000);
// changeColor("yellow", 3000);


//*another way

// function changeColor(color, delay, callback) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if(callback) callback();
//     }, delay);
// }   


// changeColor("red", 1000, () => {
//     changeColor("green", 2000, () => {

//         });
//     });

// not a good way to do it


//*thats why we use promises to avoid callback hell



//? callback hell example
//? simulating a database save operation with callbacks

// function saveToDb(data , successCallback, errorCallback) {

//     let internetSpeed = Math.floor(Math.random() * 10) + 1; // simulating internet speed between 1 to 10 Mbps

//     if (internetSpeed < 5) {
//         successCallback();
//     }
//     else {
//         errorCallback();
//     }
// }

// saveToDb(
//     "user data",
//     () => {
//         console.log("data saved successfully");

//         saveToDb(
//                 "data2",
//                 () => {
//                     console.log("data2 saved successfully");
//                 },
//                 () => {
//                     console.log("data2 not saved, please try again later");
//                 }
//             );
//     },
//     () => {
//         console.log("data not saved, please try again later");
//     }
// );


//? PROMISES

//*the promises object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

//*resolve - the operation completed successfully
//*reject - the operation failed

// function saveToDb(data) {

//     let internetSpeed = Math.floor(Math.random() * 10) + 1; // simulating internet speed between 1 to 10 Mbps
    
//     return new Promise((resolve , reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1; // simulating internet speed between 1 to 10 Mbps
        
//         if (internetSpeed < 5) {
//             resolve("Data saved successfully");                //*YAHI APNA RESULT HAI
//         }
//         else {
//             reject("Data not saved, please try again later"); //**YAHI APNA ERROR HAI
//         }
//     });
// }  


//?METHODS OF PROMISEs

//*.then() - used to handle the resolved value of the promise   IF RESOLVED TO KYA HO
//*.catch() - used to handle the rejected value of the promise  IF REJECTED TO KYA HO


// let request = saveToDb("user data");   //*request is a promise object . the promise return by the saveToDb function

// request 
//     .then(() => {
//         console.log("data saved successfully");
//         console.log(request);
//     })
//     .catch(() => {
//         console.log("data not saved, please try again later");
//         console.log(request);
//     });




// saveToDb("user data") 
//     .then(() => {
//         console.log("data saved successfully");
//     })
//     .catch(() => {
//         console.log("data not saved, please try again later");
//     });


//? CHAINING PROMISES

//*when we use multiple then() methods on a promise, it creates a chain of promises. Each then() method returns a new promise, allowing us to handle the result of the previous promise in the chain.



// saveToDb("user data") 
//     .then(() => {
//         console.log("data saved successfully");
//         saveToDb("data2")
//             .then(() => {
//                 console.log("data2 saved successfully");
//             });                                               //*no need to use catch here
//     })
//     .catch(() => {
//         console.log("promise is rejected");
//     });

//* better way to do it 


// saveToDb("user data") 
//     .then((result) => {                            //*here resolved value is passed as result in order to print it
//         console.log("data saved successfully and result is: ", result);
//         return saveToDb("data2");                             //*ye ek promise return ho raha hai jiska then niche hai             
//     })
//     .then((result) => {
//         console.log("data2 saved successfully and result is: ", result);
//         return saveToDb("data3");
//     })
//     .then((result) => {
//         console.log("data3 saved successfully and result is: ", result);
//     })
//     .catch((error) => {
//         console.log("promise is rejected because: ", error);
//     });


    //? HO KYA RAHA HAI 

    //* PEHELE DB ME FIRST DATA SAVE KARAO AUR AGAR DATA SAVE HO GYA TO PRINT KAR DO DATA SAVED AND THEN SECCOND DATA SAVE KARAO 
    //* and promise return kar do
    //* JO BHI PROMISE AYEGA AGAR VO BHI COMPLETE HO GYA TO PRINT KARAO DATA2 SAVED THEN THIRD DATA SAVE KARAO BEECH ME KAHI ERROR AYE YA DATA SAVE
    //*SAVE NA HO TO CATCH ME CHALA JAYEGA

    //*used in apis ki first call agar successfull ho to hi second call jaye




    //?REFACTORING THE OLD CODE USING PROMISES


    function changeColor(color, delay) {
        return new Promise((resolve,reject) => {
            h1 = document.querySelector("h1");
            setTimeout(() => {
                h1.style.color = color;
                resolve("color chnged"); // resolve the promise when the color is changed
            }, delay);
        })
    }


    changeColor("red", 1000)
        .then(() => {
            return changeColor("green", 1000);
        })
        .then(() => {
            return changeColor("yellow", 1000);
        })
        .catch((error) => {
            console.log("Error: ", error);
        });










