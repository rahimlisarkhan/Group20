// var a = [1, 4, 5];
// var a = [5, 5, 5];

// localStorage.setItem("age", JSON.stringify(a));
// localStorage.setItem("fullname", JSON.stringify(a));

// var result = localStorage.getItem("age");

// console.log(JSON.parse(result));

// // localStorage.removeItem("age");

// // console.log(localStorage.key(1));

// // localStorage.clear();

// var a = [1, 4, 5];
// var a = [5, 5, 5];

// sessionStorage.setItem("age", JSON.stringify(a));
// sessionStorage.setItem("fullname", JSON.stringify(a));

// var result = sessionStorage.getItem("age");

// console.log(JSON.parse(result));

// sessionStorage.removeItem("age");

// console.log(sessionStorage.key(1));

// sessionStorage.clear();

// console.log(document.cookie);

// document.cookie = "user=Kenan;";
// document.cookie = "age=34;";
// document.cookie = "job=Developer;";

// Cookie.setItem("name", "Kenan");
// Cookie.setItem("age", "34");

// console.log(Cookie.getItem("name"));

let data = JSON.parse(localStorage.getItem("todoData")) ?? [];

document.querySelector("#sendBtn").onclick = function () {
  const value = document.querySelector("#todoInput").value;

  data.push(value);

  localStorage.setItem("todoData", JSON.stringify(data));

  renderList();
};

function renderList() {
  document.querySelector("#todoList").innerHTML = data
    .map((todo, index) => {
      return `<li>${
        index + 1
      }. ${todo} <span onClick="removeItem(${index})" style="color: red">del</span></li>`;
    })
    .join("");
}

function removeItem(itemIndex) {
  const newData = data.filter((item, index) => itemIndex !== index);
  data = newData;

  localStorage.setItem("todoData", JSON.stringify(newData));
  renderList();
}

renderList();

console.log("data", data);
