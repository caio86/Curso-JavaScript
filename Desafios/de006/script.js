function converte() {
    let temp = parseFloat(prompt('Digite uma temperatura em °C (Celsius)').replace(',','.'))
    let resultado = document.querySelector('div#res')
    let fah = temp*9/5 + 32
    let kelvin = temp + 273.15
    resultado.innerHTML = `<h2>A temperatura de ${temp.toLocaleString('pt-BR')}°C, corresponde a...</h2>`
    resultado.innerHTML += `<p>${kelvin.toLocaleString('pt-BR')}°K (Kelvin)</p>`
    resultado.innerHTML += `<p>${fah.toLocaleString('pt-BR')}°F (Fahrenheit)</p>`
}