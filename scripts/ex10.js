function Calcular() {
    let numero = Number(document.getElementById('numero').value);

    for (i=0; i<=10; i++) {
        let resultado = numero * i;
        document.getElementById('resultado').innerText += `${numero} x ${i} = ${resultado}\n`
    }

    document.querySelector('.container').classList.add('expandido');
    document.querySelector('h1').classList.add('margin');
}

document.getElementById("calcular").addEventListener("click", Calcular);