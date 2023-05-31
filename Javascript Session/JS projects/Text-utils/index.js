const textArea = document.getElementById("exampleFormControlTextarea1");
const text = document.getElementById("exampleFormControlTextarea1");
const btns = document.querySelectorAll(".btn-outline-secondary");
btns.forEach(function (item) {
  item.addEventListener("click", function (e) {
    if (e.target.classList.contains("uppercase")) {
      let uppercaseText=text.value.toUpperCase();
      textArea.value=uppercaseText;
    } else if (e.target.classList.contains("lowercase")) {
      let lowercaseText=text.value.toLowerCase();
      textArea.value=lowercaseText;
    } 
    else if (e.target.classList.contains("cleartext")) {
        text.value="";    
    } else if (e.target.classList.contains("capitalizeFirst")) {
    let string=text.value
    let word=string.charAt(0).toUpperCase()+string.slice(1);
    textArea.value=word;
  }
    e.preventDefault();
  });
});
