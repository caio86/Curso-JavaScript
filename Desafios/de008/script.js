function calcular() {
    let resultado = document.querySelector('div#res')
    let produto = prompt('Qual é o produto que você está comprando', 'smart watch')
    let preco = Number.parseFloat(prompt(`Qual é o preço de ${produto}`, '795.98').replace(',','.'))
    let desc = (preco * 10)/100
    resultado.innerHTML = `<h2>Calculando desconto de 10% para ${produto}</h2>`
    resultado.innerHTML += `<p>O preço original era ${preco.toLocaleString('pt-BR', {style:'currency', currency:'brl'})}.</p>`
    resultado.innerHTML += `<p>Você acaba de ganhar ${desc.toLocaleString('pt-BR', {style:'currency', currency:'brl'})} de desconto (-10%).</p>`
    resultado.innerHTML += `<p>No fim, você vai pagar ${(preco-desc).toLocaleString('pt-BR', {style:'currency', currency:'brl'})} no produto ${produto}.</p>`
}