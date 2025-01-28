let listaDeNumerosSorteados = [];
let numLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 0;
MensagemInicial();

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}
    function MensagemInicial() {
        exibirTextoNaTela('h1','Jogo do número secreto');
        exibirTextoNaTela('p','Escolha um número entre 1 e 10');
    }

function verificarChute(){
    let chute = Number(document.querySelector('input').value);
    
    if (chute == numeroSecreto) {
        ++tentativa;
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p',`Você descobriu o número secreto com
        ${tentativa == 1?
            tentativa + ' tentativa.':
            tentativa + ' tentativas.'
        }`);
        document
        .getElementById('reiniciar')
        .removeAttribute('disabled');
    }else{
        chute > numeroSecreto ?
        exibirTextoNaTela('p','O número secreto é menor'):
        exibirTextoNaTela('p','O número secreto é maior');
        limparCampo();
        ++tentativa;
    };
}

function gerarNumeroAleatorio() {
    
    let numeroEscolhido = parseInt(Math.random() * numLimite + 1);
    let qntNumerosEscolhidosNaLista = listaDeNumerosSorteados.length;

    if (qntNumerosEscolhidosNaLista == numLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
    
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    document
        .getElementById('reiniciar')
        .setAttribute('disabled', true);
    MensagemInicial();
    limparCampo();
    tentativa = 0;
}