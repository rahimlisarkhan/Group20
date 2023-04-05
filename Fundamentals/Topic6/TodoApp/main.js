var todoInput = document.querySelector("#todoInput");

var todoAddButton = document.querySelector("#todoAddButton");
var todoClearButton = document.querySelector("#todoClearButton");

var todoAlert = document.getElementById("todoAlert");

var todoList = document.querySelector("#todoList");

var todoListData = [];

//Fucntions
function addTodoItem() {
  var value = todoInput.value;

  if (!value.trim()) {
    alert("Please fill input");
    return;
  }

  todoListData.push(value);

  todoInput.value = "";

  console.log(todoAlert);

  todoAlert.innerHTML = "Succesfully added";
  todoAlert.classList.remove("d-none");
  todoAlert.classList.remove("alert-danger");

  // todoAlert.classList.add("d-block");
  todoAlert.classList.add("alert-success");
  todoAlert.classList.add("d-block");

  showTodoItems();
}

function removeItem(index) {
  console.log("index", index);

  var isRemove = confirm("Did you want remove item?");

  if (!isRemove) {
    return;
  }

  newArrayData = todoListData.filter(function (item, elmenetIndex, list) {
    if (elmenetIndex !== index) return true;

    return false;
  });

  todoListData = newArrayData;

  todoAlert.innerHTML = "Unfortunally removed item";
  todoAlert.classList.remove("d-none");
  todoAlert.classList.remove("alert-success");

  todoAlert.classList.add("d-block");
  todoAlert.classList.add("alert-danger");

  showTodoItems();
}

function clearList() {
  todoListData = [];

  showTodoItems();
}

function showTodoItems() {
  //solition1

  //   var withTagsData = [];

  //   for (var value of todoListData) {
  //     withTagsData.push(`<li class="list-group-item">${value}</li>`);
  //   }

  //   todoList.innerHTML = withTagsData.join("");

  //solition2

  var content = todoListData
    .map(function (item, index) {
      return `<li class="list-group-item d-flex justify-content-between">
    ${index + 1}. ${item}
    <button
      type="button"
      class="btn btn-danger btn-sm"
      id="todoRemoveButton"
      onclick="removeItem(${index})"
    >
      remove
    </button>
  </li>`;
    })
    .join("");

  console.log(content);

  todoList.innerHTML = content;

  //solition3
  //   todoList.innerHTML = "";

  //   for (var index in todoListData) {
  //     var li = document.createElement("li");
  //     li.classList.add("list-group-item");
  //     li.innerText = `${+index + 1}. ${todoListData[index]}`;

  //     todoList.appendChild(li);
  //   }

  console.log("todoListData: ", todoListData);
}

//Events
todoAddButton.onclick = addTodoItem;

todoClearButton.addEventListener("click", clearList);
