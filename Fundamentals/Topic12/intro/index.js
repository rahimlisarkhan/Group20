// // CRUD

// // CREATE - POST
// // READ - GET
// // U - UPDATE & PATCH
// // D - DELETE

// let data = [];

// const url = `https://blog-api-t6u0.onrender.com/posts`;

// //GET
// const mypromise = $.ajax("https://blog-api-t6u0.onrender.com/posts", {
//   headers: {
//     "Content-Type": "application/json",
//   },
//   method: "GET",
// });

// mypromise.then((res) => {
//   console.log("res", res);

//   data = res;

//   document.querySelector(".container").innerHTML = res
//     .map(
//       (post) => `<div class="card">
//     <p class="title">${post.title}</p>
//     <p class="desc">${post.body}</p>
//   </div>`
//     )
//     .join("");
// });

// // POST

// const myPostObj = {
//   title: "New post",
//   body: "Change title",
// };

// const mypromiseCreate = $.ajax("https://blog-api-t6u0.onrender.com/posts", {
//   method: "POST",
//   data: myPostObj,
// });

// mypromiseCreate.then((res) => {
//   console.log("res", res);

//   data = [res, ...data];

//   document.querySelector(".container").innerHTML = data
//     .map(
//       (post) => `<div class="card">
//     <p class="title">${post.title}</p>
//     <p class="desc">${post.body}</p>
//   </div>`
//     )
//     .join("");
// });

// // Update

// const myUptObj = {
//   title: "Old post",
//   body: "title test",
// };

// const mypromiseUpdate = $.ajax("https://blog-api-t6u0.onrender.com/posts/111", {
//   method: "PUT",
//   data: myUptObj,
// });

// mypromiseUpdate.then((res) => {
//   console.log("update", res);
// });

// //DELETE
// const mypromiseDELETE = $.ajax("https://blog-api-t6u0.onrender.com/posts/124", {
//   method: "DELETE",
// });

// mypromiseDELETE.then((res) => {
//   console.log("delete", res);
// });

// //   .then((data) => {
// //     console.log('"data', data);

// //     document.querySelector(".container").innerHTML = data.map(
// //       (post) => `<div class="card">
// //     <p class="title">${post.title}</p>
// //     <p class="desc">${post.body}</p>
// //   </div>`
// //     );
// //   })

// // mypromise
// //   .then((res) => {
// //     console.log("res", res);

// //     return res.json();
// //   })
// //   .then((data) => {
// //     console.log('"data', data);

// //     document.querySelector(".container").innerHTML = data.map(
// //       (post) => `<div class="card">
// //     <p class="title">${post.title}</p>
// //     <p class="desc">${post.body}</p>
// //   </div>`
// //     );
// //   })
// //   .join("");

$(document).on("click", "#trBtn", function () {
  const text = $("#translateInput").val();

  // const settings = {
  //   async: true,
  //   crossDomain: true,
  //   url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
  //   method: "POST",
  //   headers: {
  //     "content-type": "application/x-www-form-urlencoded",
  //     "Accept-Encoding": "application/gzip",
  //     "X-RapidAPI-Key": "9d9588302emsh58804fa5a30d4d9p1b947ajsn659ea6ae2269",
  //     "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
  //   },
  //   data: {
  //     q: text,
  //     target: "tr",
  //     source: "en",
  //   },
  // };

  const settings = {
    async: true,
    crossDomain: true,
    url: `https://covid-193.p.rapidapi.com/statistics?country=${text}`,
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
      "X-RapidAPI-Key": "9d9588302emsh58804fa5a30d4d9p1b947ajsn659ea6ae2269",
    },
  };

  $.ajax(settings).done(function (response) {
    // const translatedText = response.data.translations[0].translatedText;
    // $("#result").text(translatedText);
    console.log(response);
  });
});
