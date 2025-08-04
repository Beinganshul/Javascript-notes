//?AXIOS LIBRARY

//*A LIBRARY TO MAKE HTTP REQUEST 
//*IT IS A BETTER WAY OF SENDING REQUEST

//*NO NEED TO PARSE DATA  ALREADY IN OBJECT FORMAT

let url = "https://catfact.ninja/fact";


async function getFacts() {
    try{
        let res = await axios.get(url);        
        return res.data.fact;        
    }
    catch(e){
        console.log("error occured " , e);
        return "no fact found";
    }
}


let btn = document.querySelector("button");


btn.addEventListener("click" , async () => {   //*async func promise return karta hai to iske call pe bhi async await lagega to resolve the promise
    let op = await getFacts()                   //*to get facts se jo fact ayega vo already resolved hogi 
    let p = document.querySelector("#fact");
    p.innerText = op;
})                   



//?SENDING HEADERS USING AXIOS


const url2 = "https://icanhazdadjoke.com/" ;

async function getJokes(){
    try{
        const config = {headers: {Accept : "application/json" }}    //*in order to get data in json format
        let res = await axios.get(url2,config);
        console.log(res.data);
    }
    catch(e){
        console.log(e);
    }
}                              //*done github


