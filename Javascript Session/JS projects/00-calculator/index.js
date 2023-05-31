 
 
  let screen=document.getElementById("screen");
let buttons=document.querySelectorAll("button");
let screenvalue=" ";
for(item of buttons){        //to select all buttons and add eventListeners to them//
    item.addEventListener("click",(e)=>{
      buttonText=e.target.textContent;      //creating a variable buttonText for all target content//
      if(buttonText=="X"){
          buttonText="*";
          screenvalue += buttonText; //( += ) adds the value of the right operand to a variable and assigns the results
          screen.value = screenvalue; //to the variable
      }
      else if(buttonText == "C"){
          screenvalue = " ";
          screen.value = screenvalue;
      }
      else if(buttonText == "="){
          screen.value=eval(screenvalue)
      }
      else{
        screenvalue += buttonText;
          screen.value = screenvalue;
      }
    })
}