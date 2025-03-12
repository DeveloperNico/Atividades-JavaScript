function Calcular() {
    let numero = Number(document.getElementById('numero').value);

    let fatorial = 1;
    for (i=1; i<=numero; i++) {
        fatorial *= i
    }

    document.getElementById('resultado').innerText = `O fatorial de ${numero}! é = ${fatorial}`
}

document.getElementById("calcular").addEventListener("click", Calcular);