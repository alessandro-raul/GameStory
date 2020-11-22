
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
            alert('Erro no cadastro');
            console.log('Erro de cadastro!');
            response.text().then(function (resposta) {
                alert(resposta);
            });
            finalizar_aguardar();
        }
    });
    return false;
}

function mostrar_mensagem_sucesso(){

    limpar_campos();
}

function limpar_campos(){
    nome.value = '';
    email.value = '';
    assunto.value = '';
    mensagem.value = '';
}