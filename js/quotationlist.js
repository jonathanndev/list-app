var buttonAddItem = document.querySelector("#button-add-item");
var inputItemQuantity = document.querySelector("#input-item-quantity");
var inputItemDescription = document.querySelector("#input-item-description");
var inputItemUnitary = document.querySelector("#input-item-unitary");
var table = document.querySelector("#table");
var listTitle = document.querySelector("#list-title");
 
buttonAddItem.addEventListener("click", function(event) {
    event.preventDefault();
    if(inputItemDescription.value == ""){
        var divAlert = document.querySelector("#alert-validation");
        if(!divAlert.classList.contains("alert-validation")){
            alertValidation("Descricao obrigatoria!");
        }
    } else{
        newItem();
        cleanInput();
        inputItemQuantity.focus();
    }
});
 
 
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
 
 
function alertValidation(description){
    var divAlert = document.querySelector("#alert-validation");
 
    var spanDescription = document.createElement("span");
    var spanButtonClose = document.createElement("span");
 
    spanDescription.textContent = description;
    spanButtonClose.textContent = "X";
 
    divAlert.classList.add("alert-validation");
    divAlert.appendChild(spanDescription);
    divAlert.appendChild(spanButtonClose);
 
    spanButtonClose.addEventListener("click", function(){
        divAlert.classList.remove("alert-validation");
        divAlert.removeChild(spanDescription);
        divAlert.removeChild(spanButtonClose);
    });
}
 
 
function cleanInput(){
    inputItemQuantity.value = "";
    inputItemDescription.value = "";
    inputItemUnitary.value = "";
}
 
function newItem(){
    var itemQuantity = inputItemQuantity.value;
    var itemDescription = inputItemDescription.value;
    var itemUnitary = inputItemUnitary.value;
 
    var trItem = document.createElement("tr");
 
    var tdItemQuantity = document.createElement("td");
    var tdItemDescription = document.createElement("td");
    var tdItemUnitary = document.createElement("td");
    var tdItemTotal = document.createElement("td");
 
    tdItemQuantity.textContent = itemQuantity;
    tdItemDescription.textContent = itemDescription;
    tdItemUnitary.textContent = itemUnitary;
    total = itemQuantity * itemUnitary;
    tdItemTotal.textContent = numberToReal(total);
     
    tdItemDescription.classList.add("list-item-description");
    tdItemUnitary.classList.add("list-item-Unitary");
     
    trItem.appendChild(tdItemQuantity);
    trItem.appendChild(tdItemDescription);
    trItem.appendChild(tdItemUnitary);
    trItem.appendChild(tdItemTotal);
     
    table.appendChild(trItem);
}
 
 
function numberToReal(numero) {
    var numero = numero.toFixed(2).split('.');
    numero[0] = numero[0].split(/(?=(?:...)*$)/).join('.');
 
    return numero.join(',');
}
 
listTitle.addEventListener("mouseover", function(){
    var button = document.querySelector("#title-edit-button");
    var spanTitle = document.querySelector("#list-title");
    spanTitle = spanTitle.children[0];
 
    button.classList.remove("title-edit-button-display-none");
    button.classList.add("title-edit-button-hover");
});
 
listTitle.addEventListener("mouseout", function(){
    var button = document.querySelector("#title-edit-button");
    button.classList.remove("title-edit-button-hover");
    button.classList.add("title-edit-button-display-none");
});