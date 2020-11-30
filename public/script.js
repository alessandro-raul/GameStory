
function aguardar(){
    btn_enviar.style = 'display: none';
    loading.style = 'display: block'
}

function finalizar_aguardar(){
    btn_enviar.style = 'display: block';
    loading.style = 'display: none'
}

function validar(){
    if(assunto.value!=''){
        document.getElementById('form_cadastro').onsubmit;
    }else{
        assunto.style = 'border-color: red';
    }
}

function cadastrar(){
    aguardar();
    console.log('entrou')
    var formulario = new URLSearchParams(new FormData(form_cadastro));
    fetch("/feedbacks/cadastrar", {
        method: "POST",
        body: formulario
    }).then(function (response) {
        if (response.ok) {
            finalizar_aguardar();
            mostrar_mensagem_sucesso();
        } else {
            console.log('Erro de cadastro!');
            response.text().then(function (resposta) {
                console.log(resposta);
            });
            finalizar_aguardar();
            mostrar_mensagem_erro();
        }
    });
    return false;
}

function mostrar_mensagem_sucesso(){
    Swal.fire(
        'Boa!',
        'Feedback enviado com sucesso ;)',
        'success'
      );
    limpar_campos();
}

function mostrar_mensagem_erro(){
    Swal.fire({
        title: 'Ops!',
        text: 'Parece que algo deu errado...',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
      limpar_campos();
}

function limpar_campos(){
    nome.value = '';
    email.value = '';
    assunto.value = '';
    mensagem.value = '';
}

function redirecionar_cadastro(){
    window.location.href = "pages/Login&Register/index.html?true"
}

    
