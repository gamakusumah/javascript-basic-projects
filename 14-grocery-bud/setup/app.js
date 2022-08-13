// SELECT ITEMS
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const btnSubmit = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const btnClear = document.querySelector('.clear-btn');

let editElement = ``;
let editFlag = false;
let editId = '';

// EVENT LISTENER
form.addEventListener('submit', submitItem);
btnClear.addEventListener('click', clearItems);

// FUNCTIONS
// submit item
function submitItem(e) {
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();

    if(value && !editFlag) { // add item conditon
        addItem(id, value);
        addToLocalStorage(id, value);
        if(list.children.length > 0) {
            container.classList.add('show-container');
        }
        displayAlert('Item successful added', 'success');
        setBackToDefault();
        // console.log('add item')
    } else if(value && editFlag) { // edit item condition
        editElement.innerHTML = value;
        editFromLocalStorage(editId, value);
        displayAlert('item succesful edited', 'success');
        setBackToDefault();
        // console.log('edit item')
    } else {
        displayAlert('list is empty', 'danger');
        // console.log('list is empty')
    }
    // console.log(e, e.target.classList, value, id);
}

// show alert
function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    // remove alert
    setTimeout(() => {
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
    }, 2000);
}

// set to default
function setBackToDefault() {
    grocery.value = '';
    editElement = ``;
    editFlag = false;
    editId = '';
    btnSubmit.textContent = 'submit';
}

// add item
function addItem(id, value){
    const element = document.createElement('article');
    element.classList.add('grocery-item');
    let attrb = document.createAttribute('data-id');
    attrb.value = id;

    element.setAttributeNode(attrb);
    element.innerHTML = `<p class="title">${value}</p>
    <div class="btn-container">
      <button type="button" class="edit-btn">
        <i class="fas fa-edit"></i>
      </button>
      <button type="button" class="delete-btn">
        <i class="fas fa-trash"></i>
      </button>
    </div>`;

    list.appendChild(element);

    // add delete and edit button event listener
    const btnEdit = element.querySelector('.edit-btn');
    const btnDelete = element.querySelector('.delete-btn');
    btnEdit.addEventListener('click', editItem);
    btnDelete.addEventListener('click', deleteItem);
}

// edit item
function editItem(e) {
    const element = e.currentTarget.parentElement;
    editElement = element.previousElementSibling;
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editId = element.parentElement.dataset.id;
    btnSubmit.textContent = 'edit'
    // console.log(element, editElement)
}

// delete item
function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    list.removeChild(element);

    if(list.children.length === 0) {
        container.classList.remove('show-container');
        displayAlert('list empty', 'danger');
    }
    deleteFromLocalStorage(element.dataset.id);
    // console.log(element);
}

// clear items
function clearItems() {
    let items = document.querySelectorAll('.grocery-item');
    items.forEach(function(item) {
        item.remove();;
    })
    container.classList.remove('show-container');
    displayAlert('list empty', 'danger');
    localStorage.removeItem('list');
    setBackToDefault();
}
// LOCAL STORAGE
// get from local storage
function getFromLocalStorage() {
    return localStorage.getItem('list') ?
    JSON.parse(localStorage.getItem('list')) : [];
}

// add to local storage
function addToLocalStorage(id, value) {
    let grocery = {id, value};
    let items = getFromLocalStorage();
    items.push(grocery);
    localStorage.setItem('list', JSON.stringify(items));
    // console.log(items);
}

// delete from local storage
function deleteFromLocalStorage(id) {
    let items = getFromLocalStorage();
    items = items.filter(function(item) {
        if(item.id !== id) {
            return item;
        }
    })
    localStorage.setItem('list', JSON.stringify(items));
}

// edit from local storage
function editFromLocalStorage(id, value) {
    let items = getFromLocalStorage();
    items = items.filter(function(item) {
        if(item.id === id) {
            item.value = value;
        }
        return item;
    })
    // console.log(items);
    localStorage.setItem('list', JSON.stringify(items));
}

// SETUP ITEMS
window.addEventListener('DOMContentLoaded', function() {
    let items = getFromLocalStorage();
    if(items.length > 0) {
        items.forEach(function(item) {
            addItem(item.id, item.value);
        });
        container.classList.add('show-container');
    }
})
