function Calcular() {
    let numero1 = Number(document.getElementById('numero1').value);
    let numero2 = Number(document.getElementById('numero2').value);

    let diferenca = numero1 - numero2;

    document.getElementById('resultado').innerText = `A diferença entre ${numero1} e ${numero2} é = ${diferenca}.`
}

document.getElementById("calcular").addEventListener("click", Calcular);