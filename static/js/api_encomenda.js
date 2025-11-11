var botaoAPI = document.querySelector("#api-encomenda")

botaoAPI.addEventListener("click", function(){
    // Consumo da API
    var api = new XMLHttpRequest();
    api.open("GET", "http://localhost:3000/reservas_web");
    api.addEventListener("load",function(){
        var resposta = JSON.parse(api.responseText);

        // Passa por cada item do JSON e adiciona na tabela
        resposta.forEach(function(encomendaAPI) {
            adicionaEncomenda(encomendaAPI)
        });

    });
    api.send();
})