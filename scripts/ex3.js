function Calcular() {
    let numero1 = Number(document.getElementById('numero1').value);
    let numero2 = Number(document.getElementById('numero2').value);

    if (numero1 % numero2 == 0) {
        document.getElementById('resultado').innerText = `O número ${numero2} é múltiplo de ${numero1}`
    }
    else {
        document.getElementById('resultado').innerText = `O número ${numero2} não é múltiplo de ${numero1}`
    }
}

document.getElementById("calcular").addEventListener("click", Calcular);