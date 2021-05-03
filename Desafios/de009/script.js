function reajuste() {
    let resultado = document.querySelector('div#res')
    const real = {style: 'currency', currency: 'brl'}
    let nome = prompt('Qual é o nome do funcionário?', 'Pedro Paulo')
    let salario = Number.parseFloat(prompt(`Qual é o salário de ${nome}?`, '2850.25').replace(',', '.'))
    let porcentagem = parseInt(prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem`, '18'))
    let aumento = (salario * porcentagem)/100
    resultado.innerHTML = `<h2>${nome} recebeu um aumento salarial!</h2>`
    resultado.innerHTML += `<p>O salário atual era ${salario.toLocaleString('pt-BR', real)}.</p>`
    resultado.innerHTML += `<p>Com um aumento de ${porcentagem}%, o salário vai aumentar ${aumento.toLocaleString('pt-BR', real)} no próximo mês.</p>`
    resultado.innerHTML += `<p>E a partir daí, ${nome} vai passar a ganhar ${(salario+aumento).toLocaleString('pt-BR', real)}.</p>`
}