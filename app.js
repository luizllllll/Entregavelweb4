
// BLOCO 1 - ARRAYS

// Questão 1
let nomes = ["Ana", "Bruno", "Carlos"];

nomes.forEach(function(nome) {
    console.log("Olá, " + nome + "!");
});

let maiusculos = nomes.map(function(nome) {
    return nome.toUpperCase();
});

console.log(maiusculos);

// Questão 2
let precos = [10, 25, 40, 5, 60];

let filtrados = precos.filter(function(preco) {
    return preco > 20;
});

console.log(filtrados);

let soma = precos.reduce(function(total, preco) {
    return total + preco;
}, 0);

console.log("Soma:", soma);

// Questão 3
let produtos = [
    {nome: "Caderno", preco: 15},
    {nome: "Caneta", preco: 5},
    {nome: "Mochila", preco: 80},
    {nome: "Livro", preco: 50}
];

let nomesProdutos = produtos.map(function(produto) {
    return produto.nome;
});

console.log(nomesProdutos);

let baratos = produtos.filter(function(produto) {
    return produto.preco < 50;
});

console.log(baratos);

let totalProdutos = produtos.reduce(function(total, produto) {
    return total + produto.preco;
}, 0);

console.log("Total:", totalProdutos);

produtos.forEach(function(produto) {
    console.log(
        "Nome: " + produto.nome +
        " R$ " + produto.preco
    );
});


// BLOCO 2 - DOM

// Questão 1
let titulo = document.querySelector("#titulo");

titulo.textContent = "Blog do Luiz Felipe";

// Questão 2
let paragrafos = document.querySelectorAll(".texto");

paragrafos.forEach(function(paragrafo) {
    console.log(paragrafo.textContent);
});

// Questão 3
let lista = document.querySelector("#lista");

lista.innerHTML += "<li>Quarto item</li>";
lista.innerHTML += "<li>Quinto item</li>";

// Questão 4
let novoItem = document.createElement("li");

novoItem.textContent = "Terceiro item";

lista.append(novoItem);

// Questão 5
novoItem.classList.add("destaque");

console.log(novoItem.classList.contains("destaque"));

// Questão 6
let tarefas = [
    "Estudar JS",
    "Fazer exercícios",
    "Revisar DOM"
];

tarefas.forEach(function(tarefa) {
    let item = document.createElement("li");

    item.textContent = tarefa;

    lista.append(item);
});

let primeiroItem = lista.querySelector("li");

primeiroItem.classList.add("destaque");

console.log("Total de itens:", lista.querySelectorAll("li").length);


// BLOCO 3 - EVENTOS

// Questão 1
let botao = document.querySelector("#botao");

botao.addEventListener("click", function() {
    console.log("Clicou!");
});

// Questão 2
botao.addEventListener("mouseover", function() {
    botao.textContent = "Pode clicar!";
});

// Questão 3
let campoNome = document.querySelector("#nome");

campoNome.addEventListener("keyup", function() {
    console.log(campoNome.value);
});

// Questão 4 - Event Delegation
// Um único evento para todos os itens da lista
lista.addEventListener("click", function(evento) {
    if (evento.target.tagName === "LI") {
        console.log(evento.target.textContent);
    }
});

// Criando mais um item depois do evento
let itemNovo = document.createElement("li");

itemNovo.textContent = "Novo item pelo JavaScript";

lista.append(itemNovo);

// Questão 5 - Formulário
let formulario = document.querySelector("#formulario");
let campoTarefa = document.querySelector("#tarefa");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    let tarefa = campoTarefa.value.trim();

    if (tarefa === "") {
        console.log("Digite uma tarefa");
        return;
    }

    let item = document.createElement("li");

    item.textContent = tarefa;

    lista.append(item);

    campoTarefa.value = "";

    console.log("Tarefa adicionada");
});