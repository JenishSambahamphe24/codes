var addForm=document.querySelector("#addForm")
var itemList=document.querySelector("#items");
// form submit Event
addForm.addEventListener("submit",function(e){
    // Getting input value
     var newItem=document.querySelector("#item")
    //  creating a new li element
     var li=document.createElement("li");

    //  adding className to the li
     li.className="list-group-item";

    //  adding input value(text node) as  child to the li element 
     li.appendChild(document.createTextNode(newItem.value));

    // same process is done for the delete button 
     var delBtn=document.createElement('button');
     delBtn.className="btn btn-danger btn-sm float-right delete";
     delBtn.appendChild(document.createTextNode('X'));
    //  append delBtn to li
     li.appendChild(delBtn)

    //  append li to Itemlist
     itemList.appendChild(li)
    e.preventDefault();
})

// Delete Event//
itemList.addEventListener('click',function(e){
   if(e.target.classList.contains('delete')){
   if(confirm('Are you sure')){
    var li=e.target.parentElement;
    itemList.removeChild(li)
   }
   }
})
