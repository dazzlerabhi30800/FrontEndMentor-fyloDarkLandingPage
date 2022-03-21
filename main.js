const input = document.querySelector(".input__wrapper label input");
const button = document.querySelector(".button__wrapper a");
const error = document.querySelector(".error");
const backgroundImg = document.querySelector('.background__img img');

document.addEventListener('DOMContentLoaded', imageResize);

function imageResize() {
  if (window.innerWidth >= 1000) {
    backgroundImg.src = "images/bg-curvy-desktop.svg";
    console.log("it is working");
  } else {
    backgroundImg.src = "images/bg-curvy-mobile.svg";
  }
}

window.onresize = imageResize;

button.addEventListener("click", () => {
  console.log("clicked");
  const inputText = input.value;
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (emailPattern.test(inputText)) {
    setTimeout(function() {
      error.innerText = "Your email has been verified";
      error.classList.add("show");
    }, 50);
    setTimeout(function() { error.classList.remove("show"); }, 4000);
  } else {
    setTimeout(function() {
      error.innerText = "Please enter valid email";
      error.classList.add("show");
    }, 50);
    setTimeout(function() { error.classList.remove("show"); }, 4000);
  }
});
