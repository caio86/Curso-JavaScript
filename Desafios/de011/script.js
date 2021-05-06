function verificar() {
    let resultado = document.querySelector('div#res')
    let ano = parseInt(prompt('Qual é o ano que você quer verificar?'))
    let mark = document.createElement('mark')
    let paragrafo = document.createElement('p')
    if (ano % 4 != 0) {
        resultado.innerHTML = `<H2>Analisando o ano de ${ano}...</H2>`
        mark.innerHTML = 'NÃO É BISSEXTO'
        mark.style.backgroundColor = 'rgba(255,0,0,1)'
        mark.style.fontWeight = 'bold'
        mark.style.filter = 'opacity(74%)'
        resultado.appendChild(paragrafo)
        paragrafo.innerHTML = `O ano de ${ano} `
        paragrafo.appendChild(mark)
        paragrafo.innerHTML += ` \u274c`
    } else {
        resultado.innerHTML = `<H2>Analisando o ano de ${ano}...</H2>`
        mark.innerHTML = 'É BISSEXTO'
        mark.style.backgroundColor = 'rgba(0,255,0,1)'
        mark.style.fontWeight = 'bold'
        mark.style.filter = 'opacity(74%)'
        resultado.appendChild(paragrafo)
        paragrafo.innerHTML = `O ano de ${ano} `
        paragrafo.appendChild(mark)
        paragrafo.innerHTML += ` \u2705`
    }
}