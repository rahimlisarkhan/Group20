var modal = document.querySelector("#modal");

document.querySelector("#openModal").addEventListener("click", function () {
  modal.style.zIndex = 9999;
  modal.style.opacity = 1;
});

document.querySelector("#closeModal").addEventListener("click", function () {
  modal.style.zIndex = -9999;
  modal.style.opacity = 0;
});
