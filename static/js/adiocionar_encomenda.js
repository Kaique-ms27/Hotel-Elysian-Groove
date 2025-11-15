let botaoAdicionar = document.querySelector("#adicionar")
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    //Captura o formulário
    let form = document.querySelector("#formulario-de-reserva");

    //Capturar nova encomenda
    let novaEncomenda = obtemReserva(form);
    
    //Adiciona a encomenda
    adicionaEncomenda(novaEncomenda)

    form.reset();
})

// Função para adicionar nova encomenda na tabela
function adicionaEncomenda(dadosEncomenda) {
    // Captura a tavele de encomendas
    var tabela = document.querySelector("#tabela-clientes");
    // Insere a nova encomenda na tabela
    tabela.appendChild(montaTR(dadosEncomenda))
}
// Captura os dados do formulário
function obtemReserva(formulario) {
    let encomenda = {
        nome: formulario.nome.value,
        qtde: formulario.qtde.value,
        servico: formulario.servico.value,
        unitario: formulario.unitario.value
    }

    return encomenda;
}

// Função para criar nova linha

function montaTR(dadosNovaEncomenda){
    let linha = document.createElement('tr');

    linha.appendChild(montaTD(dadosNovaEncomenda.nome));
    linha.appendChild(montaTD(dadosNovaEncomenda.servico));
    linha.appendChild(montaTD(dadosNovaEncomenda.qtde));
    linha.appendChild(montaTD(formata_valor(dadosNovaEncomenda.unitario)));
    linha.appendChild(montaTD(calcula_total(dadosNovaEncomenda.qtde, dadosNovaEncomenda.unitario)));

    return linha;
}

// Função para criar nova coluna
function montaTD(dadoColuna) {
    let coluna = document.createElement('td');
    coluna.textContent=dadoColuna;
    return coluna;
}