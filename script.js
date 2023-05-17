class Produto{
    constructor(nome, dataDeCadastro, descricao, preco) {
        this.nome = nome;
        this.dataDeCadastro = dataDeCadastro;
        this.descricao = descricao;
        this.preco = preco;
    }
    verProduto() {
        return `<h2>${this.nome}</h2>
        <h5>"Descrição: " ${this.descricao}</h5>
        <h5>"Data de Cadastro: " ${this.dataDeCadastro}</h5>
        <h5>"Preço: " ${this.preco}</h5> `
    }
}

class ProdutoEmDestaque extends Produto {
    constructor(nome, dataDeCadastro, descricao, preco, imagemDoDestaque) {
        super(nome, dataDeCadastro, descricao, preco);
        this.imagemDoDestaque = imagemDoDestaque;
}

    verProdutoEmDestaque() {
        return `<center><img src="${this.imagemDoDestaque}"></center>
        <center><h2>${this.nome}</h2></center>
        <center><h5>Descrição:  ${this.descricao}</h5></center>
        <center><h5>Data de Cadastro:  ${this.dataDeCadastro}</h5></center>
        <center><h5>Preço:  ${this.preco}</h5></center>`
    }
}

const produtoemdestaque = new ProdutoEmDestaque("Notebook Acer Aspire 3", "12/02/2020", "Independente do seu estilo de vida e da sua família o processador Intel® Core i3 não vai deixar ninguém na mão. O sistema operacional Windows 11 proporciona um visual mais moderno, intuitivo e de fácil navegação. Com o SSD 256 GB a leitura e gravação das informações é feita em questão de segundos após ligar o notebook. O Aspire 3 pode ficar ligado até 8 horas* para que você realize suas tarefas sem preocupações.", "R$ 3.499,00", "https://images.acer.com/is/image/acer/acer-aspire-3-a317-55p-non-fingerprint-non-backlit-wallpaper-win11-steel-gray-01-1?$Series-Component-L$");
 
console.log(produtoemdestaque.verProdutoEmDestaque());
const div = document.getElementById("ProdutoEmDestaque");
div.insertAdjacentHTML('afterbegin', produtoemdestaque.verProdutoEmDestaque())