let clientes = document.querySelectorAll(".cliente");

// Estrutura de repetição para passar por todas as encomendas e calcular o total
for (let count = 0; count < clientes.length; count++) {

    // Qtd de encomendas
    let qtd = clientes[count].querySelector(".qtd").textContent;

    // Valor de cada encomenda
    let unitario = clientes[count].querySelector(".unitario").textContent;

    // Verifica se a qtd é valida
    if (qtd < 1 || isNaN(qtd)) {

        //A qtd é menor que 1 ou NaN
        clientes[count].querySelector(".qtd").textContent = "Quantidade Inválida!";

        // Linha toda vermelha e texto em branco
        clientes[count].style.backgroundColor = "red";
        clientes[count].style.color = "white";

    } else {

        // Verifica se o unitario é valido
        if (unitario < 1 || isNaN(unitario)) {
            // Unitario é menor que o mínimo ou NaN
            clientes[count].querySelector(".unitario").textContent = "Valor incorreto";

            // Linha toda vermelha e texto em branco
            clientes[count].style.backgroundColor = "red";
            clientes[count].style.color = "white";

        } else {
            // Exibe o total
            clientes[count].querySelector(".total").textContent = calcula_total(qtd, unitario);

            // Envia a formatação  para o valor uni
            clientes[count].querySelector(".unitario").textContent =formata_valor(parseFloat(unitario));
        }
    }
}

//Função de calculo do valor total
function calcula_total(qtd, unit) {
    let total = 0;
    total = qtd * unit;
    return formata_valor(total);
}

// Função de formatação para R$
function formata_valor(valor) {
    let valor_format = valor.toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' });
    return valor_format;
}