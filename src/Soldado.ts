import { Militar } from "./Militar";

export class Soldado extends Militar {
    cim: number;
    soldo: number;

    constructor(nome: string, idade: number, altura: number, email: string, cim: number, soldo: number) {
        super(nome, idade, altura, email);
        this.cim = cim;
        this.soldo = soldo;
    }

    validaEmail(): boolean {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(this.email)) return false;

        return (
            this.email.includes("@eb.mil.br") ||
            this.email.includes("@marinha.mil.br") ||
            this.email.includes("@fab.mil.br")
        );
    }

    requisitos(): boolean {
        return (this.altura >= 1.60 && this.idade >= 18 && this.idade <= 32);
    }
}
