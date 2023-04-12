/* Atividade 1 */

function validarFormulario() {
    var form = document.getElementById('frmRegistro');
    var dataInput = document.getElementById('inData');
    var nomeInput = document.getElementById('inCli');
    var emailInput = document.getElementById('inMail');
    var telefoneInput = document.getElementById('inFone');
    var produtoInput = document.getElementById('inProd');
    var quantidadeInput = document.getElementById('inQtd');
    var valorUnitarioInput = document.getElementById('inVal');
    document.getElementById("msg-erro").innerHTML = "";

    var nome = nomeInput.value.trim();
    var email = emailInput.value.trim();
    var produto = produtoInput.value.trim();
    var telefone = telefoneInput.value.trim();
    var data = dataInput.value.trim();
    var quantidade = quantidadeInput.value.trim();
    var valorUnitario = valorUnitarioInput.value.trim();

    quantidade = quantidade == '' ? 0 : parseFloat(quantidade);
    valorUnitario = valorUnitario == '' ? 0 : parseFloat(valorUnitario);


    if (data === '') {
        alert('O campo "Data" não pode estar vazio!');
        return false;
    }

    if (nome === '') {
        alert('O campo "Nome do cliente" não pode estar vazio!');
        return false;
    }

    if (telefone === '') {
        alert('O campo "Telefone" não pode estar vazio!');
        return false;
    }

    if (email === '') {
        alert('O campo "E-mail" não pode estar vazio!');
        return false;
    }

    if (produto === '') {
        alert('O campo "Nome do produto" não pode estar vazio!');
        return false;
    }

    if (quantidade == '' || quantidade <= 0) {
        alert('O campo "Quantidade" deve ser positivo!');
        return false;
    }

    if (valorUnitario == '' || valorUnitario <= 0) {
        alert('O campo "Valor Unitário" deve ser positivo!');
        return false;
    }

    if (data.length < 5) {
        alert('O campo "Data" não pode ter menos que 5 caracteres!');
        return false;
    }

    if (nome.length < 5) {
        alert('O campo "Nome do cliente" não pode ter menos que 5 caracteres!');
        return false;
    }

    if (telefone.length < 5) {
        alert('O campo "Nome do cliente" não pode ter menos que 5 caracteres!');
        return false;
    }

    if (email.length < 5) {
        alert('O campo "E-mail" não pode ter menos que 5 caracteres!');
        return false;
    }

    if (produto.length < 5) {
        alert('O campo "Nome do cliente" não pode ter menos que 5 caracteres!');
        return false;
    }

    if (quantidade < 0) {
        alert('O campo "Quantidade" não pode ser negativo!');
        return false;
    }

    if (valorUnitario < 0) {
        alert('O campo "Valor Unitário" não pode ser negativo!');
        return false;
    }
    document.getElementById("msg-erro").style.display = 'none';
    document.getElementById("msg-sucesso").style.display = 'Formulário enviado com sucesso!';
    document.getElementById("msg-sucesso").style.display = 'block';
    return true;
}


/* Atividade 2 */

function validarImg() {
    let imagem = document.getElementById('inQtdImg').value;
    let imagensHtml = '';

    for (let i = 0; i < imagem; i++) {
        imagensHtml += '<img src="img/logo.png" alt="logo-top" class="imagens"/>'
    }
    document.getElementById('canvas').innerHTML = imagensHtml;
}



/* Atividade 3 */

function btnEnviar() {
    let imagem = document.getElementById('lampada');
    let caminho = imagem.src;
    let arquivo = caminho.substring(caminho.lastIndexOf('/') + 1);

    if (arquivo == 'acesa.jpg' || arquivo == '')
        imagem.src = 'img/apagada.jpg';
    else
        imagem.src = 'img/acesa.jpg';

}

/* Atividade 4 */

function valCalc(){
    var preco = parseInt(document.getElementById('inValorPedido').value);
    let desc = 0;

    if (preco >= 2000)
        desc = 1.5;
    else if (preco >= 1500)
        desc = 1.0;
    else if (preco >= 1000)
        desc = 0.8;
    else if (preco >= 500)
        desc = 0.5;

    let conta = preco * desc / 100
    let final = preco - conta;
    inPercDesc.value = desc;
    inValDesc.value = conta;
    inValFinal.value = final;
}