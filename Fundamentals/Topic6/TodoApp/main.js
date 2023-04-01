var todoInput = document.querySelector("#todoInput");

var todoAddButton = document.querySelector("#todoAddButton");
var todoClearButton = document.querySelector("#todoClearButton");

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

  todoList.innerHTML = todoListData
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

function removeItem(index) {
  newArrayData = todoListData.filter(function (_, elmenetIndex) {
    if (elmenetIndex !== index) return true;

    return false;
  });

  console.log("newArrayData", newArrayData);

  todoListData = newArrayData;

  showTodoItems();
}

function clearList() {
  todoListData = [];

  showTodoItems();
}

//Events
todoAddButton.onclick = addTodoItem;

todoClearButton.addEventListener("click", clearList);
