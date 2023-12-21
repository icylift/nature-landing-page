// ------------------------------------  join btn   ----------------------------------------------------//

const joinUsBtn = document.getElementById("joinUsBtn");

function emailPage() {
  return window.open("form.html", "_self");
}

// ------------------------------------  Sticky Navbar   ----------------------------------------------------//

window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("nav");

const position = document.navbar.scrollTop;

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.position >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
