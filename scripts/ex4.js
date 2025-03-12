function Calcular() {
    let celsius = Number(document.getElementById('celsius').value)

    let celsiusParaFahrenheit = (celsius * 9/5) + 32;

    document.getElementById('resultado').innerText = `A temperatura ${celsius}°C é = ${celsiusParaFahrenheit}°F`
}

document.getElementById("calcular").addEventListener("click", Calcular);