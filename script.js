const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');



eventListeners();

function eventListeners() {
  form.addEventListener('submit', addNewItem);
  taskList.addEventListener('click', deleteItem);
  btnDeleteAll.addEventListener('click', deleteAllItems);
}

function showAlert(type, message) {
  const alert = document.createElement("div")
  alert.className = `alert alert-${type} mt-3`;
  alert.textContent = message;
  form.appendChild(alert);

  setTimeout(function(){
    alert.remove();
  },2500);
}

function addNewItem(e) {
  if (input.value.trim() === "") {
    showAlert("danger", "Add new item!");
  }

  else {
    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-secondary";
    li.appendChild(document.createTextNode(input.value));

    const a = document.createElement("a");
    a.className = "delete-item float-right"
    a.setAttribute("href", "#");
    a.innerHTML = '<i class="fas fa-times"></i>';

    // add a to li
    li.appendChild(a);

    // add li to ul
    taskList.appendChild(li);

    // clear input
    input.value = '';
    
    showAlert("success", "Has been successfully added.");
  }
  e.preventDefault();// sayfa yenilenmesin diye
}


function deleteItem(e) {
  if (e.target.className === 'fas fa-times') {
    e.target.parentElement.parentElement.remove();
  }
  e.preventDefault(); //sildiğimiz zaman scroll hareket etmesin diye
}


function deleteAllItems(e) {

  if (confirm('are you sure ?')) {
    taskList.innerHTML = '';

    // taskList.childNodes.forEach(function (item) {
    //     if (item.nodeType === 1) {
    //         item.remove();
    //     }
    // });
  }
  e.preventDefault();
}
