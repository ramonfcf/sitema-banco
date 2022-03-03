import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 12345678910;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 11223344556;

const ContaCorrenteRicardo = new ContaCorrente();
ContaCorrenteRicardo.agencia = 1001;

//ContaCorrenteRicardo.sacar(200);
ContaCorrenteRicardo.depositar(150);
ContaCorrenteRicardo.depositar(50);

var valorSacado = ContaCorrenteRicardo.sacar(50);

console.log(valorSacado);

