function contar() {
    var inicio = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpas')
    var res = document.querySelector('div#res')
    if (passo.value <= 0) {
        alert('Passo inválido! Considerando PASSO 1')
        passo.value = 1
    }
    res.innerHTML = "Contando: <br>"
    for (var c=Number(inicio.value);c<=Number(fim.value);c += Number(passo.value)) {
        res.innerHTML += ` ${c} &#x1F449;`
    }
        res.innerHTML += '&#x1F3C1;'
}