const real = { style: 'currency', currency: 'brl' };
let resultado = document.querySelector('div#res');

function maiorOuNao(primeiro, segundo) {
    if (primeiro > segundo) {
        return true;
    } else {
        return false;
    }
}

function verificar() {
    let pAnterior = parseFloat(prompt('Qual era o preço anterior do produto?', '125'));
    let pAtual = parseFloat(prompt('Qual é o preço atual do produto?', '132'));
    let mCaro = maiorOuNao(pAtual, pAnterior);
    let diff = Math.abs(pAtual - pAnterior);
    let variacao = mCaro ? (diff / pAnterior) * 100 : (diff / pAtual) * 100;
    resultado.innerHTML = '<h2>Analisando os valores informados</h2>';
    resultado.innerHTML += `</p>O produto custava ${pAnterior.toLocaleString('pt-BR', real)} e agora custa ${pAtual.toLocaleString('pt-BR', real)}.</p>`;
    resultado.innerHTML += `<p>Hoje o produto está mais ${mCaro ? 'caro' : 'barato'}.</p>`;
    resultado.innerHTML += `<p>O preço ${mCaro ? 'subiu' : 'caiu'} ${diff.toLocaleString('pt-BR', real)} em relação ao preço anterior.</p>`;
    resultado.innerHTML += `<p>Uma variação de ${variacao.toFixed(2).replace('.', ',')}% pra ${mCaro ? 'cima' : 'baixo'}.</p>`;
}
