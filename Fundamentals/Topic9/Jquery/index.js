// $(document).ready(function () {
//   // jQuery methods go here...

// });

// const titleEl = $(".title");

// const divEl = $("<div>");

// // titleEl.css({ color: "blue", backgroundColor: "yellow" });

// console.log("divEl", divEl);

$(".btn").click(function () {
  const titleEl = $(".title");

  // inputEl.value
  // const movieName = inputEl.val();

  // inputEl.val("");

  // console.log("click me");

  titleEl.html("<h1>Eyyo!!!</h1>");
  titleEl.attr("class", "title text-danger");
});

// el.innerHtml = arr.map().join('')

// el.html(arr.map().join(''))

// el.classlist.add()
// el.classlist.remove()

// if (el.classlist.contain(classes)) {
//   el.classlist.remove(classes);
// } else {
//   el.classlist.add(classes);
// }
