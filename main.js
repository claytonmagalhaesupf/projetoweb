mudaServico();
function mudaServico() {
    let servico = document.getElementById('selectServico').value;
    if (servico == 1) {
        document.getElementById("divBuscaCEP").style.display = 'none';
        document.getElementById("divIMC").style.display = 'block';
        document.getElementById("divPorcento").style.display = 'none';
    } else if (servico == 2) {
        document.getElementById("divBuscaCEP").style.display = 'none';
        document.getElementById("divIMC").style.display = 'none';
        document.getElementById("divPorcento").style.display = 'block';
    } else if (servico == 4) {
        document.getElementById("divBuscaCEP").style.display = 'block';
        document.getElementById("divIMC").style.display = 'none';
        document.getElementById("divPorcento").style.display = 'none';
    }
}

//peso / (altura x altura)
function calcularIMC() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let imc = peso / (altura * altura);
    imc = parseFloat(imc).toFixed(2);
    document.getElementById("resultadoIMC").innerHTML = "O IMC é: " + imc + "%";
}

function calculaPorcento() {
    let porcento = document.getElementById("porcento").value;
    let valorTotal = document.getElementById("valorTotal").value;
    let resultadoPorcento = (porcento*100) / valorTotal;
    resultadoPorcento = parseFloat(resultadoPorcento).toFixed(1);
    document.getElementById("resultadoPorcento").innerHTML = resultadoPorcento + " %";
}

async function buscaEndereco() {
    let cep = document.getElementById("inputCEP").value;
    const resposta = await fetch('https://brasilapi.com.br/api/cep/v1/'+cep);
    const dados = await resposta.json();
    console.log(dados);
    console.log(dados['city']);
    document.getElementById("pResultadoCEP").innerHTML = 
        dados['city'] + '-' + dados['state'] + '-' + dados['street'];
}