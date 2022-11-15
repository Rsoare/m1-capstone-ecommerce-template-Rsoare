const ulProdutos = document.querySelector(".list-produtos")

function listaDeProdutos(arrObj) {
    for (let i = 0; i < arrObj.length; i++) {
        let liProdutos = document.createElement("li")
        liProdutos.classList.add("produtos")
        ulProdutos.appendChild(liProdutos)

        let imgProdutos = document.createElement("img")
        imgProdutos.src = arrObj[i].img
        imgProdutos.alt = `${arrObj[i].nameItem}`
        imgProdutos.classList.add("imagem")
        liProdutos.appendChild(imgProdutos)

        let pTag = document.createElement("p")
        pTag.innerHTML = `${arrObj[i].tag}`
        pTag.classList.add("tag")
        liProdutos.appendChild(pTag)

        let h2Produto = document.createElement("h2")
        h2Produto.innerHTML = `${arrObj[i].nameItem}`
        h2Produto.classList.add("name-item")
        liProdutos.appendChild(h2Produto)

        let pDescrisao = document.createElement("p")
        pDescrisao.innerHTML = `${arrObj[i].description}`
        pDescrisao.classList.add("description")
        liProdutos.appendChild(pDescrisao)

        let precoProduto = document.createElement("span")
        precoProduto.innerHTML = `R$ ${arrObj[i].value.toFixed(2)}`
        precoProduto.classList.add("value")
        liProdutos.appendChild(precoProduto)

        let botaoProduto = document.createElement("button")
        botaoProduto.innerHTML = `Adicionar ao carrinho`
        botaoProduto.id = `card${arrObj[i].id}`
        botaoProduto.classList.add("addCart")
        liProdutos.appendChild(botaoProduto)
    }
}
listaDeProdutos(data)

const botaoProduto = document.querySelectorAll(".addCart")
const listaCarrinho = document.querySelector(".lista-carrinho")

function selecionarBotao() {
    for (let i = 0; i < botaoProduto.length; i++) {
        let botao = botaoProduto[i]

        botao.addEventListener('click', function (evento) {
            let botaoId = evento.target.id
            let id = parseInt(botaoId.substring(4))
            
            if (carrinhoDuplicado(id) == false) {
                let produto = encontarCard(data, id)
                let produtoCarrinho = criarCardcarrinho(produto)
                listaCarrinho.appendChild(produtoCarrinho)
            }
        })
    }
}
selecionarBotao()

function encontarCard(arrObj, id) {
    for (let i = 0; i < arrObj.length; i++) {
        let produtos = arrObj[i].id
        if (produtos == id) {
            return arrObj[i]
        }
    }
}

function criarCardcarrinho(produto) {
    let liCarrinho = document.createElement("li")
    liCarrinho.id = `carrinhoLi${produto.id}`
    liCarrinho.classList.add("produto-carrinho")

    let imgCarrinho = document.createElement("img")
    imgCarrinho.src = produto.img
    imgCarrinho.alt = `${produto.nameItem}`
    imgCarrinho.classList.add("imagem-carrinho")
    liCarrinho.appendChild(imgCarrinho)

    let divCarrinho = document.createElement("div")
    divCarrinho.classList.add("descricao-carrinho")
    liCarrinho.appendChild(divCarrinho)

    let h3Carrinho = document.createElement("h3")
    h3Carrinho.classList.add("name-item-carrinho")
    h3Carrinho.innerHTML = `${produto.nameItem}`
    divCarrinho.appendChild(h3Carrinho)

    let spanCarrinho = document.createElement("span")
    spanCarrinho.classList.add("preco-carrinho")
    spanCarrinho.innerHTML = `${produto.value}`
    divCarrinho.appendChild(spanCarrinho)

    let buttonCarrinho = document.createElement("button")
    buttonCarrinho.classList.add("botao-carrinho")
    buttonCarrinho.innerHTML = "Remover Produto"
    divCarrinho.appendChild(buttonCarrinho)

    return liCarrinho
}

function carrinhoDuplicado(id) {
    let elemento = document.querySelector("#carrinhoLi" + id)
    if (elemento == null) {
        return false
    }
    else {
        return true
    }
}
