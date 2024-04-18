document.addEventListener("DOMContentLoaded", function() {
    const botaoMostrarAmor = document.getElementById("mostrarAmor");
    const mensagemAmor = document.getElementById("mensagemAmor");

    botaoMostrarAmor.addEventListener("click", function() {
        mensagemAmor.style.display = "block";
        const coracao = document.createElement("span");
        coracao.innerHTML = "&hearts;";
        coracao.style.color = "#ff0000"; // Cor vermelha para o coração
        mensagemAmor.appendChild(coracao);
    });
});
