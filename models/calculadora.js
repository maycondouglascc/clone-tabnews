function somar(numero1, numero2) {
  if (typeof numero1 !== "number" || typeof numero2 !== "number") {
    return "Erro";
  }
  return numero1 + numero2;
}

function divisao(n1, n2) {
  if (n1 / 0) {
    return "Você não pode dividir por 0";
  }
  return n1 / n2;
}

exports.somar = somar;
exports.divisao = divisao;
