// var harmBurger = document.querySelector('#menu');
// $("#nav").hide();
// $(document).ready(function() {
//   $("#nav").hide();
// });


// $(document).ready(function(){
//     $("#menu").click(function(e){
//         e.preventDefault();
//       $("#nav").fadeTo("fast", 5);
     
//     });

//   });

// dismiss.addEventListener('click', function(e){
//     e.preventDefault();
//     $('#nav').hide('fast');
// })

function onClickmenu() {
  document.getElementById("menu").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  $('header').css("background", "white");

}



$(document).ready(function(){
	var d = new Date();
	var n = d.getHours();
	if (n > 19 || n < 6)
	  document.body.className = "night";
	else
	  document.body.className = "day";
});






const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
   
}


const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", openMenu));

function openMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

