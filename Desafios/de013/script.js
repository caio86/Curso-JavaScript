function notas() {
    let resultado = document.querySelector('div#res');
    let aluno = prompt('Qual é o nome od aluno?', 'Ana Maria');
    let nota1 = parseFloat(prompt(`Primeira nota de ${aluno}`, '8.5').replace(',', '.'));
    let nota2 = parseFloat(prompt(`Segunda nota de ${aluno}`, '5').replace(',', '.'));
    let media = (nota1 + nota2) / 2;
    let relacao = ''
    let estado = document.createElement('mark');
    let paragrafo = document.createElement('p')
    estado.style.fontWeight = 'bold'
    estado.style.filter = 'opacity(74%)'

    if (media > 6) {
        relacao = `acima de 6,0`
        estado.innerHTML = 'APROVADO';
        estado.style.backgroundColor = 'green';
    } else if (media > 3) {
        relacao = `entre 3,0 e 6,0`
        estado = document.createElement('span')
        estado.style.fontWeight = 'bold'
        estado.innerHTML = 'RECUPERAÇÃO';
        estado.style.color = 'orange';
    } else {
        relacao = `abaixo de 3,0`
        estado.innerHTML = 'REPROVADO';
        estado.style.backgroundColor = 'red';
    }
    // amostra do resultado
    resultado.innerHTML = `<h2>Analisando a situação de ${aluno}</h2>`;
    resultado.innerHTML += `<p>Com as notas ${nota1.toLocaleString('pt-BR')} e ${nota2.toLocaleString('pt-BR')},a <strong>média é ${media}</strong></p>`;
    paragrafo.innerHTML = `Com ${relacao}, o aluno está `
    paragrafo.appendChild(estado)
    resultado.appendChild(paragrafo)
}
