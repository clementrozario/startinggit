var itemlist=document.querySelector('#items');
console.log(itemlist.parentElement);
itemlist.parentElement.style.backgroundColor= '#f4f4f4';
console.log(itemlist.parentElement.parentElement);

console.log(itemlist.children);
console.log(itemlist.children[3]);
itemlist.children[3].style.backgroundColor="yellow";

console.log(itemlist.firstChild);
console.log(itemlist.firstElementChild);
itemlist.firstElementChild.textcontent='hello world';

console.log(itemlist.lastChild);
console.log(itemlist.lastElementChild);
itemlist.lastElementChild.textcontent='hello world';


console.log(itemlist.nextSibling)
console.log(itemlist.nextElementSibling);

console.log(itemlist.previousSibling);
console.log(itemlist.previousElementSibling);
itemlist.previousElementSibling.style.color="green";


//create div
var newdiv=document.createElement('div');
console.log(newdiv);

//add class

newdiv.className='hello'
//add id
newdiv.id='1'
//add attribute
newdiv.setAttribute('title','hello');

//add text nose and append child
var divtext=document.createTextNode('hello world');
newdiv.appendChild(divtext);























