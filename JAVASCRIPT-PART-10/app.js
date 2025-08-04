//?DOM EVENTS

//*DOM events are actions that occur as a result of user interaction with the web page.
//*For example, when a user clicks a button, submits a form, or hovers over an element,
//*these actions trigger events that can be captured and handled using JavaScript.

//*DOM EVENTS ARE SIGNALS THAT SOMETHING HAS OCCURRED IN THE DOM

//?MOUSE POINTER EVENTS

//*ON CLICK - WHEN THE BUTTON IS CLICKED 
//*ON MOUSE ENTER - WHEN THE MOUSE ENTERS AN ELEMENT

// let btns = document.querySelectorAll("button");

// console.dir(btns);

// for (btn of btns) {
//   btn.onclick = sayHello;                        //*paranthesis nahi lagaye hain kyuki function ko execute nahi karana hai
//   btn.onmouseenter = function () {
//     console.log("You entered a button!");
//   };
//   btn.addEventListener("click", sayHello);
//   btn.addEventListener("click", sayName);
  // btn.addEventListener("dblclick", function () {
  //   console.log("Button double clicked!");
  //  });
    
  //   }

function sayName() {
  alert("Anshul!");
}

// btn.onclick = function () {
//   console.log("Button clicked!");
// }

function sayHello(){
    alert("Hello!");
}


//?EVENT LISTNERS

//*addEventListener() - is a method that allows you to attach an event handler to an element without overwriting existing event handlers.

//! element.addEventListener(event,callback);

//!CALLBACK FUNCTION - A function that is passed as an argument to another function and is executed after the completion of that function.


//?THIS IN EVENT LITSTNER

//*used when we want to use multiple type of objects par ek single event listner ko use karna chate hain

//*The this keyword in JavaScript refers to the context in which a function is called.

// btn.addEventListener("click", function () {
//   console.log(this); // this refers to the button that was clicked
// });

// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// let h1 = document.querySelector("h1");

// function changeColor() {
//   this.style.backgroundColor = "red"; // this refers to the button that was clicked
//   this.style.color = "white";
//   this.innerText = "Clicked!";
// }

// btn.addEventListener("click", changeColor);

// p.addEventListener("click", changeColor);

// h1.addEventListener("click", changeColor);  


//?KEYBOARD EVENTS

let btn = document.querySelector("button");

let inp = document.querySelector("input");

inp.addEventListener("keydown", function (event) {
  console.log(event.key); // logs the key that was pressed
  console.log(event.keyCode); // logs the key code of the key that was pressed
  console.log("key was pressed!");
});


//?FORM EVENTS

let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // prevents the form from being submitted


  //?EXTRACTING FORM DATA

  // let user = document.querySelector("#username");
  // let pass = document.querySelector("#password");

  console.dir(form);

  let user = this.elements[0];                                         //!this.element[0] = form.element[1]
  let pass = this.elements[1];
  // console.log(inp.value); // logs the value of the input field

  alert(`hi ${user.value} and your password is set to ${pass.value}`); // logs the value of the input field
});



//?CHANGE EVENT - TRACK CHANGES INITIAL AND FINAL
//?INPUT EVENT - TRACK EVERYTHING


















