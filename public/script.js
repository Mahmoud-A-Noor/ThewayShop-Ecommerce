// When the user scrolls the page, execute myFunction
window.onscroll = function() {stick()};

let first_time = true;
let navbar = null
let sticky = null

function stick() {
    
    if(first_time){
        first_time = false;   
        navbar = document.getElementById("bottom-part");
        sticky = navbar.offsetTop;
    }


  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
} 