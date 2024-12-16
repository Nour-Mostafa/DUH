let all = document.querySelectorAll("header .all");
let nourall = document.querySelectorAll("header .all ul");

all.forEach((all) => {
  all.addEventListener("click", function () {
    nourall.forEach((nall) => {
      nall.classList.toggle("open");
    });
  });
});
