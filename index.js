import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 12345678910;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 11223344556;

const ContaCorrenteRicardo = new ContaCorrente();   //Cliente Ricardo
ContaCorrenteRicardo.agencia = 1001;
ContaCorrenteRicardo.cliente = cliente1;

const ContaCorrenteAlice = new ContaCorrente();     //Cliente Alice
ContaCorrenteAlice.agencia = 1001;
ContaCorrenteAlice.cliente = cliente2;

ContaCorrenteRicardo.depositar(500, 'Ricardo');

ContaCorrenteRicardo.transferir(350, ContaCorrenteAlice);

console.log(ContaCorrenteRicardo);
console.log(ContaCorrenteAlice.saldo());