// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
var scrolled = 0;    // navbar big or small -  0=big
var extended = 0;   // nav dropped or not


window.addEventListener('load', function load(){  window.removeEventListener('load', load, false);  document.body.classList.remove('fade-out');  }, false);

window.onscroll = function() {scrollFunction()};



function scrollFunction() {
  if (extended == 1) {   // nav is out
    document.getElementById("nav-dropdown").style.top = "-300px";
    extended = 0;
  }
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navbar").style.padding = "7px 7px 7px 7px ";
      document.getElementById("logo").style.fontSize = "50px";
      document.getElementById("logo").style.padding = "5px 12px 5px 5px";
      scrolled = 1;
    }
    else {
      document.getElementById("navbar").style.padding = "25px 7px 25px 25px ";
      document.getElementById("logo").style.fontSize = "65px";
      document.getElementById("logo").style.padding = "0px 12px 0px 0px";
      scrolled = 0;
    }
}

function navToggle() {
  if (extended == 1) {   // nav is out
    document.getElementById("nav-dropdown").style.top = "-300px";
    extended = 0;
  }
  else if (scrolled == 0) {   // nav is in, and navbar is big     scrolled == 0
    document.getElementById("nav-dropdown").style.top = "115px";
    extended = 1;
  }
  else if (scrolled == 1) {   // nav is in, and navbar is small     scrolled == 1
    document.getElementById("nav-dropdown").style.top = "79px";
    extended = 1;
  }
}


function deleteSelected() {
}

function copySelected() {
}
