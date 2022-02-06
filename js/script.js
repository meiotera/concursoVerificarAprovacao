let listaCandidatos = [];
console.log(listaCandidatos)

function adicionarCadidatos() {
    let inCadidato = document.getElementById('inCadidato');
    let inAcerto = document.getElementById('inAcerto');
    

    let acertos = Number(inAcerto.value);
    let nome = inCadidato.value;

    if(nome === '' || isNaN(acertos)) {
        alert('Informe os dados coerretamente')
        inCadidato.focus();
        return;
    }   

    // criando objeto e adicionando em listaCandidatos
    listaCandidatos.push({nome: nome, acertos: acertos})

    inCadidato.value = '';
    inCadidato.focus();
    inAcerto.value = '';

    listarCadidatos()
    

}
let btAdicionar = document.getElementById('btAdicionar');
btAdicionar.addEventListener('click', adicionarCadidatos);

// Verifica a pontuacao dos candidatos e imprime somente os que tiverem pontuacao maior ou igual a pontiacao de corte

function segundaFase() {
    // Pergunta qual a pontuacao para aprovacao
    let acertoSegundaEtapa = prompt('Numero de acertos para aprovacao?');
    // Converte para Number
    acertoSegundaEtapa = Number(acertoSegundaEtapa);
    // Verifica se os dados informados sao validos
    if(acertoSegundaEtapa === 0 || isNaN(acertoSegundaEtapa)) {
        alert('Informe um valor valido');
        return;
    }

    // recebe uma copia da lista de candidatos
    let listaAprovados = listaCandidatos.slice()
    let ordem = ''

    // Colocar em ordem de pontuacao
    listaAprovados.sort(function (a, b){ return a.acertos - b.acertos})
    // coloca em ordem reversa
    listaAprovados.reverse()
    // gera a lista de candidatos aprovados
    for(let i = 0; i < listaCandidatos.length; i++) {
        if(listaAprovados[i].acertos >= acertoSegundaEtapa) {
            ordem += listaAprovados[i].nome + ' - ' + listaAprovados[i].acertos + ' Pontos' + '\n';
          
        } 
    }
    if(ordem.length === 0) {
        alert('Ninguem Nenhum Aprovado')
        location.reload()
        return;
    }
    document.getElementById('outRetorno').textContent = ordem;

    
}
let btAprovados = document.getElementById('btAprovados');
btAprovados.addEventListener('click', segundaFase);

// function que imprime a lista de candidatos

function listarCadidatos() {
    // verifica se a lista esta vazia, se vazia exibe um alerta    
    if(listaCandidatos.length === 0) {
        alert('Lista vazia');
        return;
    }

    let lista = '';

    for(let i = 0; i < listaCandidatos.length; i++) {
        lista += listaCandidatos[i].nome + ' - ' + listaCandidatos[i].acertos + ' Pontos' + '\n';
    }

    document.getElementById('outRetorno').textContent = lista;

}
let btListar = document.getElementById('btListar');
btListar.addEventListener('click',listarCadidatos);