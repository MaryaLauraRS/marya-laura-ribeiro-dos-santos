class CarambaDeuErrado extends Error {
  constructor(message){
    super(message);
    this.name = "Caramba deu errado";
  }
}
class Produto{
    constructor(nome, dataDeCadastro, descricao, preco, imagem) {
        this.nome = nome;
        this.dataDeCadastro = dataDeCadastro;
        this.descricao = descricao;
        this.preco = preco;
        this.imagem = imagem;
    }
    mostrarAtributos() {
    try {
      return this.atributos();
    } catch (error) {
      return error
    }
  }
    atributos() {
        if(this.nome && this.descricao && this.dataDeCadastro && this.preco && this.imagem != ""){
            return`<div class="Produto"><img src="${this.imagem}"><h2>${this.nome}</h2><p>Descrição:  ${this.descricao}</p><p>Data de Cadastro:  ${this.dataDeCadastro}</p><p>Preço:  ${this.preco}</p></div>`
            
        } else{
            throw new CarambaDeuErrado("Você esqueceu alguma coisa");
        }
    }
}

class ProdutoEmDestaque extends Produto {
    constructor(nome, dataDeCadastro, descricao, preco, imagemDoDestaque) {
        super(nome, dataDeCadastro, descricao, preco);
        this.imagemDoDestaque = imagemDoDestaque;
}        
mostrarAtributosEmDestaque() {
    try {
      return this.atributosEmDstaque();
    } catch (error) {
      return error
    }
  }

  atributosEmDstaque() {
    if(this.nome && this.descricao && this.dataDeCadastro && this.preco && this.imagemDoDestaque  != ""){
        return `<div> 
        <center><img src="${this.imagemDoDestaque}"> </center>
        <h2>${this.nome}</h2>
        <p>Descrição:  ${this.descricao}</p> 
        <p>Data de Cadastro:  ${this.dataDeCadastro}</p> 
        <p>Preço:  ${this.preco}</p> </div>`
    } else{
        throw new CarambaDeuErrado("Você esqueceu alguma coisa");
    }
}
}

const produtoemdestaque = new ProdutoEmDestaque("Notebook Acer Aspire 3", "12/02/2020", "Independente do seu estilo de vida e da sua família o processador Intel® Core i3 não vai deixar ninguém na mão. O sistema operacional Windows 11 proporciona um visual mais moderno, intuitivo e de fácil navegação. Com o SSD 256 GB a leitura e gravação das informações é feita em questão de segundos após ligar o notebook. O Aspire 3 pode ficar ligado até 8 horas* para que você realize suas tarefas sem preocupações.", "R$3.499,00", "https://images.acer.com/is/image/acer/acer-aspire-3-a317-55p-non-fingerprint-non-backlit-wallpaper-win11-steel-gray-01-1?$Series-Component-L$");
 const atributo = produtoemdestaque.mostrarAtributosEmDestaque();
 console.log(produtoemdestaque.mostrarAtributosEmDestaque());

const produto1 = new Produto("Notebook Gamer Acer Nitro 5", "15/03/2021", "Com ele, não existe game difícil, existe game brutal", "R$4.799,00", "https://acerstore.vtexassets.com/arquivos/ids/161729-1600-auto?v=638024224749900000&width=1600&height=auto&aspect=true");
const produto111 = produto1.mostrarAtributos();
console.log(produto1.mostrarAtributos());


const produto2 = new Produto("Teclado Gamer Acer Nitro", "22/03/2022", "Ultrapasse seus limites!", "R$199,00", "https://acerstore.vtexassets.com/arquivos/ids/162087-800-auto?v=638077617320800000&width=800&height=auto&aspect=true");
const produto222 = produto2.mostrarAtributos();
console.log(produto2.mostrarAtributos());


const produto3 = new Produto("Mouse Gamer Óptico Acer Nitro", "25/02/2023", "Seu jogo, suas regras.", "R$299,00", "https://acerstore.vtexassets.com/arquivos/ids/159974-800-auto?v=637753701731730000&width=800&height=auto&aspect=true");
const produto333 = produto3.mostrarAtributos();
console.log(produto3.mostrarAtributos());





console.log(produtoemdestaque.atributosEmDstaque());
const div = document.getElementById("ProdutoEmDestaque");
div.insertAdjacentHTML('afterbegin', produtoemdestaque.atributosEmDstaque())

console.log(produto1.atributos());
const produto11 = document.getElementById("Produto");
produto11.insertAdjacentHTML('afterbegin', produto1.atributos())

console.log(produto2.atributos());
const produto22 = document.getElementById("Produto");
produto22.insertAdjacentHTML('afterbegin', produto2.atributos())

console.log(produto3.atributos());
const produto33 = document.getElementById("Produto");
produto33.insertAdjacentHTML('afterbegin', produto3.atributos())