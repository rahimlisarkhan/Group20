// var time = new Date("2022", "3", "11");
// var time = new Date("2022-03-11");

// var createTime = 1680000000;
// console.log(time);

// let msec = Date.parse("2022-02-17");

// var d = new Date(msec);

var time = new Date();

// console.log(time);

// Method	Description
// getFullYear()	Get year as a four digit number (yyyy)
// getMonth()	Get month as a number (0-11)
// getDate()	Get day as a number (1-31)
// getDay()	Get weekday as a number (0-6)
// getHours()	Get hour (0-23)
// getMinutes()	Get minute (0-59)
// getSeconds()	Get second (0-59)
// getMilliseconds()	Get millisecond (0-999)
// getTime()	Get time (milliseconds since January 1, 1970)

// var result = time.getFullYear();
// var result = time.getMonth();
// var result = time.getDate();
// var result = time.getHours();
// var result = time.getMinutes();
// var result = time.getSeconds();
// var result = time.getMilliseconds();
// var result = time.getTime();

// function convertDateNow() {
//   var year = time.getFullYear();
//   var month = time.getMonth();
//   var day = time.getDate();

//   return `Bugunun tarixi ${day}, ilin ${
//     month + 1
//   }-ci ayi , il olaraqda  ${year} ildeyik. `;
// }

// console.log(convertDateNow());

// function DateNowMonth() {
//   var months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//   ];

//   var currentMonthIndex = new Date().getMonth();

//   return months[currentMonthIndex];
// }

// console.log(DateNowMonth());

// Method	Description
// setDate()	Set the day as a number (1-31)
// setFullYear()	Set the year (optionally month and day)
// setHours()	Set the hour (0-23)
// setMilliseconds()	Set the milliseconds (0-999)
// setMinutes()	Set the minutes (0-59)
// setMonth()	Set the month (0-11)
// setSeconds()	Set the seconds (0-59)
// setTime()	Set the time (milliseconds since January 1, 1970)

// var today = new Date();

// var todayDays = today.getDate();

// var f1StartDay = new Date();

// f1StartDay.setDate(todayDays + 33);

// if (
//   f1StartDay.getMonth() === today.getMonth() &&
//   f1StartDay.getDate() === today.getDate()
// ) {
//   console.log("Bakida artiq 8ci F1 start goturuldu");
// } else {
//   console.log("Hele vaxta var");
// }

function offerCountDown() {
  var userWantTime = prompt("Offerin bitme vaxtini qeyd edin"); ///2023-04-23

  var today = new Date();
  var offerDay = new Date(userWantTime); //2023-04-23

  var mlToday = today.getTime();
  var mlOfferDay = offerDay.getTime();

  var diffSan = (mlOfferDay - mlToday) / 1000;
  var diffHours = diffSan / 3600;
  var diffDay = Math.floor(diffHours / 24);

  return `Tarixe son ${diffDay} gun qaldi`;
}

console.log(offerCountDown());
