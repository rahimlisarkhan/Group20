// document.head.title = "Salam";

// console.log(document.head.title);

//Find DOM

// var h1Tag = document.getElementById("title");
// var h1Tag = document.getElementsByTagName("p")[0];
// var h1Tag = document.getElementsByClassName("bg-text")[0];
// var h1Tag = document.querySelector(".bg-text");
// var h1Tag = document.querySelectorAll("#title");
// // var h1Tag = document.querySelector("h1 span .color");

// h1Tag.innerText = "Dom JS";
// h1Tag.innerText = "<span> Dom JS </span>";
// h1Tag.innerHTML = "<span> Dom JS </span>";

// console.log(h1Tag);

// var elements = document.querySelectorAll(".bg-text");

// for (var index in elements) {
//   elements[index].innerHTML = `Salam!!!! ${+index + 1} ci insan`;
// }

// console.log(h1Tag);

// var value = 65;

// h1Tag.innerHTML = `<span> ${value} </span>`;
// h1Tag.innerText = `<span> ${value} </span>`;
// h1Tag.class = "dsadasdsdsaasd";

// var coverImageEl = document.querySelector("#coverImage");

// coverImageEl.src =
//   "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg";

// // coverImageEl.alt = "Flower";

// coverImageEl.alt = coverImageEl.alt + "Semendarli";

// console.log(coverImageEl.alt);

// var h1Tag = document.getElementById("title");

// // h1Tag.style.backgroundColor = "#fdfa";
// h1Tag.style.backgroundColor = "red";
// h1Tag.style.color = "#fdfa";
// h1Tag.style.padding = "20px";
// h1Tag.style.borderRadius = "10px";

// // console.log(h1Tag.getAttribute("id"));

// h1Tag.setAttribute("name", "gulu");

// console.log(h1Tag.getAttribute("name"));

// var contentDivTag = document.createElement("div");

// var newH1tag = document.createElement("h1");
// var newPtag = document.createElement("p");

// newH1tag.innerText = "Title1!!";
// newPtag.innerText = "Lorem ipsum";

// // newH1tag.setAttribute("class", "bg-warning");
// // newH1tag.classList.add("text-danger");
// // newH1tag.classList.remove("text-danger");

// // console.log(newH1tag.classList.contains("text-danger"));

// contentDivTag.appendChild(newH1tag);
// contentDivTag.appendChild(newPtag);

// document.body.prepend(contentDivTag);

// // document.body.removeChild(contentDivTag);

// console.log(contentDivTag);

// document.body.innerHTML = `<div>
//     <h1 class="text-danger"> ${a} /<h1>
//     <p> ${b} </p>

// </div>`;

// document.title = "Welcome JS";

// console.log(document.title);
// console.log(document.URL);

// var h5Tag = document.getElementById("h5");

// if (h5Tag.hasAttribute("class")) {
//   h5Tag.classList.remove("text");
// } else {
//   h5Tag.classList.add("text");
// }

// // // console.log(h5Tag.previousElementSibling);

h5Tag.style.padding = `${h5Tag.offsetWidth / 100}px`;
// console.log(h5Tag.offsetWidth);

// if (h5Tag.scrollTop === 500) {
//   var q1 = prompt("Beyendiz saytimizi");
// }
// console.log(h5Tag.nextElementSibling);
