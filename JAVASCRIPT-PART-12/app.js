//?ASYN FUNCTIONS
//*ASYNC AND AWAIT

//*kisi bhi function ko async function banane ke liye uske aage async likhna padta hai
//*async function ke andar hum await ka use kar sakte hain

//*aur jitne bhi async function hote hain unka return value promise hota hai chahe hum return me kuch bhi likhein ya promise na likhein
//*await ka use sirf async function ke andar hi kar sakte hain

//*async func by default promise return karte hain


async function greet() {
    throw "Something went wrong"; //*this will throw an error
    return "hello";
}

//*if function executes then it returns a promise and if it has some value then it will be resolved
//*if function throws an error then it will be rejected

//* if we want to throw an error then we can use through keyword

// async function greet() {
//     throw new Error("Something went wrong"); //*or we can use another syntax to throw an error
//     throw "Something went wrong";            //*this will also throw an error
//     return "hello";
// }


// greet()
//     .then((result)=> {
//         console.log(result); //*hello
//     })
//     .catch((error) => {
//         console.log("Error: ", error); //*Error: Something went wrong
//     });


// //*aysnc function with arrow function syntax

// let demo = async () => {
//     return "demo"; //*this will return a promise with resolved value "demo"
// }

// demo()
//     .then((result) => {
//         console.log(result); //*demo
//     })
//     .catch((error) => {
//         console.log("Error: ", error);
//     }); 



//?AWAIT


//*await keyword pauses the execution of the async function until the promise is resolved or rejected


function getNum() {       //*is wale function ko async banane ki liye humein ya to async use karna hoga ya phir promise return karna hoga
    return new Promise((resolve,reject) => {
        // let num = Math.floor(Math.random() * 10) + 1; 
        // return num;    //*we can also return set timeout here to simulate some delay or to make it asynchronous kyuki kuch seconds ke baad wale kaam wala logic lagega


        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1; 
            console.log(num);   
            resolve();                  //*this will resolve the promise after 1 second    
        }, 1000)                             
    })                                               
    
}



async function memo() {
    await getNum();               //*this will return 5 but it will not wait for the promise to be resolved
    await getNum();         //*await can only be used inside an async function
    await getNum();        //*this will wait for the promise to be resolved before executing the next line
    getNum();        //*this will wait for the promise to be resolved before executing the next line
    getNum();        //*this will wait for the promise to be resolved before executing the next line
    console.log("All numbers generated"); //*this will be printed after all the promises are resolved
}



// function changecolor(color , delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let h1 = document.querySelector("h1");
//             h1.style.color = color;  //*this will change the color of the h1
//             resolve();                //*this will resolve the promise after 1 second
//         }, delay);
//         })
//     }



// async function changeColors() {
//     await changecolor("red", 1000);   //*this will change the color of the h1 to red after 1 second
//     await changecolor("blue", 1000);  //*this will change the color of the h1 to blue after 1 second
//     await changecolor("green", 1000); //*this will change the color of the h1 to green after 1 second
//     await changecolor("yellow", 1000); //*this will change the color of the h1 to yellow after 1 second
//     changecolor("purple", 1000); //*this will change the color of the h1 to purple after 1 second
//     console.log("All colors changed"); //*this will be printed after all the promises are resolved
// }



//*async await calling me use hota hai



//?HANDLING REJECTION IN ASYNC AND AWAIT FUNCTIONS 



// function changecolor(color , delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 5) + 1; //*this will generate a random number between 1 and 10
//             if (num > 3) { //*if the random number is greater than 3 then resolve the promise
//                 // throw new Error("Something went wrong"); //*this will throw an error  OR WE can use reject to reject the promise
//                 reject("Something went wrong"); //*this will reject the promise with the error message
//             }
//             let h1 = document.querySelector("h1");
//             h1.style.color = color;  //*this will change the color of the h1
//             resolve();                //*this will resolve the promise after 1 second
//         }, delay);
//         })
//     }



// async function changeColors() {
//     await changecolor("red", 1000);   //*this will change the color of the h1 to red after 1 second
//     await changecolor("blue", 1000);  //*this will change the color of the h1 to blue after 1 second
//     await changecolor("green", 1000); //*this will change the color of the h1 to green after 1 second
//     await changecolor("yellow", 1000); //*this will change the color of the h1 to yellow after 1 second
//     await changecolor("purple", 1000); //*this will change the color of the h1 to purple after 1 second
//     console.log("All colors changed"); //*this will be printed after all the promises are resolved

//     let a = 5;                                     //!due to those rejection jo kaam promise pe depend bhi nahi kar rha hai vo bhi nahi hoga
//     console.log(a); //*this will print 5
//     console.log("newnum = ", a); //*this will print newnum = 5             
// }


//?now how we asn solve this is by using try catch block jis bhi code pe shsak hai ki yaha se error aa sakta hai ya promise
//? reject hoga usko try block me rakhte hain



function changecolor(color , delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 5) + 1; //*this will generate a random number between 1 and 10
            if (num > 3) { //*if the random number is greater than 3 then resolve the promise
                // throw new Error("Something went wrong"); //*this will throw an error  OR WE can use reject to reject the promise
                reject("Something went wrong"); //*this will reject the promise with the error message
            }
            let h1 = document.querySelector("h1");
            h1.style.color = color;  //*this will change the color of the h1
            resolve();                //*this will resolve the promise after 1 second
        }, delay);
        })
    }



