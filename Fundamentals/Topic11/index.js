// setInterval
// setTimeout

var time = 0;

var callback = () => {
  time++;

  document.querySelector("h2").innerHTML = `Time: ${convertMinute(time)}`;

  console.log("Call: ", convertMinute(time));
};

var duraction = 1000;

// var f1 = setTimeout(callback, duraction);
// var f2 = setTimeout(callback, duraction);
// var f3 = setTimeout(callback, duraction);

// console.log("f1", f1);
// console.log("f2", f2);
// console.log("f3", f3);

// document.querySelector("button").addEventListener("click", function () {
//   clearTimeout(f1);
//   clearTimeout(f3);
// });

var f1;
// var f2 = setInterval(callback, duraction);
// var f3 = setInterval(callback, duraction);

console.log("f1", f1);
// console.log("f2", f2);
// console.log("f3", f3);

document.querySelector(".start").addEventListener("click", function () {
  clearInterval(f1);
  f1 = setInterval(callback, duraction);
  //   clearInterval(f3);
});

document.querySelector(".stop").addEventListener("click", function () {
  clearInterval(f1);
  //   clearInterval(f3);
});

function convertMinute(date) {
  const minutes = Math.floor(date / 60);

  const seconds = date - minutes * 60;
  //   const milseconds = date - seconds * 1000;

  const strMin = minutes < 10 ? "0" + minutes : minute;
  const strSec = seconds < 10 ? "0" + seconds : seconds;

  return `${strMin}:${strSec}`;
}
