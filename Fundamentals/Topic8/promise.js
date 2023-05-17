// function CallbackPromise(resolve, reject) {
//   if (data.length) {
//     resolve(data);
//   } else {
//     reject("Data not found!");
//   }
// }

// function done(result) {
//   console.log("result", result);

//   render(result);

//   return result;
// }

// function errorHandle(err) {
//   console.log("error", err);
// }

// const myPromise = new Promise(CallbackPromise);

// myPromise.then(done).then(function(data){

// }).catch(errorHandle);

// const myPromise = new Promise(function (resolve, reject) {
//   const data = ["Car", "Apple"];
//   if (data.length) {
//     resolve({ status: 200, message: "OK", data });
//     return;
//   }

//   reject({ message: "Network Error", status: 500 });
// });

// myPromise
//   .then((response) => {
//     console.log("response", response);
//     renderShow(response.data);
//   })
//   .catch((err) => {
//     console.log("err", err);
//     errorAlert(err.message);
//   });

// function renderItems(arr) {
//   information = arr;

//   // el.innerHtml = arr.map().......
// }

// function errorAlert(message) {
//   // el . innerText = message
// }

// function renderShow(arr) {
//   ulElement.innerHtml = arr.map();
// }

// function A() {
//   console.log("A cagirldi");
// }

// setTimeout(A, 3000);
// setInterval(A, 2000);

function DataCallback(resolve, reject) {
  const employees = [
    // { name: "John", age: 44 },
    // { name: "Kenan", age: 33 },
  ];

  setTimeout(function () {
    if (!employees.length) {
      reject({ status: 404, message: "Network" });
      return;
    }

    resolve({ status: 200, message: "OK", data: employees });
  }, 3000);
}

const alertEl = document.querySelector(".alert");

const backdenGelenDataylaMenimDuzeltdiyimPromise = new Promise(DataCallback);

// backdenGelenDataylaMenimDuzeltdiyimPromise
//   .then((response) => {
//     alertEl.style.display = "none";
//     console.log("response", response);
//     renderShow(response.data);
//   })
//   .catch((err) => {
//     renderError(err.message);
//   })
//   .finally(() => {
//     console.log("Emeliyyat bitdi!");
//   });

function databaseConnect() {}

async function getEmployees() {
  try {
    const response = await backdenGelenDataylaMenimDuzeltdiyimPromise;

    // const data = await response

    console.log('"response', response);
    alertEl.style.display = "none";

    renderShow(response.data);
  } catch (err) {
    renderError(err.message);
  }
}

getEmployees();

const renderShow = (arr) => {
  const listEl = document.querySelector(".list");

  listEl.innerHTML = arr
    ?.map(
      (person, index) =>
        `<li>${index + 1}. Person name:${person.name}, age:${person.age}</li>`
    )
    .join("");
};

const renderError = (message) => {
  alertEl.innerHTML = message;
  alertEl.style.display = "block";
};
