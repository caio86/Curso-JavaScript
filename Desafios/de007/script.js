let cot = Number.parseFloat(prompt('Antes de mais nada. Quanto está a cotação do dólar agora?').replace(',','.'))
let resultado = document.getElementById('res')

function converte() {
    let reais = parseFloat(prompt('Quantos R$ você tem na carteira?').replace(',','.'))
    let dolar = reais / cot
    let $real = {
        style: 'currency',
        currency: 'brl'
    }
    let $dolar = {
        style: 'currency',
        currency: 'usd'
    }
    resultado.innerHTML = (`<p>O valor ${reais.toLocaleString('pt-BR', $real)} em dólares é ${dolar.toLocaleString('pt-BR', $dolar)}<p>`)
}