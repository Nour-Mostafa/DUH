// convert to ar language on click

//variables
let lang = document.querySelector(".lang");
let spanLang = document.querySelector(".lang span");
let pageEn = document.querySelector(".page-en");
let pageAr = document.querySelector(".page-ar");
//button on click
lang.onclick = () => {
  if (spanLang.innerHTML == "En") {
    spanLang.innerHTML = "Ar";
    document.body.style.direction = "rtl";
  } else if (spanLang.innerHTML == "Ar") {
    spanLang.innerHTML = "En";
    document.body.style.direction = "ltr";
  }
  pageEn.classList.toggle("none");
  pageAr.classList.toggle("none");
};


let scrollIcon = document.querySelector("i.fa-solid.fa-arrow-up");

window.onscroll = function (){
  if(window.scrollY >= 600){
    scrollIcon.classList.add("show");
  }else{
    scrollIcon.classList.remove("show");
  }
};

scrollIcon.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
    
  });
};
