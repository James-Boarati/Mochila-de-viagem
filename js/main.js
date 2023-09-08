const form = document.getElementById('novoItem')

form.addEventListener('submit', (evento) => { // Submit está pedindo todos os dados, esses dados estou chamando de evento.
    evento.preventDefault() // previnindo o comportamento padrão desse evento.

    criaElemento(evento.target.elements['nome'].value, quantidade)
})

function criaElemento (nome, quantidade) {
    console.log(nome)
    console.log(quantidade)

    document.createElement('li')
}
