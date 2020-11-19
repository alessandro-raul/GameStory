var usuario = sessionStorage.getItem('nomeUsuario');
var data = new Date();
var hora = data.getHours();

if(usuario == null){
    window.location.href = '../Login&Register/index.html'
}
 
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
        if(hora>6 && hora<12){
        hello_user.innerHTML = `Bom dia, ${usuario}`;
        }else if (hora>=12 && hora<18){
            hello_user.innerHTML = `Boa tarde, ${usuario}`;
        }else{
            hello_user.innerHTML = `Boa noite, ${usuario}`;
        }
        }, 400);
}, 2500);

setTimeout(() => {
    hello_user.setAttribute('class', 'animate__animated animate__fadeInLeft');
    welcome_user.setAttribute('class','animate__animated animate__fadeInRight');
}, 2700);

var visivel = false;
var consoleAnterior = "";

function showConsole(console) {
    consoleAnterior.style = 'display: none';
    console.style = 'display:block';
    consoleAnterior = console;
}

function hideConsole(console) {
    console.style.setProperty('-webkit-animation', 'animate-div-out 0.8s');
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

function logout(){
    sessionStorage.removeItem('nomeUsuario');
    body.style = 'overflow-y: hidden';
    body.style.setProperty('-webkit-animation', 'fade_out 0.5s'); 

    setTimeout(() => {
        goodbye.style = 'display: block';
        goodbye.style = 'display: flex';
    }, 400);
    
    setTimeout(() => {
        see_you.setAttribute('class', 'animate__animated animate__fadeOutLeft');
        thanks.setAttribute('class', 'animate__animated animate__fadeOutRight');
    }, 1700);  

    setTimeout(() => {
         window.location.href = '../InitialPage/index.html';
    }, 2800); 
}