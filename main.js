function Pessoa(nome) {
    this.nome = nome;
}

function Funcionario(nome, cargo, salario) {
    Pessoa.call(this, nome);

    this.cargo = cargo;
    this.dizCargo = function() {
        console.log("O cargo do(a) " + this.nome + " é " + this.cargo + ".");
    }
    
    this.salario = salario;
}

function petDog(nome, raca, cor, tamanho) {
    Pessoa.call(this, nome);

    this.raca = raca;
    this.cor = cor;
    this.tamanho = tamanho;
}

const funcionario1 = new Funcionario("Ana Beatriz", "Fisioterapeuta", 3000);
const funcionario2 = new Funcionario("Edmar", "Dev Front-end", 5000);
const funcionario3 = new Funcionario("Augusto", "Dev Back-end", 6000);

const petDog1 = new petDog("Ana Beatriz", "pittbul", "preta", "grande");
const petDog2 = new petDog("Edmar", "yorkshire", "cinza", "pequeno");
const petDog3 = new petDog("Augusto", "Shih-tzu", "branco", "pequeno");

console.log(funcionario1)
console.log(petDog1);
funcionario1.dizCargo();

console.log(funcionario2);
console.log(petDog2);

console.log(funcionario3);
console.log(petDog3);
