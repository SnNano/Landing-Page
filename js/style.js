AOS.init();
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    navText:["<div class='nav-btn prev-slide hidden-sm hidden-xs'><i class='fas fa-angle-double-left'></i></div>",
    "<div class='nav-btn next-slide hidden-sm hidden-xs'><i class='fas fa-angle-double-right'></i></div>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1200:{
            items:4
        }
    }
});
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}