// var personal = [{name:"dsds"},{name:"dsdsds"},{name:"dsdsds"}];

var personal = [];

addInfoBtn.addEventListener("click", function () {
  var fullname = inputFullName.value;
  var job = inputJob.value;
  var email = inputEmail.value;

  // var person = {
  //   fullName:fullname,
  //   joB:job,
  //   emaiL:email
  // }

  var person = {
    fullname,
    job,
    email,
  };

  personal.push(person);

  console.log("personal", personal);

  var newArray = personal.map(
    (item, index) =>
      `<tr class="table-light">
  <td class="table-light">${index + 1}. ${item.fullname}</td>
  <td class="table-light">${item.email}</td>
  <td class="table-light">${item.job}</td>
</tr> `
  );

  console.log("newArray", newArray);

  tbodyEl.innerHTML = newArray.join("");

  console.log(person);
});
