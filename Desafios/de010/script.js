function bhaskara() {
    let a = Number(prompt('Qual é o valor de a?', '3'))
    let b = Number(prompt('Qual é o valor de b?', '6'))
    let c = Number(prompt('Qual é o valor de c?', '2'))
    let resultado = document.getElementById('res')
    let delta = b**2 - 4 * a * c
    resultado.innerHTML = `<h2>Resolvendo Bhaskara.</h2>`
    resultado.innerHTML += `<p>A equação atual é <strong>${a}x<sup>2</sup> + ${b}x + ${c}</strong></p>`
    resultado.innerHTML += `<p>O cálculo realizado será <strong>&Delta; = ${b}<sup>2</sup> - 4 . ${a} . ${c}</strong></p>`
    resultado.innerHTML += `<p>O valor calculado foi <strong><mark>&Delta; = ${delta}</mark></strong></p>`
}