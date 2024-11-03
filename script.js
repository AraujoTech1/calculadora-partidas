function calcularNivel() {
    // Captura os valores de vitórias e derrotas
    const vitorias = parseInt(document.getElementById("vitorias").value);
    const derrotas = parseInt(document.getElementById("derrotas").value);

    // Cálculo do saldo de vitórias
    const saldoVitorias = vitorias - derrotas;

    // Determina o nível do jogador com base nas vitórias
    let nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Exibe o resultado
    document.getElementById("resultado").textContent =
        `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}
