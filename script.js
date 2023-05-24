class Produto{
    constructor(nome, dataDeCadastro, descricao, preco, imagem) {
        this.nome = nome;
        this.dataDeCadastro = dataDeCadastro;
        this.descricao = descricao;
        this.preco = preco;
        this.imagem = imagem;
    }
    verProduto() {
        return `<div class="Produto">
        <img src="${this.imagem}">
        <h2>${this.nome}</h2>
        <p>Descrição:  ${this.descricao}</p>
        <p>Data de Cadastro:  ${this.dataDeCadastro}</p>
        <p>Preço:  ${this.preco}</p></div> `
    }
}

class ProdutoEmDestaque extends Produto {
    constructor(nome, dataDeCadastro, descricao, preco, imagemDoDestaque) {
        super(nome, dataDeCadastro, descricao, preco);
        this.imagemDoDestaque = imagemDoDestaque;
}

    verProdutoEmDestaque() {
        return `<div> 
        <center><img src="${this.imagemDoDestaque}"> </center>
        <h2>${this.nome}</h2>
        <p>Descrição:  ${this.descricao}</p> 
        <p>Data de Cadastro:  ${this.dataDeCadastro}</p> 
        <p>Preço:  ${this.preco}</p> </div>`
    }
}

const produtoemdestaque = new ProdutoEmDestaque("Notebook Acer Aspire 3", "12/02/2020", "Independente do seu estilo de vida e da sua família o processador Intel® Core i3 não vai deixar ninguém na mão. O sistema operacional Windows 11 proporciona um visual mais moderno, intuitivo e de fácil navegação. Com o SSD 256 GB a leitura e gravação das informações é feita em questão de segundos após ligar o notebook. O Aspire 3 pode ficar ligado até 8 horas* para que você realize suas tarefas sem preocupações.", "R$3.499,00", "https://images.acer.com/is/image/acer/acer-aspire-3-a317-55p-non-fingerprint-non-backlit-wallpaper-win11-steel-gray-01-1?$Series-Component-L$");
 

const produto1 = new Produto("Notebook Gamer Acer Nitro 5", "15/03/2021", "Com ele, não existe game difícil, existe game brutal", "R$4.799,00", "https://acerstore.vtexassets.com/arquivos/ids/161729-1600-auto?v=638024224749900000&width=1600&height=auto&aspect=true");




const produto2 = new Produto("Teclado Gamer Acer Nitro", "22/03/2022", "Ultrapasse seus limites!", "R$199,00", "https://acerstore.vtexassets.com/arquivos/ids/162087-800-auto?v=638077617320800000&width=800&height=auto&aspect=true");


const produto3 = new Produto("Mouse Gamer Óptico Acer Nitro", "25/02/2023", "Seu jogo, suas regras.", "R$299,00", "https://acerstore.vtexassets.com/arquivos/ids/159974-800-auto?v=637753701731730000&width=800&height=auto&aspect=true");





console.log(produtoemdestaque.verProdutoEmDestaque());
const div = document.getElementById("ProdutoEmDestaque");
div.insertAdjacentHTML('afterbegin', produtoemdestaque.verProdutoEmDestaque())

console.log(produtoemdestaque.verProduto());
const produto11 = document.getElementById("Produto");
produto11.insertAdjacentHTML('afterbegin', produto1.verProduto())

console.log(produtoemdestaque.verProduto());
const produto22 = document.getElementById("Produto");
produto22.insertAdjacentHTML('afterbegin', produto2.verProduto())

console.log(produtoemdestaque.verProduto());
const produto33 = document.getElementById("Produto");
produto33.insertAdjacentHTML('afterbegin', produto3.verProduto())