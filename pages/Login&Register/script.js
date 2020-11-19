function changeToLogin() {
    register.style = "display: none";
    login.style = "display: block, flex";
}

function changeToRegister() {
    register.style = "display: block, flex";
    login.style = "display: none";
}

var val_nome, val_email, val_senha, val_senha2;


function validaNome(){
    var nome = nomeTxt.value;
    if(nome.length<2){
        nomeTxt.style = 'border-color: red';
        msg_nome.style = 'display: block';
        val_nome=false;
    }else{
        nomeTxt.style = 'border-color: green';
        msg_nome.style = 'display: none';
        val_nome=true;
    }
}

function validaEmail(){
    var email = emailTxt.value;
    if(email.indexOf('@')>0 && email.indexOf('.com')>0){
        emailTxt.style = 'border-color:green';
        msg_email.style = 'display: none';
        val_email=true;
    }else{
        emailTxt.style = 'border-color:red';
        msg_email.style = 'display: block';
        val_email=false;
    }
}

function validaSenha(){
    var senha = senhaTxt.value;
    if(senha.length<5){
        senhaTxt.style = 'border-color:red';
        msg_senha.style = 'display: block';
        val_senha=false;
    }else{
        senhaTxt.style = 'border-color:green';
        msg_senha.style = 'display: none';
        val_senha=true;
        validaSenha2();
    }
}


function validaSenha2(){
    var senha = senhaTxt.value;
    var senha2 = confirmarSenhaTxt.value;
    if(senha === senha2){
        confirmarSenhaTxt.style = 'border-color: green';
        msg_senha2.style = 'display: none';
        val_senha2=true;
    }else{
        confirmarSenhaTxt.style = 'border-color:red';
        msg_senha2.style = 'display: block';
        val_senha2=false;
    }
}

function logar(){
    if(val_nome && val_email && val_senha && val_senha2){
        btn_cadastrar.style = 'display: none';
        btn_possui.style = 'display: none';
        loading.style = 'display:block';
        sessionStorage.setItem('nomeUsuario', nomeTxt.value);
        setTimeout(() => {
            window.location.href = '../Home/index.html'
        }, 4000);
    }else{
      alert('Campos inválidos!');
    }
}

