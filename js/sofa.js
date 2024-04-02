// script.js

const produtos = [
    {
        nome: "Sofá Elegance - 1,60m com dois lugares ",
        imagem: "sofa1.jpg"
    },
    {
        nome: "Sofá Elegance - 1,80m com dois lugares",
        imagem: "sofa2.jpg"
    },
    {
        nome: "Sofá Elegance - 1,80m com dois lugares",
        imagem: "sofa3.jpg"
    },
    {
        nome: "Sofá Elegance - 1,50m com dois lugares",
        imagem: "sofa4.jpg"
    },
    {
        nome: "Sofá Elegance - 3,20m com quatro lugares",
       imagem: "sofa5.jpg"
    },
    {
        nome: "Sofá Elegance - 3,20m com quatro lugares",
        imagem: "sofa6.jpg"
    },
    {
        nome: "Sofá Elegance - 3,20m com quatro lugares",
        imagem: "sofa7.jpg"
    },
    {
        nome: "Sofá Elegance - 3,20m com quatro lugares",
        imagem: "sofa8.jpg"
    },
    {
        nome: "Sofá Elegance - 3,20m com quatro lugares",
        imagem: "sofa9.jpg"
    },
    {
        nome: "Sofá Elegance - 2,10m com três lugares",
        imagem: "sofa10.jpg"
    },
    {
        nome: "Sofá Elegance - 2,10m com três lugares",
        imagem: "sofa11.jpg"
    },
    {
        nome: "Sofá Elegance - 5,2m² ",
        imagem: "sofa12.jpg"
    },
    {
        nome: "Sofá Elegance - 2,10m com três lugares",
        imagem: "sofa13.jpg"
    },
    {
        nome: "Sofá Elegance - 1,80m com dois lugares",
        imagem: "sofa14.jpg"
    },
    {
        nome: "Sofá Elegance - 3,50m com oito lugares",
        imagem: "sofa15.jpg"
    },
   
    
    // Adicione mais produtos conforme necessário
];

window.onload = function() {
    const containerProdutos = document.getElementById("produtos");

    produtos.forEach(produto => {
        const produtoHTML = `
            <div class="produto">
                <img src="imagens/${produto.imagem}" alt="${produto.nome}">
                <h2>${produto.nome}</h2>
                <p>${produto.descricao}</p>
                <button>Adicionar ao Carrinho</button>
            </div>
        `;
        containerProdutos.innerHTML += produtoHTML;
    });
};
