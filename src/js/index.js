// passo 1 - pegar HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// passo 2 - identificar o clique nos botões
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        // passo 3 - desmarcar o botao selecionado anterior
        desmarcarBotaoSelecionado();

        // passo 4 - marcar o botão clicado com se estivesse selecionado
        botao.classList.add('selecionado');

        // passo 5 - esconder a imagem de fundo anterior
        esconderImagemAtiva();

        // passo 6 - aparecer a imagem correspondente ao botão clicado
        imagens[indice].classList.add('ativa');

    })
})

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desmarcarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
