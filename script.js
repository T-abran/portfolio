document.querySelector(".hamburguer").addEventListener('click',() => 
    document.querySelector(".container").classList.toggle("show-menu") // se tiver a classe show-menu ele renderiza
);

// o valor de cada pagina sera de R$ 100, se precisar de script o valor da pagina aumenta em 10%, se precisar de layout aumenta mais 500, e 10% do custo total por semana de urgencia..
document.querySelector("#qtde").addEventListener("change", atualizarPreco)
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", atualizarPreco)
document.querySelector("#js").addEventListener("change", atualizarPreco)
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco) //escutando evento change para sempre que haver uma alteraçao, e passando funçao para calcular
document.querySelector("#prazo").addEventListener("change",function () { //feito uma funçao anonima pegandoa label com id prazo e colocoando no html dela o valor de prazo... min 1 max 10
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
atualizarPreco()
})
function atualizarPreco() {
const qtde = document.querySelector("#qtde").value //pegando elemento que retorna o valor da quantidade de paginas
const temJS = document.querySelector("#js").checked // pegando o checked do elemento true ou false
const incluidLayout = document.querySelector("#layout-sim").checked //pegando elemento true do checked
const prazo = document.querySelector("#prazo").value


let preco = qtde * 100; // declarando variavel que sera o preço de cada pagina
if(temJS) // se for true "estiver checked" aumente em 10%
   preco *= 1.1 //preco = preco + (preco * 10/100)
if (incluidLayout) preco = preco + 500 ;//somando preco atual mais os 500 do script
let taxaUrgencia = 1- prazo*0.1 // a taxa de urgencia e inversalmente proporcional ao prazo de dias, em relacao a 10% por semana
preco = preco + (preco*taxaUrgencia)
document.querySelector("#preco").innerHTML =  `R$${preco.toFixed(2)}` //colocando o valor do orçamento ja calculado, e adicionando apenas dois numeros depois da virgula
}



