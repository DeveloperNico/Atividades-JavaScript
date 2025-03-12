function Calcular() {
    let base = Number(document.getElementById('base').value);
    let altura = Number(document.getElementById('altura').value);

    let area = base * altura;

    document.getElementById('resultado').innerText = `A área é = ${area}`
}

document.getElementById("calcular").addEventListener("click", Calcular);