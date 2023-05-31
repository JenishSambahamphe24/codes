let container=document.querySelector(".container");
let boxChild=document.querySelectorAll('.container-inner')
let child3=document.querySelector(".container :nth-Child(3)")
let a=document.querySelector("#destination")
child3.nextElementSibling.style="background-Color:blue"
// create new element using js //
let newDiv = document.createElement("section")
// Adding attribute to the Element//
newDiv.setAttribute("id","jenish")
// Adding classname to the element//
newDiv.className=("Samba")
// creating a text node//
  var newText=document.createTextNode("this is a new text node")
// Add the newly created text to the div////
newDiv.appendChild(newText);
newDiv.style.color="blue";
// add that div to the desired element//
child3.insertBefore(newDiv,a)
