const form=document.querySelector('#login-form')
const container=document.querySelector(".container");
const username=document.querySelector(".username");
const password=document.querySelector('.password')
form.addEventListener('submit',function(e){
    var newDiv=document.createElement('div')
    newDiv.className="admin-card"
    newDiv.innerHTML=`<div class="input-result">
    <h5>Username:${username.value}</h5>
    <h5>password:${password.value}</h5>
    <div class="text-center">
    <i class="bi bi-trash3  display-6"></i>
    </div>`
    container.insertAdjacentElement('beforeend',newDiv)
    e.preventDefault();
})