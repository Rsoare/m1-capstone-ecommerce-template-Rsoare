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
        botaoProduto.classList.add("addCart")
        liProdutos.appendChild(botaoProduto)
    }
}
    listaDeProdutos(data)