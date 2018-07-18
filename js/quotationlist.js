const buttonAddItem = document.querySelector('#button-add-item');
const inputItemQuantity = document.querySelector('#input-item-quantity');
const inputItemDescription = document.querySelector('#input-item-description');
const inputItemUnitary = document.querySelector('#input-item-unitary');
const table = document.querySelector('#table');
const listTitle = document.querySelector('#list-title');
 
buttonAddItem.addEventListener('click', function(event) {
    event.preventDefault();
    if(validation()){
        newItem();
        cleanInput();
        inputItemQuantity.focus();
    }
});
 
 
table.addEventListener('mouseover', function(event){
    let trItem = event.target.parentNode;
 
    let tdEdit = document.createElement('td');
    let tdRemove = document.createElement('td');
 
    tdEdit.id = 'list-item-edit';
    tdRemove.id = 'list-item-remove';
 
    tdEdit.classList.add('list-item-edit');
    tdRemove.classList.add('list-item-remove');
 
    trItem.classList.add('table-hover');
 
    trItem.appendChild(tdEdit);
    trItem.appendChild(tdRemove);
 
    tdRemove.addEventListener('click', function(){
        this.parentNode.remove();
    });
 
    tdEdit.addEventListener('click', function(event){
        let tr = event.target.addEventListener.parentNode;
        console.log(tr);
    });
});
 
 
table.addEventListener('mouseout', function(event){
    let trItem = event.target.parentNode;
 
    let tdEdit = document.querySelector('#list-item-edit');
    let tdRemove = document.querySelector('#list-item-remove');
 
    trItem.removeChild(tdEdit);
    trItem.removeChild(tdRemove);
 
    trItem.classList.remove('table-hover');
});
 
function cleanInput(){
    inputItemQuantity.value = '';
    inputItemDescription.value = '';
    inputItemUnitary.value = '';
}
 
function newItem(){
    let itemQuantity = inputItemQuantity.value;
    let itemDescription = inputItemDescription.value;
    let itemUnitary = inputItemUnitary.value;
 
    let trItem = document.createElement('tr');
 
    let tdItemQuantity = document.createElement('td');
    let tdItemDescription = document.createElement('td');
    let tdItemUnitary = document.createElement('td');
    let tdItemTotal = document.createElement('td');
 
    tdItemQuantity.textContent = itemQuantity;
    tdItemDescription.textContent = itemDescription;
    tdItemUnitary.textContent = itemUnitary;
    total = itemQuantity * itemUnitary;
    tdItemTotal.textContent = numberToReal(total);
     
    tdItemDescription.classList.add('list-item-description');
    tdItemUnitary.classList.add('list-item-Unitary');
     
    trItem.appendChild(tdItemQuantity);
    trItem.appendChild(tdItemDescription);
    trItem.appendChild(tdItemUnitary);
    trItem.appendChild(tdItemTotal);
     
    table.appendChild(trItem);
}
 
 
function numberToReal(numero) {
    let numero = numero.toFixed(2).split('.');
    numero[0] = numero[0].split(/(?=(?:...)*$)/).join('.');
 
    return numero.join(',');
}
 
listTitle.addEventListener('mouseover', function(){
    let button = document.querySelector('#title-edit-button');
    let spanTitle = document.querySelector('#list-title');
    spanTitle = spanTitle.children[0];
 
    button.classList.remove('title-edit-button-display-none');
    button.classList.add('title-edit-button-hover');
});
 
listTitle.addEventListener('mouseout', function(){
    let button = document.querySelector('#title-edit-button');
    button.classList.remove('title-edit-button-hover');
    button.classList.add('title-edit-button-display-none');
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