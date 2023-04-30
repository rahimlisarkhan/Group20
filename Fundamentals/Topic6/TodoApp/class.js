// class TodoApp extends ReactComponents {
class TodoApp {
  gameName = null;

  todoInput = document.querySelector("#todoInput");
  editInput = document.querySelector("#editInput");
  todoAddButton = document.querySelector("#todoAddButton");
  todoClearButton = document.querySelector("#todoClearButton");
  saveModalButton = document.querySelector("#saveModalButton");
  todoAlert = document.getElementById("todoAlert");
  todoList = document.querySelector("#todoList");

  todoListData = [];
  currentItemIndex = null;

  constructor(name) {
    this.gameName = name;
  }

  addTodoItem() {
    var value = this.todoInput.value;

    if (!value.trim()) {
      alert("Please fill input");
      return;
    }

    this.todoListData.push(value);

    this.todoInput.value = "";

    console.log(this.todoAlert);

    this.todoAlert.innerText = "Succesfully added";
    this.todoAlert.classList.remove("d-none");
    this.todoAlert.classList.remove("alert-danger");

    // todoAlert.classList.add("d-block");
    this.todoAlert.classList.add("alert-success");
    this.todoAlert.classList.add("d-block");

    this.showTodoItems();
  }

  removeItem(index) {
    console.log("index", index);

    var isRemove = confirm("Did you want remove item?");

    if (!isRemove) {
      return;
    }

    var newArrayData = this.todoListData.filter(function (
      item,
      elmenetIndex,
      list
    ) {
      if (elmenetIndex !== index) return true;

      return false;
    });

    this.todoListData = newArrayData;

    this.todoAlert.innerHTML = "Unfortunally removed item";
    this.todoAlert.classList.remove("d-none");
    this.todoAlert.classList.remove("alert-success");

    this.todoAlert.classList.add("d-block");
    this.todoAlert.classList.add("alert-danger");

    this.showTodoItems();
  }

  editItem(index, itemData) {
    console.log("itemData", itemData);

    this.editInput.value = itemData;

    this.currentItemIndex = index;
  }

  handleActionItem = (method, index, data) => {
    switch (method) {
      case "edit":
        this.editItem(index, data);
        break;
      case "remove":
        this.removeItem(index);
        break;

      default:
        alert("Please choose correct method name");
    }
  };

  clearList() {
    this.todoListData = [];

    this.showTodoItems();
  }

  showTodoItems() {
    //solition1

    //   var withTagsData = [];

    //   for (var value of todoListData) {
    //     withTagsData.push(`<li class="list-group-item">${value}</li>`);
    //   }

    //   todoList.innerHTML = withTagsData.join("");

    //solition2

    var content = this.todoListData
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
                  onclick="todoapp.handleActionItem('edit', ${index}, '${item}')"
                >
                  <i class="fa-solid fa-pen-to-square text-success-emphasis"></i>
                </button>
                <button
                  type="button"
                  class="btn btn-outline-light btn-sm"
                  id="todoRemoveButton"
                  onclick="todoapp.handleActionItem('remove', ${index})"
                >
                  <i class="fa-solid fa-trash text-danger-emphasis"></i>
                </button>
              </div>`;
      })
      .join("");

    console.log(content);

    this.todoList.innerHTML = content;

    //solition3
    //   todoList.innerHTML = "";

    //   for (var index in todoListData) {
    //     var li = document.createElement("li");
    //     li.classList.add("list-group-item");
    //     li.innerText = `${+index + 1}. ${todoListData[index]}`;

    //     todoList.appendChild(li);
    //   }
  }

  saveItemChange() {
    this.todoListData[currentItemIndex] = editInput.value;

    this.todoAlert.innerText = "Succesfully changed item!";
    this.todoAlert.classList.remove("d-none");
    this.todoAlert.classList.remove("alert-danger");

    // this.todoAlert.classList.add("d-block");
    this.todoAlert.classList.add("alert-success");
    this.todoAlert.classList.add("d-block");

    this.showTodoItems();
  }

  //   render(){

  //   }
}

var todoapp = new TodoApp("Mehin Melikova");

todoapp.todoAddButton.addEventListener("click", function () {
  todoapp.addTodoItem();
});
