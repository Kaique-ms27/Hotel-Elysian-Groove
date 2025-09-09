var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    var clientes = document.querySelectorAll(".clientes");
    if (this.value.length > 0) {
        for (var cli = 0; cli < clientes.length; cli++) {
            var cliente=clientes[cli];
            var nome=cliente.querySelector('.nome').textContent;
            var expressao = new RegExp(this.value, "i");
            // Verficca se o nome digitado é igual ao contador
            if (!expressao.test(nome)) {
                // Torna invisível
                cliente.classList.add("invisivel");
            } else {
                // Mantém visível
                cliente.classList.remove("invisivel");
            }
        }
    } else {
        // Não há filtro de busca, exibe a lista completa
        for (var cli=0; cli < clientes.length; cli++) {
            clientes[cli].classList.remove("invisivel");
        }
    }
})