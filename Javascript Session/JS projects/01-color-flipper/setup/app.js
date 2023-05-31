const colors = ["green", "red", "rgba(133,122,200)", "#f15025","yellowgreen","grey","purple"];
const btn=document.getElementById("btn");
const color=document.querySelector(".color");
btn.addEventListener("click",function(){
    //get random Number between 0-3 of array//
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];  
})
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}
