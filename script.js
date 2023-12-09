const toggleButton = document.querySelector('.toggle-button')
const dropDownMenu = document.querySelector('.dropdown_menu')
    
toggleButton.onclick = function () {
  dropDownMenu.classList.toggle('open')
}

let section = document.querySelectorAll("section");
let menu = document.querySelectorAll("header nav a");

window.onscroll = () => {
  section.forEach((i) => {
    let top = window.scrollY;
    let offset = i.offsetTop - 150;
    let height = i.offsetHeight;
    let id = i.getAttribute("id");

    if (top >= offset && top < offset + height) {
      menu.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

function scrollToTop() {
  window.scrollTo(0, 0);
}

const arrowUp = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 700) { 
        arrowUp.style.display = "block";
    } else {
        arrowUp.style.display = "none";
    }
});

arrowUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
});

window.addEventListener("scroll", function() {
  var scrollButton = document.getElementById("scrollTop");
  if (window.scrollY > 700) {
    scrollButton.classList.add("show");
    scrollButton.classList.remove("hide");
  } else {
    scrollButton.classList.remove("show");
    scrollButton.classList.add("hide");
  }
});