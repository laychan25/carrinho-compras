let produtos = document.getElementById("produto");
let botaoLimpar = document.querySelector("botao-limpar");
let listaDeProdutos = document.getElementById("lista-produtos");
let total = document.getElementById("valor-total");
let totalCarrinho = 0;


const lista = [];



function limpar() {
  listaDeProdutos.innerHTML = ` <section class="carrinho__produtos" id="lista-produtos">
        <section class="carrinho__produtos__produto">
         <P>Seu carrinho está vazio :(</P>
        </section>
      </section>`;
  total.textContent = "R$:0,00";
  while(lista.length){
    lista.pop()
  }
}


function adicionar() {
  var quantidade = document.getElementById('quantidade').value
  if(quantidade != NaN){
    quantidade = parseInt(quantidade)
    produtoSelecionado = produtos.value;
    const [nomeProduto, valor] = produtoSelecionado.split(" - ");
    const valorFormatado = parseFloat(valor.replace("R$", "").replace(",", "."));
    total.textContent = `R$:${valorFormatado}`;
    lista.push(produtoSelecionado);
    listaDeProdutos.innerHTML = lista
      .map(
        (produto) =>
          `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${produto}<span class="texto-azul"></span>
        </section>`
      )
      .join("");
  
      
     if(quantidade === 1){
      totalCarrinho += valorFormatado;
     }else{
     let valorVezes = quantidade * valorFormatado
       totalCarrinho += valorVezes
  
     }
  
     total.textContent = `R$:${totalCarrinho}`;
  
  }

  
 }
   
  
