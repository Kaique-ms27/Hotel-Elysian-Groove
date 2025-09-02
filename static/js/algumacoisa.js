// function realizarReserva() {
//     let nomeReserva = document.querySelector('#nome-nova-reserva').value;
//     let qtdReserva = document.querySelector('#qtd-nova-reserva').value;
//     let servicoReserva = document.querySelector('#servico-nova-reserva').value;
//     let valorReserva = document.querySelector('#valor-nova-reserva').value;
//     let btn = document.querySelector('#adicinar');

//     document.createElement("tr");
//     console.log("tr criado");
    

    

// }
    
let botaoAdicionar = document.querySelector("#adicionar")
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    //Captura o formulário
    let form = document.querySelector("#formulario-de-reserva");

    //Capturar nova encomenda
    let novaEncomenda = obtemReserva(form);

    //Captura a tabela de encomendas
    let tabela = document.querySelector("#tabela-clientes");

    //Insere a nova reserva na tabela
    tabela.appendChild(montaTR(novaEncomenda));

    form.reset();
})

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