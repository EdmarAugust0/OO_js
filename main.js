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

const funcionario1 = new Funcionario("Ana Beatriz", "Fisioterapeuta", 3000);
const funcionario2 = new Funcionario("Edmar", "Dev Front-end", 5000);
const funcionario3 = new Funcionario("Augusto", "Dev Back-end", 6000);
console.log(funcionario1)
funcionario1.dizCargo();

console.log(funcionario2)

console.log(funcionario3)
