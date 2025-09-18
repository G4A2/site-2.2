document.addEventListener('DOMContentLoaded', function () {
    // Referência aos elementos do DOM
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    const alternaContraste = document.getElementById('alterna-contraste');
    
    // Variáveis para persistência
    const TAMANHO_MINIMO = 0.8;
    const TAMANHO_MAXIMO = 1.5;
    const TAMANHO_PADRAO = 1.0;
    
    // Obtém as preferências do usuário do armazenamento local, se existirem
    let tamanhoAtualFonte = parseFloat(localStorage.getItem('fontSize')) || TAMANHO_PADRAO;
    const contrasteAtivo = localStorage.getItem('contrasteAtivo') === 'true';

    // Aplica as preferências salvas ao carregar a página
    document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    if (contrasteAtivo) {
        document.body.classList.add('alto-contraste');
    }

    // Função para atualizar o tamanho da fonte
    function updateFontSize(change) {
        const novoTamanho = tamanhoAtualFonte + change;
        if (novoTamanho >= TAMANHO_MINIMO && novoTamanho <= TAMANHO_MAXIMO) {
            tamanhoAtualFonte = novoTamanho;
            document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
            localStorage.setItem('fontSize', tamanhoAtualFonte);
        }
    }

    // Event listeners
    botaoDeAcessibilidade.addEventListener('click', function () {
        const isExpanded = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
        botaoDeAcessibilidade.setAttribute('aria-expanded', !isExpanded);
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
    });

    aumentaFonteBotao.addEventListener('click', function () {
        updateFontSize(0.
