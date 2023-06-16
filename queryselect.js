document.querySelector("#items li:nth-child(2)").style.backgroundColor = "green";


document.querySelector("#items li:nth-child(3)").style.display = "none";




const secondItem = document.querySelectorAll("#items li")[2];
secondItem.style.color = "green";

const oddItems = document.querySelectorAll("#items li:nth-child(odd)");
oddItems.forEach((item) => {
  item.style.backgroundColor = "green";
});

