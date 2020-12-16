import api from './api.js'

var xhr = new XMLHttpRequest();
let listaProdutos;

xhr.responseType = 'json'
xhr.onreadystatechange = function () {
    if(xhr.readyState == 4 && xhr.status == 200) {
        listaProdutos = xhr.response;
        console.log(listaProdutos);
    }
    
}

xhr.open('GET', './products.json')

xhr.send();



window.addEventListener ('load', 
function adicionarProdutos () {

    const $liProdutos = document.querySelector('.product-list');
    const totalPedido = document.querySelector('.product-list');
    const submit = document.querySelector('.product-list');
    let price = []

    for (const li of listaProdutos.item) {
        $liProdutos.innerHTML += `<li> ${li.image}</li>`
        $liProdutos.innerHTML += `<li> ${li.name}</li>`
        $liProdutos.innerHTML += `<li> Qtd.: ${li.quantity}</li>`
        $liProdutos.innerHTML += `<li> ${li.bestPriceFormated}</li></br>`
        price.push(li.bestPrice) 
    }
    const totalPrice = price.reduce(function(acc, number){
        return acc + number;
      }, 0)
    

    totalPedido.innerHTML += `<li>Total do pedido ${totalPrice}</li>`
    submit.innerHTML += `<button>Finalizar compra</button>`
}
) 


//Neste exercício você deve imprimir na UL ".product-list" produtos seguindo o layout no README do gitbub: https://i.imgur.com/EbVlWpX.png
//Deve incluir a soma dos produtos
//O botão finalizar compra deve ter o href de "/checkout"
