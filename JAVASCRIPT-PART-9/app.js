//?DOM (DOCUMENT OBJECT MODEL)

//*THE DOM REPRESENTS A DOCUMENT WITH A LOGICAL TREE
//*IT ALLOWS US TO CHANGE THE HTML CONTENT

//!console.dir(document); to see the document object in the console


//?SELECTING ELEMENTS

//?document.getElementById('id') - selects an element by its ID

// const title = document.getElementById('title');
// console.log(title); //?<h1 id="title">Hello World</h1>

//?document.getElementsByClassName('class') - selects elements by their class name

//*RETURNS A HTML COLLECTION (NOT AN ARRAY)
//*HTMLCOLLECTION IS A LIVE COLLECTION OF ELEMENTS

// const items = document.getElementsByClassName('item');
// console.log(items); //?HTMLCollection(3) [li.item, li.item, li.item]

// let smallImages = document.getElementsByClassName("oldimg");          //*ye ek collection hai 

// for(let i = 0; i < smallImages.length; i++){
//     console.dir(smallImages[i].src);
// }


//?document.getElementsByTagName('tag') - selects elements by their tag name
//*RETURNS A HTML COLLECTION (NOT AN ARRAY)
//*HTMLCOLLECTION IS A LIVE COLLECTION OF ELEMENTS

// const items = document.getElementsByTagName('li');


//?QUERY SELECTORS

//*document.querySelector('selector') - selects the first element that matches the selector
//*document.querySelectorAll('selector') - selects all elements that match the selector

//*document.querySelector('#id') 
//*document.querySelector('.class') 
//*document.querySelector('tag')

//!select karne ka syntax css jaisa same rahega



//?USING PROPERTIES AND METHODS TO SELEECT AN ELEMENT

//*INNERTEXT 
//!SHOWS WHATS ON WEB PAGE
//*INNERHTML 
//!SHOWS THE HTML CONTENT OF AN ELEMENT
//*TEXTCONTENT 
//!SHOWS THE TEXT CONTENT OF AN ELEMENT (NO HTML TAGS)   IN HTML


//?MANIPULATING ATTRIBUTES

//*getAttribute('attribute') - gets the value of an attribute            getter method
//*setAttribute('attribute', 'value') - sets the value of an attribute   setter method

// let img = document.querySelector('img');

// img.getAttribute('id');

// img.setAttribute('id', 'spiderman');


//?MANIPULATING STYLES

//*style.property - sets the value of a style property
//*style.property = 'value' - sets the value of a style property


let links = document.querySelectorAll(".box a"); //?NodeList(3) [a, a, a]

for(let i = 0; i < links.length; i++){
    links[i].style.color = "red";
}

//?CLASS LIST PROPERTY

let img = document.querySelector('img');

img.classList.add('newclass'); //?adds a class to the element
img.classList.remove('oldclass'); //?removes a class from the element
img.classList.contains('oldclass'); //?checks if the element has a class
img.classList.toggle('oldclass'); //?adds a class if it doesn't exist, removes it if it does


//?NAVIGATION ON PAGE

//*parentElement - gets the parent element of an element
//*childElementCount - gets the number of child elements of an element

//*children - gets the child elements of an element
//*firstChild - gets the first child element of an element
//*lastChild - gets the last child element of an element
//*nextSibling - gets the next sibling element of an element
//*previousSibling - gets the previous sibling element of an element


//?ADDING ELEMENTS

//*createElement('tag') - creates a new element 
//*appendChild(element) - adds an element to the end of a parent element                parent ke child ke andar change kar sakte hain
//*insertBefore(element, referenceElement) - adds an element before a reference element
//*replaceChild(newElement, oldElement) - replaces an old element with a new element
//*appednd(element) - adds an element to the end of a parent element                    oosi parent ke andar change kar sakte hain
//*insertAdjacentElement(position, element) - adds an element at a specific position relative to the parent element


//!poitions


//*beforebegin - before the element itself
//*afterbegin - just inside the element, before its first child
//*beforeend - just inside the element, after its last child
//*afterend - after the element itself


//?REMOVING ELEMENTS


//*removeChild(element) - removes a child element from a parent element
//*remove() - removes an element from the DOM
