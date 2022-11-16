const ulProdutos = document.querySelector(".list-produtos")
let somapreco = 0
let somaProdutos = 0

function listaDeProdutos(arrObj) {
    for (let i = 0; i < arrObj.length; i++) {
        let liProdutos = document.createElement("li")
        liProdutos.classList.add("produtos")

        let imgProdutos = document.createElement("img")
        imgProdutos.src = arrObj[i].img
        imgProdutos.alt = `${arrObj[i].nameItem}`
        imgProdutos.classList.add("imagem")
        liProdutos.appendChild(imgProdutos)

        let pTag = document.createElement("p")
        pTag.innerHTML = `${arrObj[i].tag}`
        pTag.classList.add("tag")

        let h2Produto = document.createElement("h2")
        h2Produto.innerHTML = `${arrObj[i].nameItem}`
        h2Produto.classList.add("name-item")

        let pDescrisao = document.createElement("p")
        pDescrisao.innerHTML = `${arrObj[i].description}`
        pDescrisao.classList.add("description")

        let precoProduto = document.createElement("span")
        precoProduto.innerHTML = `R$ ${arrObj[i].value.toFixed(2)}`
        precoProduto.classList.add("value")

        let botaoProduto = document.createElement("button")
        botaoProduto.innerHTML = `Adicionar ao carrinho`
        botaoProduto.id = `card${arrObj[i].id}`
        botaoProduto.classList.add("addCart")

        ulProdutos.appendChild(liProdutos)
        liProdutos.appendChild(pTag)
        liProdutos.appendChild(h2Produto)
        liProdutos.appendChild(pDescrisao)
        liProdutos.appendChild(precoProduto)
        liProdutos.appendChild(botaoProduto)
    }
}

listaDeProdutos(data)

const botaoProduto = document.querySelectorAll(".addCart")
const listaCarrinho = document.querySelector(".lista-carrinho")

let liVazio = document.createElement("li")
liVazio.classList.add("carrinho-vazio")

let h3Vazio = document.createElement("h3")
h3Vazio.classList.add("h3Carrinho-vazio")
h3Vazio.innerHTML = "Carrinho vázio"

let pVazio = document.createElement("p")
pVazio.classList.add("pCarrinho-vazio")
pVazio.innerHTML = "Adicionar itens"
liVazio.appendChild(h3Vazio)
liVazio.appendChild(pVazio)
listaCarrinho.appendChild(liVazio)

function addCarrinho() {
    for (let i = 0; i < botaoProduto.length; i++) {
        let botao = botaoProduto[i]
        botao.addEventListener('click', function (evento) {
            let botaoId = evento.target.id
            let id = parseInt(botaoId.substring(4))
                somaProdutos++
                let produto = encontarCard(data, id)
                let produtoCarrinho = criarCardcarrinho(produto)
                listaCarrinho.appendChild(produtoCarrinho)
                somapreco += produto.value
                somaPreco()
                somaQuantidade()
        })
    }
}
addCarrinho()

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

    let divCarrinho = document.createElement("div")
    divCarrinho.classList.add("descricao-carrinho")

    let h3Carrinho = document.createElement("h3")
    h3Carrinho.classList.add("name-item-carrinho")
    h3Carrinho.innerHTML = `${produto.nameItem}`

    let spanCarrinho = document.createElement("span")
    spanCarrinho.classList.add("preco-carrinho")
    spanCarrinho.innerHTML = `R$ ${produto.value.toFixed(2)}`

    let buttonCarrinho = document.createElement("button")
    buttonCarrinho.classList.add("botao-carrinho")
    buttonCarrinho.innerHTML = "Remover Produto"

    liCarrinho.appendChild(imgCarrinho)
    liCarrinho.appendChild(divCarrinho)
    divCarrinho.appendChild(h3Carrinho)
    divCarrinho.appendChild(spanCarrinho)
    divCarrinho.appendChild(buttonCarrinho)

    removerCarrinho(buttonCarrinho, produto)
    return liCarrinho
}

function removerCarrinho(botao, produto) {
    botao.addEventListener('click', function (event) {
        somaProdutos--
        let liRemover = document.querySelector("#carrinhoLi" + produto.id)
        liRemover.remove()
        somapreco -= produto.value
        somaPreco()
        somaQuantidade()
    })
}

function somaPreco() {
    let spanTotal = document.querySelector(".totalCarrinho")
    spanTotal.innerHTML = `R$${somapreco.toFixed(2)}`
}

function somaQuantidade() {
    let spanQuantidade = document.querySelector(".totalQuantidade")
    spanQuantidade.innerHTML = somaProdutos
    let total = somaProdutos
    if (total >= 1) {
        liVazio.remove()
    }
    else if (total == 0) {
        listaCarrinho.appendChild(liVazio)
    }
}
