setTimeout(() => {
    title.removeAttribute('class');
    title.setAttribute('class', 'animate__animated animate__bounceOutUp');
    subtitle.removeAttribute('class');
    subtitle.setAttribute('class', 'animate__animated animate__bounceOutDown');
}, 2000);

setTimeout(() => {
    intro.style.setProperty('-webkit-animation', 'fade_out 0.5s'); 
        setTimeout(() => {
        intro.style = 'display: none'
        body.style = 'overflow-y: auto'
        body.style.setProperty('-webkit-animation', 'fade_in 0.5s'); 
        }, 400);
}, 2500);


var visivel = false;
var consoleAnterior = "";

function showConsole(console) {
    window.scrollBy(10, 0)
    consoleAnterior.style = 'display: none'
    console.style = 'display:block'
    consoleAnterior = console;
}

function hideConsole(console) {
    console.style.setProperty('-webkit-animation', 'animate-div-out 0.5s');
   setTimeout(() => {
       console.style = 'display: none';
   }, 500);
}

function next(gen) {
    document.getElementById(gen.id).scrollBy(600, 0);
}

function before(gen) {
    document.getElementById(gen.id).scrollBy(-600, 0);
}

function user_options() {
    visivel = !visivel;
    if (visivel) {
        hidden.style = 'visibility: visible; transform: scaleY(100px);'
    } else {
        hidden.style = 'visibility: hidden;'
    }
}

function funcao1() {
    alert('Snes');
}

function funcao2() {
    alert('Genesis');
}

/* JS CAROUSEL */

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}