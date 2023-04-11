var todoListData = [];
var currentItemIndex = null;

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

  todoAlert.innerText = "Succesfully added";
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

function editItem(index, itemData) {
  console.log("itemData", itemData);

  editInput.value = itemData;

  currentItemIndex = index;
}

// function handleActionItem(method, index, data) {
//   switch (method) {
//     case "edit":
//       editItem(index, data);
//       break;
//     case "remove":
//       removeItem(index);
//       break;

//     default:
//       alert("Please choose correct method name");
//   }
// }

var handleActionItem = (method, index, data) => {
  switch (method) {
    case "edit":
      editItem(index, data);
      break;
    case "remove":
      removeItem(index);
      break;

    default:
      alert("Please choose correct method name");
  }
};

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
    <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-light btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#editModal"
                id="todoRemoveButton"
                onclick="handleActionItem('edit', ${index}, '${item}')"
              >
                <i class="fa-solid fa-pen-to-square text-success-emphasis"></i>
              </button>
              <button
                type="button"
                class="btn btn-outline-light btn-sm"
                id="todoRemoveButton"
                onclick="handleActionItem('remove', ${index})"
              >
                <i class="fa-solid fa-trash text-danger-emphasis"></i>
              </button>
            </div>`;
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
}

function saveItemChange() {
  todoListData[currentItemIndex] = editInput.value;

  todoAlert.innerText = "Succesfully changed item!";
  todoAlert.classList.remove("d-none");
  todoAlert.classList.remove("alert-danger");

  // todoAlert.classList.add("d-block");
  todoAlert.classList.add("alert-success");
  todoAlert.classList.add("d-block");

  showTodoItems();
}

//Events
todoAddButton.onclick = addTodoItem;
todoInput.onkeypress = function (e) {
  console.log(e.keyCode);

  // if (e.keyCode === 13) {
  //   addTodoItem();
  // }

  if (e.key === "Enter") {
    addTodoItem();
  }
};

editInput.onkeydown = function (e) {
  console.log(e.keyCode);

  // if (e.keyCode === 13) {
  //   addTodoItem();
  // }

  if (e.key === "Enter") {
    saveItemChange();
  }
};

todoClearButton.addEventListener("click", clearList);
saveModalButton.addEventListener("click", saveItemChange);
