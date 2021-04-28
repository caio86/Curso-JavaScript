function converte() {
    let resultado = document.querySelector('div#res')
    let distancia = parseFloat(prompt('Digite uma distância em metros (m)').replace(',','.'))
    resultado.innerHTML = `<h2>A distância de ${distancia.toLocaleString('pt-BR')} metros, corresponde a...</h2>`
    resultado.innerHTML += `<p>${(distancia*10**-3).toLocaleString('pt-BR')} quilômetros (Km)</p>`
    resultado.innerHTML += `<p>${(distancia*10**-2).toLocaleString('pt-BR')} hectômetros (Hm)</p>`
    resultado.innerHTML += `<p>${(distancia*10**-1).toLocaleString('pt-BR')} decâmetros (Dam)</p>`
    resultado.innerHTML += `<p>${(distancia*10**1).toLocaleString('pt-BR')} decímetros (dm)</p>`
    resultado.innerHTML += `<p>${(distancia*10**2).toLocaleString('pt-BR')} centímetros (cm)</p>`
    resultado.innerHTML += `<p>${(distancia*10**3).toLocaleString('pt-BR')} milímetros (mm)</p>`
}