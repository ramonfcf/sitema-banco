
export class ContaCorrente{
    agencia;
    #saldo = 100;

    depositar(valor){
        if(valor < 0) {
            return
        }
        this.#saldo += valor;
        console.log(`Seu saldo atualizado é de R$${this.#saldo}`);
    }

    sacar(valor){
        if (this.#saldo >= valor){
            this.#saldo -= valor;
            console.log(`Seu saldo atualizado é de R$${this.#saldo}`);
            return valor;
        } else {
            console.log('Você não possui saldo suficiente')
        }
    }
}