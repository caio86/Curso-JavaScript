let iNum = document.getElementById('fNum')
let select = document.getElementById('fSel')
let res = document.getElementById('res')
let n
let valores = []
let soma = 0
let div = document.createElement('div')
div.setAttribute('id', 'resultado')
function adicionar() {
    n = Number(iNum.value)
    if (n > 100 || n < 1 || iNum.length == 0 || valores.indexOf(n) != -1) {
        alert('Valor inválido ou já encontrado na lista')
    } else {
        soma += n
        valores.push(n)
        let option = document.createElement('option')
        option.text = `Valor ${n} adicionado.`
        select.appendChild(option)
    }
    iNum.value = ''
    valores.sort((a,b) => a-b)
    div.innerHTML = ''
}
function fim() {
    if (valores.length == 0) {
        alert('Adicione valóres antes de finalizar!')
    } else {
        div.innerHTML = `<p>Ao todo, temos ${valores.length} números cadastrados.</p>`
    div.innerHTML += `<p>O maior valor informado foi ${valores[valores.length-1]}.</p>`
    div.innerHTML += `<p>O menor valor informado foi ${valores[0]}.</p>`
    div.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    div.innerHTML += `<p>A média dos valores digitados é ${soma/valores.length}.</p>`
    res.appendChild(div)
    }
}