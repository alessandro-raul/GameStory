pegaParametro();

function pegaParametro(){
    var url = window.location.href;
    var res = url.split('?');

    if(res[1] != undefined){
        login.style = "display: none";
        register.style = "display:block, flex";
    }
}

function changeToLogin() {
    register.style = "display: none";
    login.style = "display: block, flex";
}

function changeToRegister() {
    register.style = "display: block, flex";
    register.style = "animation: flipOutY"
    login.style = "display: none";
}

function validaNome(){
    var nome = nomeTxt.value;
    if(nome.length<2){
        nomeTxt.style = 'border-color: red';
        msg_nome.style = 'display: block';
    }else{
        nomeTxt.style = 'border-color: green';
        msg_nome.style = 'display: none';
    }
}

function validaEmail(){
    var email = emailTxt.value;
    if(email.indexOf('@')>0 && email.indexOf('.com')>0){
        emailTxt.style = 'border-color:green';
        msg_email.style = 'display: none';
    }else{
        emailTxt.style = 'border-color:red';
        msg_email.style = 'display: block';
    }
}

function validaSenha(){
    var senha = senhaTxt.value;
    if(senha.length<5){
        senhaTxt.style = 'border-color:red';
        msg_senha.style = 'display: block';
    }else{
        senhaTxt.style = 'border-color:green';
        msg_senha.style = 'display: none';
        validaSenha2();
    }
}

function validaSenha2(){
    var senha = senhaTxt.value;
    var senha2 = confirmarSenhaTxt.value;
    if(senha === senha2){
        confirmarSenhaTxt.style = 'border-color: green';
        msg_senha2.style = 'display: none';
        btn_cadastrar.removeAttribute('disabled');
    }else{
        confirmarSenhaTxt.style = 'border-color:red';
        msg_senha2.style = 'display: block';  
        btn_cadastrar.setAttribute('disabled', 'disabled');    
    }
}

function aguardar(){
    btn_cadastrar.style = 'display: none';
    btn_logar.style = 'display: none';
    btn_possui.style = 'display: none';
    btn_nao_possui.style = 'display: none'
    loading.style = 'display:block';
    loading2.style = 'display: block';
}

function finalizar_aguardar(){
    btn_cadastrar.style = 'display: block';
    btn_logar.style = 'display: block';
    btn_possui.style = 'display: block';
    btn_nao_possui.style = 'display: block'
    loading.style = 'display:none';
    loading2.style = 'display: none';
}

function iniciarSessao(){
    sessionStorage.setItem('nomeUsuario', nomeTxt.value);
    sessionStorage.setItem('emailUsuario', emailTxt.value);
    window.location.href='../Home/index.html';
}

function cadastrar() {
    aguardar();
    console.log('entrou')
    var formulario = new URLSearchParams(new FormData(form_cadastro));
    fetch("/usuarios/cadastrar", {
        method: "POST",
        body: formulario
    }).then(function (response) {
        if (response.ok) {
            iniciarSessao();
        } else {
            console.log('Erro de cadastro!');
            response.text().then(function (resposta) {
                alert(resposta);
            });
            finalizar_aguardar();
        }
    });
    return false;
}

function entrar() {
    aguardar();
    var formulario = new URLSearchParams(new FormData(form_login));
    
    sessionStorage.setItem('emailUsuario', 'usuario@email.com');
    sessionStorage.setItem('nomeUsuario', 'Usuário');
    window.location.href='../Home/index.html';
    
    // fetch("/usuarios/autenticar", {
    //     method: "POST",
    //     body: formulario
    // }).then(resposta => {
    //     if (resposta.ok) {
    //         resposta.json().then(json => {
    //             sessionStorage.setItem('emailUsuario', json.emailUsuario);
    //             sessionStorage.setItem('nomeUsuario', json.nomeUsuario);
    //             window.location.href='../Home/index.html';
    //         });
    //     } else{
    //         console.log('Erro de login!');
    //         resposta.text().then(texto => {
    //             finalizar_aguardar();
    //             exibir_mensagem_falha(texto);
    //         });
    //     }
    // });
    return true;
}

function exibir_mensagem_falha(texto){
    login_error.innerHTML = texto;
    login_error.style = 'display: block';
    email_log.style = 'border-color: red';
    senha_log.style = 'border-color: red';
}
