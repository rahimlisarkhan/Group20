// $(document).ready(function () {
//   // jQuery methods go here...

// });

// const titleEl = $(".title");

// const divEl = $("<div>");

// // titleEl.css({ color: "blue", backgroundColor: "yellow" });

// console.log("divEl", divEl);

// $(".btn").click(function () {
//   const titleEl = $(".title");

//   // inputEl.value
//   // const movieName = inputEl.val();

//   // inputEl.val("");

//   // console.log("click me");

//   titleEl.html("<h1>Eyyo!!!</h1>");
//   titleEl.attr("class", "title text-danger");
// });

// el.innerHtml = arr.map().join('')

// el.html(arr.map().join(''))

// el.classlist.add()
// el.classlist.remove()

// if (el.classlist.contain(classes)) {
//   el.classlist.remove(classes);
// } else {
//   el.classlist.add(classes);
// }

// $("h2").siblings().css({ color: "red", border: "2px solid red" });

// const h2El = document.querySelector("h2");

// h2El.previousElementSibling.style.color = "red";
// h2El.previousElementSibling.style.border = "1px solid red";

// h2El.previousElementSibling.previousElementSibling.style.color = "red";
// h2El.previousElementSibling.previousElementSibling.style.border =
//   "1px solid red";

// h2El.nextElementSibling.style.color = "red";
// h2El.nextElementSibling.style.border = "1px solid red";

// h2El.nextElementSibling.nextElementSibling.style.color = "red";
// h2El.nextElementSibling.nextElementSibling.style.border = "1px solid red";

$(".btn").on("click", function () {});

$(document).on("click", ".btn", function () {
  console.log("this", this);

  this.css({ color: "red" });
});
