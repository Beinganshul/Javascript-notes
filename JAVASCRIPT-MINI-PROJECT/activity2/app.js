let btn = document.querySelector('#addTask');
let ul = document.querySelector('#taskList');
let inp = document.querySelector('#task');

btn.addEventListener('click', function() {


    let item = document.createElement('li'); //*li element create karna hai
    item.innerText = inp.value; //*input se value lena hai


    let delbtn = document.createElement('button'); //*button create karna hai
    delbtn.innerText = 'Delete'; //*button ka text set karna hai
    delbtn.classList.add('delete'); //*button ko class add karna hai



    item.appendChild(delbtn); //*button ko li ke andar append karna hai
    ul.appendChild(item);      //*li ko ul ke andar append karna hai
    inp.value = '';      //*print karane ke baad input ko khali karna hai
});



ul.addEventListener('click', function(event) { //*ul par click event listener lagana hai

    // console.log("button clicked");
    // console.log(event.target); //*event object ko console par print karna hai
    // console.log(event.target.nodeName); //*event.target batata hai ki kisil vajah se event hua hai

    //* node.Name = kis cheej ne event ko trigger kiya hai

    if(event.target.nodeName === "BUTTON") { //*agar event.target button hai
      
        let listItem = event.target.parentElement; //*toh uska parent lena hai, jo ki li hoga
        ul.removeChild(listItem); //*aur us parent ko remove karna hai
    }









    // if (e.target.classList.contains('delete')) { //*agar click kiya hua element delete class ka hai
    //     let li = e.target.parentElement; //*toh uska parent lena hai    
    //     ul.removeChild(li); //*aur us parent ko remove karna hai
    // }




});



// let delbtns = document.querySelectorAll('.delete'); //*sabhi delete button ko select karna hai
// for(delbtn of delbtns){
//     delbtn.addEventListener('click', function() { //*button par click event listener lagana hai
//        let par = this.parentElement;  //!this se parent element lena hai , jis del btn ko click karenge oosi ka parent ayega
//        console.log(par);               //!this ka important use hai
//        par.remove();  //*parent ko remove karna hai //alternative ul.removeChild(par);
//     });
// }






//!given by gpt



// let btn = document.querySelector('#addTask');
// let ul = document.querySelector('#taskList');
// let inp = document.querySelector('#task');

// btn.addEventListener('click', function() {
//     let item = document.createElement('li');
//     item.innerText = inp.value;

//     let delbtn = document.createElement('button');
//     delbtn.innerText = 'Delete';
//     delbtn.classList.add('delete');

//     item.appendChild(delbtn);
//     ul.appendChild(item);

//     inp.value = '';
// });

// // Use event delegation for dynamically added delete buttons
// ul.addEventListener('click', function(e) {
//     if (e.target.classList.contains('delete')) {
//         let li = e.target.parentElement;
//         ul.removeChild(li);
//     }
// });

