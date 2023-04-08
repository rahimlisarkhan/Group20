var title = document.querySelector("#title");

var button = document.querySelector("#button");

var textInput = document.querySelector("#textInput");

var contentEl = document.querySelector("#content");

var textsizeEl = document.querySelector("#textsize");

var searchListEl = document.querySelector("#searchList");

var arr = ["Kenan", "Ken", "Seymur", "se", "Gulu", "gul"];

// Mouse Events
button.addEventListener("dblclick", function () {
  console.log("Hello");
});

title.addEventListener("mouseenter", function (e) {
  console.log(e);

  e.target.style.color = "red";

  title.innerHTML = "Woow";
});

title.addEventListener("mouseleave", function () {
  title.innerHTML = "JS Events";
});

//Focus Inputs Events

textInput.onfocus = function () {
  console.log("Enter");
  contentEl.style.display = "block";
};

textInput.onblur = function () {
  //   console.log(textInput.value);

  //   if (!textInput.value.trim()) {
  //     alert("Doldurun!!!1");
  //     return;
  //   }

  console.log("Out");
  contentEl.style.display = "none";
};

textInput.onkeypress = function (e) {
  console.log(e);
};

textInput.oninput = function (e) {
  console.log(e.target.value);

  var value = e.target.value;

  e.target.style.outlineColor = value.length < 10 ? "red" : "green";

  textsizeEl.style.color = value.length > 30 ? "red" : "black";
  textsizeEl.innerText = value.length;

  var resultList = arr.filter(function (el) {
    if (el.toLowerCase().includes(value.toLowerCase())) return true;

    return false;
  });

  searchListEl.innerHTML = resultList
    .map(function (el, index) {
      return `<li>${index + 1}. ${el} </li>`;
    })
    .join("");

  console.log(resultList);
};
