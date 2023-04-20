function addTodoItem() {
  var newTodo = todoInput.value.trim();
  if (newTodo == "") {
    showAlert("danger", "Please enter Todo.......");
  } else if (newTodo.length >= 10) {
    showAlert("warning", "Please don't add more than 10 simvol");
  } else {
    addTodoItemToUI(newTodo);
    showAlert("success", "Todo added successfully");
  }
}
function showAlert(type, message) {
  /*  
  
            <div class="alert alert-danger" role="alert">
              A simple danger alert—check it out!
            </div>
  */
  var alert = document.createElement("div");
  alert.className = `alert alert-${type}  role ="alert" `;
  alert.textContent = message;
  //console.log(alert);
  cardBody.appendChild(alert);

  setTimeout(function () {
    alert.remove();
  }, 700);
}

// UI YA elave etme
function addTodoItemToUI(newTodo) {
  // yeni element yaratmag
  var listItem = document.createElement("li");
  //console.log(listItem)
  var divElement = document.createElement("div");
  divElement.innerHTML = ` 
<i class='fa-solid fa-trash text-danger' id ='todoRemoveEl' ></i>`;
  listItem.className =
    "list-group-item d-flex justify-content-between align-items-center";
  // TextNode elave etme
  listItem.appendChild(document.createTextNode(newTodo));
  //  elementin usagini elave etme
  listItem.appendChild(divElement);
  todoList.appendChild(listItem);
  todoInput.value = "";
  //console.log(divElement)
}


function deleteToDoItem(e) {
  if (e.target.className === "fa-solid fa-trash text-danger") {
    e.target.parentElement.parentElement.remove();
    showAlert("success", "Todo has been deleted successfully");
  }
  //console.log(e.target)
}

function clearAllTodoItem() {
  if (confirm("Are you sure about deleting the todos? ")) {
    todoInput.value = "";
    todoList.innerHTML = "";
    showAlert("success", "All Todos Successfully Deleted");
  }
}

function filterTodoItem(e) {
  var filterValue = e.target.value.toLowerCase();
  var listItems = document.querySelectorAll(".list-group-item");
  listItems.forEach(function (listItem) {
    var text = listItem.textContent.toLowerCase();

    if (text.indexOf(filterValue) === -1) {
      //gorunmedi
      listItem.setAttribute("style", "display: none !important");
    } else {
      listItem.setAttribute("style", "display: block");
    }
  });
}

filterTodo.addEventListener("keyup", filterTodoItem);
todoAddButton.addEventListener("click", addTodoItem);
todoList.addEventListener("click", deleteToDoItem);
todoClearAllButton.addEventListener("click", clearAllTodoItem);

