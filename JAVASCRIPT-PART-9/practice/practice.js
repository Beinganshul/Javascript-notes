let para1 = document.createElement('p');

para1.innerText = 'This is a paragraph';

document.querySelector('body').append(para1);

para1.classList.add("red");

let div = document.createElement('div');
let h = document.createElement('h3');
let p = document.createElement('p');
div.classList.add('blue');
h.innerText = 'This is a heading';
p.innerText = 'This is a paragraph inside a div';
div.append(h);
div.append(p);

document.querySelector('body').append(div);