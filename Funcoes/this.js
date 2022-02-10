function calculadoraIdade (anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: 'João',
    idade: 30,
};

const pessoa2 = {
    nome: 'Pedro',
    idade: 20,
};
const pessoa3 = {
    nome: 'Luis',
    idade: 40,
};

console.log(calculadoraIdade.call(pessoa1, 10));