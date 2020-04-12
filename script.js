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


function addNewItem(e){
  if(input.value === ""){
    alert("add new item")
  }
  const li = document.createElement("li");
  li.className = "list-group-item list-group-item-secondary";
  li.appendChild(document.createTextNode(input.value));
  
  const a = document.createElement("a");
  a.className = "delete-item float-right"
  a.setAttribute("href","#");
  a.innerHTML = '<i class="fas fa-times"></i>';

  // add a to li
  li.appendChild(a);

  // add li to ul
  taskList.appendChild(li);

  // clear input
  input.value = '';

  e.preventDefault();// sayfa yenilenmesin diye
}


 function deleteItem(e) {
  if (e.target.className === 'fas fa-times'){
    e.target.parentElement.parentElement.remove();
  }
  e.preventDefault(); //sildiğimiz zaman scroll hareket etmesin diye
}


function deleteAllItems(e) {

  if (confirm('are you sure ?')) {
      taskList.innerHTML='';

      // taskList.childNodes.forEach(function (item) {
      //     if (item.nodeType === 1) {
      //         item.remove();
      //     }
      // });
  }
  e.preventDefault();
}
