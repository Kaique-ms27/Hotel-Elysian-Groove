let tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event) {
    // Adiciona o efeito de excluir o item
    event.target.parentNode.classList.add("fadeOut");

    // Atrasa a exclusão da Linha
    setTimeout(function(){
        // Exclui a linha
        event.target.parentNode.remove()},600);
});