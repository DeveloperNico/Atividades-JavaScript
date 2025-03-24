function CalcularIdade() {
    let idade = document.getElementById('idade').value;

    if (idade < 18) {
        document.getElementById('resultado').innerText = `Você não pode tirar sua CNH pois é menor de idade`;
    }
    else {
        document.getElementById('resultado').innerText = `Você pode tirar sua CNH pois é maior de idade`;
    }

    document.getElementById('idade').value = "";
    document.getElementById('idade').focus();
}

document.getElementById("calcular").addEventListener("click", CalcularIdade);

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        CalcularIdade();
    }
});