
// Adding event listener by creating a function
// function onclick(){
//  document.querySelector('.nav h3').innerText="changed";
//  document.querySelector(".nav").style="background-Color:blue;"
// }
// let btn=document.querySelector(".btn").addEventListener('click',onclick)

// e.target//
// let btn=document.querySelector(".btn")
// btn.addEventListener("click",function(e){
    // console.log(e.target.className) //gives the classname
    // console.log(e.target.classList)
    // console.log(e.target.id)
// var output=document.querySelector("#output")
// output.innerHTML="<h3>"+e.target.className+"</h3>"
// types of events//

// e.clientx,e.clienty gives the measure of mouse click from the x- axis or y-axis from the browser window

// e.offsetx e.offsety The offsetX property returns the x-coordinate of the mouse pointer, relative to the target element.
// })

// mousedown
// mouseup
// mouseenter
// mouseleave
// mouseover
// mouseout

// let box=document.querySelector(".box")
// box.addEventListener('mousemove',function(e){
//     output.innerHTML="<h3>Mouse-X:"+e.offsetX+"</h3> <br> <h3>Mouse-x:"+e.offsetY+"</h3>"
// })
let itemInput=document.querySelector(".form-control");
let submitBtn=document.querySelector(".btn");
let output=document.getElementById("output")
submitBtn.addEventListener("click",function(e){
output.innerHTML="<h4>"+itemInput.value+"<h4>"
e.preventDefault();
})