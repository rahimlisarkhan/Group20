const searchBtn = document.querySelector("#searchBtn");

let text = "";

// function showMovie(movie) {
//   const { Title, Poster, Awards, Country, Language, Year } = movie;

//   let ugurlari = Awards;
//   const contentEl = document.querySelector(".container");

//   if (Awards === "N/A") {
//     ugurlari = "Uguru yoxdur Kul basva!";
//   }

//   if (
//     (Country === "Soviet Union" || Country === "Turkey") &&
//     Awards === "N/A"
//   ) {
//     ugurlari = "Uguru yoxdur ammaki gozel filmdir!";
//   }

//   contentEl.innerHTML = `<div>
//     <img height="200" src="${Poster}" />
//     <h1>${Title}</h1>
//     <p>${ugurlari}</p>
//     <p>${Language}</p>
//     <p>${Year}</p>
//   </div>`;
// }

function debounce(fn, delay) {
  let timer;
  return (() => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(), delay);
  })();
}

function showMovie(movies) {
  const contentEl = document.querySelector(".container");

  contentEl.innerHTML = movies
    .map((movie) => {
      const { Title, Poster, Type, Year } = movie;

      return `<div class="card">
        <img height="200" src="${Poster}" />
        <h1>${Title.length > 10 ? Title.slice(0, 10) + "..." : Title}</h1>
        <p>${Type}</p>
        <p>${Year}</p>
      </div>`;
    })
    .join("");
}

function getMovie(title) {
  //   const myPromise = fetch(`http://www.omdbapi.com/?apikey=a407a7b3&t=${title}`);
  const myPromise = fetch(
    `http://www.omdbapi.com/?apikey=a407a7b3&s=${title}&limit=20`
  );

  myPromise
    .then((response) => {
      const mySecond = response.json();

      return mySecond;
    })
    .then((data) => {
      if (data?.Response === "False") {
        // alert("Tapilmadi");
        return;
      }

      console.log("data", data);

      showMovie(data.Search);
    })
    .catch((err) => {
      console.log("err", err);
    });
}

// document.querySelector("#movieTitle").addEventListener("input", function (e) {
//   let movieTitle = e.target;

//   text += movieTitle.value;

//   console.log("movieTitle", text);

//   debounce(() => getMovie(text), 650);

//   //   movieTitle.value = text;
//   //   text=""
// });

searchBtn.addEventListener("click", function () {
  let movieTitle = document.querySelector("#movieTitle");

  getMovie(movieTitle.value);

  movieTitle.value = "";
});
