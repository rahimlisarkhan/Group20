let tabIndex = 2;

let data = {
  staff_id: null,
  service_id: null,
  date: null,
  time: null,
  customer: null,
};

console.log("tabContents.length ", tabContents.length);

backBtn.addEventListener("click", function () {
  tabIndex = 1 === tabIndex ? 1 : tabIndex - 1;

  const lastEl = tabContents.length === tabIndex;

  console.log("tabIndex", tabIndex);
  openTab("tab" + tabIndex, "tabButton" + tabIndex, tabIndex);

  this.style.display = 1 === tabIndex ? "none" : "block";
  nextBtn.innerText = lastEl ? "Confirm Booking" : "Next";
});

nextBtn.addEventListener("click", function () {
  if (!data.staff_id || !data.service_id || !data.time || !data.customer) {
    alertEl.style.display = "block";
    return;
  }

  alertEl.style.display = "none";
  const lastEl = tabContents.length === tabIndex;
  const firstEl = 1 === tabIndex;
  openTab("tab" + tabIndex, "tabButton" + tabIndex);
  openTab("tab" + tabIndex, "tabButton" + tabIndex, tabIndex);

  this.innerText = lastEl ? "Confirm Booking" : "Next";
  backBtn.style.display = firstEl ? "none" : "block";

  tabIndex = lastEl ? tabIndex : tabIndex + 1;
});

function selectCard(event, id) {
  for (const cardContent of cardContents) {
    cardContent.classList.remove("active");
  }

  //   event.currentTarget.classList.add("active");
  event.currentTarget.classList.add("active");

  data.staff_id = id;
}

function renderList() {}

renderList();
