const form = document.getElementById('novoItem')

form.addEventListener('submit', (evento) => { // Submit está pedindo todos os dados, esses dados estou chamando de evento.
    evento.preventDefault() // previnindo o comportamento padrão desse evento.

    console.log(evento)
    console.log(evento.target.elements['nome'].value)
    console.log(evento.target.elements['quantidade'].value)
})
