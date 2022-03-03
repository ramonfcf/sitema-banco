
export class ContaCorrente{
    agencia;
    cliente;
    #saldo = 0;

    saldo() {
        console.log(`${this.cliente.nome}, seu saldo atual é de R$${this.#saldo}.`);
        return '';
    }

    depositar(valor){
        if(valor < 0) {
            return
        }
        this.#saldo += valor;
        console.log(`${this.cliente.nome}, após o depósito, seu saldo atualizado é de R$${this.#saldo}.`);
    }

    sacar(valor){
        if (this.#saldo >= valor){
            this.#saldo -= valor;
            console.log(`${this.cliente.nome}, após o saque, seu saldo atualizado é de R$${this.#saldo}.`);
            return valor;
        } else {
            console.log(`${this.cliente.nome}Você não possui saldo suficiente para sacar.`);
        }
    }

    transferir(valor, conta){
        const valoSacado = this.sacar(valor);
        conta.depositar(valoSacado);
    }
}