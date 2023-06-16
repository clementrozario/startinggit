let newline=document.createElement("li");
newline.textContent="new item";

let listitem=document.getElementById("items");
listitem.appendChild(newline);

const listitems=document.getElementsByTagName("li");

listitems[2].style.backgroundColor="green";


for(let i=0;i<listitems.length;i++)
listitems[i].style.fontWeight="bold";