const form = document.getElementById("novoItem")

form.addEventListener("submit", (evento) => { // Submit está pedindo todos os dados, esses dados estou chamando de evento.
    evento.preventDefault() // previnindo o comportamento padrão desse evento.

    criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value)
})

function criaElemento(nome, quantidade) {
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade
    
    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += nome
    
    const lista = document.getElementById("lista")

    lista.appendChild(novoItem)
}