async function changeColors() {
    try{
        await changecolor("red", 1000);   //*this will change the color of the h1 to red after 1 second
        await changecolor("blue", 1000);  //*this will change the color of the h1 to blue after 1 second
        await changecolor("green", 1000); //*this will change the color of the h1 to green after 1 second
        await changecolor("yellow", 1000); //*this will change the color of the h1 to yellow after 1 second
        await changecolor("purple", 1000); //*this will change the color of the h1 to purple after 1 second
        console.log("All colors changed"); //*this will be printed after all the promises are resolved
    }
    catch(error) {
        console.log("Error: ", error); //*this will print the error message if any of the promises are rejected
    }
    let a = 5;                                     //!due to those rejection jo kaam promise pe depend bhi nahi kar rha hai vo bhi nahi hoga
    console.log(a); //*this will print 5
    console.log("newnum = ", a); //*this will print newnum = 5             
}




//*API - APPLICTION PROGRAMMING INTERFACE
//*API is a set of protocols and tools for building software applications
//*API allows different software applications to communicate with each other

//*USER SERVER KO ACCESS NAHI  KARTA VO API KO AKARTA HAI 

//*WE WILL LEARN WEB API 

//* WAY TO INTERACT WITH THE SERVER

//*API USE HTTP PROTOCOLS ARE KNOWN AS REST API OR WEB API


//*API GIVES US DATA IN RESPONSE IN JSON FORMAT
//*JSON - JAVASCRIPT OBJECT NOTATION

//*JSON IS A LIGHTWEIGHT DATA INTERCHANGE FORMAT
//*JSON IS EASY TO READ AND WRITE


//?WHENEVER WE GET DATA IN JSON IT IS IN STIRNG FORMAT
//*SO WE NEED TO PARSE IT TO CONVERT IT TO OBJECT

//*WE CANT ACCESS THE DATA DIRECTLY IN JASON FORMAT

// let jasonresponse = '{"name": "John", "age": 30, "city": "New York"}'; //*this is a JSON string

// let validresponse = JASON.parse(jasonresponse); //*this will convert the JSON string to object


//*if we want to convert the object to JSON string then we can use 

//! JSON.stringify(object) method





//?AJAX - ASYNCHRONOUS JAVASCRIPT AND XML


//*AJAX is a technique for creating fast and dynamic web pages  
//*AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes
//*AJAX is not a programming language but a combination of technologies
                                           



//*ID VALID VALUE SE REPLACE HOGA
//let id = "https://jsonplaceholder.typicode.com/posts/1"; //*this is a URL for the API


//NAME KEY COUNTRY VALUE

//QUERY STRINGS KE ANDAR AGAR AISA KOI DATA YA VALUE BHEJ DEIN JO VO RECOGNISE NAHI TO API OOSE IGNORE KAR DETI HAI

//?HTTP HEADERS


//*HTTP headers are used to pass additional information with HTTP requests or responses




//*FIRST API REQUEST BY USING FETCH METHOD


//*fetch(url)


let url = "https://catfact.ninja/fact";

// fetch(url)                                 //!fetch method returns a promise
//     .then((res) => {
//         console.log(res);
//         res.json()            //*this function is used to make data in readable format and returns a promise again jispe hujm then use kar sakte hai
//               .then((data) => {
//                 console.log(data);
//               })
//     })
//     .catch((err) => {
//         console.log(err);
//     })

//     //*fetch ke sath jo promise hote hain vo tabhi resolve ho jate hain jab api response ke sath kuch headers return karr deti hai



//*better format by chaing




fetch(url)                                 //!fetch method returns a promise
    .then((res) => {
       
        return res.json()    //*this returns a promise on which we can use then method
    })
    .then((data) => {
                console.log("data1 = " , data.fact);
                return fetch(url);        //*if we again want to send a request
    })
    .then((res) => {
        
         return res.json()
    })
    .then((data) => {
        console.log("dta2 is = " , data2.fact);
    })
    .catch((err) => {
        console.log(err);
    })


    //*ye saari cheejein aasunchronous hai javascript wait nahi karta i sabke resolve hone ke 
    //*liye to agar niche kuch print karenge to print ho jayega pehele hi

    console.log("done");

    //*fetch ke sath jo promise hote hain vo tabhi resolve ho jate hain jab api response ke sath kuch headers return karr deti hai 




//?now we will do all this fetch things by using async and await



// async function getFacts() {
//     let res = fetch(url);
//     console.log(res);   //*is case me undefined ayega kyuki js synchronous hai kya pata abhi result aaya hi na ho oose pehele hi print karayega
   
// }


//*therefore we will use await keyword


async function getFacts() {
    try{
        let res = await fetch(url); //*yaha se readable format me return nahi karega 
        let data1 = await res.json();     //*therefore aisa kiyya hai aur ye bhi ek promise return kaega isiliye iske liye bhi await karenge
        console.log(data1.fact);          //*.fact kyuki string ko objecct me convert kar diya hai 
    }
    catch(e){
        console.log("error occured " , e);
    }
    console.log("bye");
}





