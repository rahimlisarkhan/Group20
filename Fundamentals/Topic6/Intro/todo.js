var todoJob = document.querySelector("#todoJob");
var todoList = document.querySelector("#todoList");
var sendButton = document.querySelector("#sendButton");

function addTodo() {
  var newLiTag = document.createElement("li");

  newLiTag.innerText = todoJob.value;

  newLiTag.style.color = todoJob.value.length > 10 ? "red" : "black";

  if (todoJob.value.includes("image")) {
    var imgTag = document.createElement("img");
    imgTag.setAttribute(
      "src",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNyp7ccZkahwfEvlDQAQkIplQlc--PauRbYw&usqp=CAU"
    );
    imgTag.width = "50";
    newLiTag.appendChild(imgTag);
    newLiTag.style.color = "green";
  }

  todoList.appendChild(newLiTag);

  todoJob.value = "";
}

sendButton.addEventListener("click", addTodo);
