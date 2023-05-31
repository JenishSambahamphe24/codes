// st initial count//
let  count=0;
//select value and buttons///
const btns  = document.querySelectorAll(".btn");
const value = document.querySelector("#value")
// It becomes lengthy when we select each btn class with increase, decrease, reset so we select a common class button and iterate through each of the button//
btns.forEach(function (btn){
     btn.addEventListener("click", function(e){
     const styles=e.currentTarget.classList;
     if(styles.contains("decrease")){
         count --;
     } else if(styles.contains("increase")){
      count ++;
     } else{
      count = 0;   
     }
     if(count<0){
         value.style.color="red"
     }else if( count>0){
         value.style.color="yellowgreen"
     }else{
         value.style.color="#222"
     }
     value.textContent = count;
    })
})