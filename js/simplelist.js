var buttonAddItem = document.querySelector("#button-add-item");
var inputItemQuantity = document.querySelector("#input-item-quantity");
var inputItemDescription = document.querySelector("#input-item-description");
var table = document.querySelector("#table");
var listTitle = document.querySelector("#list-title");
 
buttonAddItem.addEventListener("click", function(event) {
    event.preventDefault();
    if(validation()){
        newItem();
        cleanInput();
        inputItemQuantity.focus();
    }
});
 
function newItem(){
    var itemQuantity = inputItemQuantity.value;
    var itemDescription = inputItemDescription.value;
 
    var trItem = document.createElement("tr");
 
    var tdItemQuantity = document.createElement("td");
    var tdItemDescription = document.createElement("td");
 
    tdItemQuantity.textContent = itemQuantity;
    tdItemDescription.textContent = itemDescription;
     
    tdItemDescription.classList.add("list-item-description");
     
    trItem.appendChild(tdItemQuantity);
    trItem.appendChild(tdItemDescription);
     
    table.appendChild(trItem);
}
 
function cleanInput(){
    inputItemQuantity.value = "";
    inputItemDescription.value = "";
}
 
table.addEventListener("mouseover", function(event){
    var trItem = event.target.parentNode;
 
    var tdEdit = document.createElement("td");
    var tdRemove = document.createElement("td");
 
    tdEdit.id = "list-item-edit";
    tdRemove.id = "list-item-remove";
 
    tdEdit.classList.add("list-item-edit");
    tdRemove.classList.add("list-item-remove");
 
    trItem.classList.add("table-hover");
 
    trItem.appendChild(tdEdit);
    trItem.appendChild(tdRemove);
 
    tdRemove.addEventListener("click", function(){
        this.parentNode.remove();
    });
 
    tdEdit.addEventListener("click", function(event){
        var tr = event.target.addEventListener.parentNode;
        console.log(tr);
    });
});
 
table.addEventListener("mouseout", function(event){
    var trItem = event.target.parentNode;
 
    var tdEdit = document.querySelector("#list-item-edit");
    var tdRemove = document.querySelector("#list-item-remove");
 
    trItem.removeChild(tdEdit);
    trItem.removeChild(tdRemove);
 
    trItem.classList.remove("table-hover");
});
 
listTitle.addEventListener("mouseover", function(){
    var button = document.querySelector("#title-edit-button");
    button.classList.remove("title-edit-button-display-none");
    button.classList.add("title-edit-button-hover");
});
 
listTitle.addEventListener("mouseout", function(){
    var button = document.querySelector("#title-edit-button");
    button.classList.remove("title-edit-button-hover");
    button.classList.add("title-edit-button-display-none");
});

function validation(){
    if(inputItemDescription.value == ''){
        //check why it is not working
        inputItemDescription.classList.add('validation-decoration');
        inputItemDescription.placeholder = 'Description is required'
        return false;
    }else{
        if(inputItemDescription.classList.contains('validation-decoration')){
            inputItemDescription.classList.remove('validation-decoration');
        }
        if(inputItemDescription.hasAttribute('placeholder')){
            inputItemDescription.removeAttribute('placeholder');
        }
        return true;
    }
}