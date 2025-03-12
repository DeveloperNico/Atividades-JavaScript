function Calcular() {
    let taxa = parseFloat(document.getElementById('taxa').value.replace(',', '.'));
    let valorDesejado = parseFloat(document.getElementById('valorDesejado').value.replace(',', '.'));

    let conversao = valorDesejado / taxa;

    document.getElementById('resultado').innerText = `O valor desejado convertido é = R$ ${conversao.toFixed(2)}`
}

document.getElementById("calcular").addEventListener("click", Calcular);