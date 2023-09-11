const form = document.getElementById("novoItem")

form.addEventListener("submit", (evento) => { // Submit está pedindo todos os dados, esses dados estou chamando de evento.
    evento.preventDefault() // previnindo o comportamento padrão desse evento.

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    criaElemento(nome.value, quantidade.value)

    nome.value = ""
    quantidade.value = ""
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

    const itemAtual = {
        "nome": nome,
        "quantidade": quantidade
    }

    localStorage.setItem("item", JSON.stringify(itemAtual))

}
