function openTab(tabId, tabBtnId, completedIndex) {
  for (const tabContent of tabContents) {
    tabContent.style.display = "none";
  }

  const tabButtons = document.getElementsByClassName("tab-button");
  for (const el of tabButtons) {
    el.classList.remove("active");

    // if (completedIndex >= i) {
    //   tabButtons[i].classList.add("complete");
    // } else {
    //   tabButtons[i].classList.remove("complete");
    // }
  }

  document.getElementById(tabId).style.display = "block";
  document.getElementById(tabBtnId).classList.add("active");
  //   event.currentTarget.classList.add("active");
  event.currentTarget.classList.add("active");
}

// Show the first tab by default
document.getElementById("tab1").style.display = "block";
document.querySelector(".tab-button").classList.add("active");
