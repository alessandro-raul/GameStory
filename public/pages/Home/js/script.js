var data = new Date();
var hora = data.getHours();
var visivel = false;
var consoleAnterior = "";
var usuario;
var login_usuario;

inicia_sessao();
realiza_animacao();

function inicia_sessao(){
    usuario = sessionStorage.getItem('nomeUsuario');
    login_usuario = sessionStorage.getItem('emailUsuario');
    verifica_sessao();
}

function verifica_sessao(){
    if (usuario == undefined)  {
        redirecionar_login();
    } 
}

function realiza_animacao(){
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
    
}

function redirecionar_login(){
    window.location.href = '../../index.html';
}

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

function finalizar_sessao() {
    fetch(`/usuarios/sair/${login_usuario}`, {cache:'no-store'}); 
}

function validar_sessao() {
    fetch(`/usuarios/sessao/${login_usuario}`, {cache:'no-store'})
    .then(resposta => {
        if (resposta.ok) {
            resposta.text().then(texto => {
                console.log('Sessão :) ', texto);    
            });
        } else {
            console.error('Sessão :.( ');
            logoff();
        } 
    });    
}

function logout() {
    finalizar_sessao();
    sessionStorage.clear();
    logout_animation();
}

function logout_animation(){
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
         window.location.href = '../../index.html';
    }, 2800); 
}


