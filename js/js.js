var link = document.querySelector(".button-search");
var modal = document.querySelector(".modal-search-form");

link.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.toggle("modal-show");
});


