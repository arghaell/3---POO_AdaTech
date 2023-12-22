class Cliente {
  constructor(nome, cpf) {
    this.nome = nome;
    this.cpf = cpf;
  }
}

class Conta {
  #saldo;

  constructor(cliente, numero) {
    this.cliente = cliente;
    this.numero = numero;
    this.#saldo = 0;
  }

  getSaldo() {
    return this.#saldo;
  }

  depositar(valor) {
    if (valor > 0) {
      this.#saldo += valor;
    }
  }

  sacar(valor) {
    if (valor <= this.#saldo) {
      this.#saldo -= valor;
      return valor;
    }
    return 0;
  }
}

class ContaCorrente extends Conta {
  constructor(cliente, numero) {
    super(cliente, numero);
  }
}

class ContaPoupanca extends Conta {
  constructor(cliente, numero) {
    super(cliente, numero);
  }
}

let cliente = new Cliente("João", "12345678900");
let contaCorrente = new ContaCorrente(cliente, "1234");
let contaPoupanca = new ContaPoupanca(cliente, "5678");

contaCorrente.depositar(1000);
contaPoupanca.depositar(2000);
contaCorrente.depositar(1000);
contaCorrente.sacar(500);
contaPoupanca.depositar(2000);

console.log(contaCorrente.getSaldo());
console.log(contaPoupanca.getSaldo());
