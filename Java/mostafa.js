//removec class and Each li arrived with its own paragraph.

//variables
let myUl = document.querySelectorAll(".container-left  ul li");
let contentBox = document.querySelectorAll(".container-right .text-box");

myUl.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", managecards);
});

function removeActive() {
  myUl.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

function managecards() {
  contentBox.forEach((contentBox) => {
    contentBox.style.display = "none";
  });
  document.querySelectorAll(this.dataset.oort).forEach((el) => {
    el.style.display = "block";
  });
}
