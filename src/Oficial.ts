import { Militar } from "./Militar";

export class Oficial extends Militar {
    cim: number;
    soldo: number;
    patente: number;

    constructor(nome: string, idade: number, altura: number, email: string, cim: number, soldo: number, patente: number) {
        super(nome, idade, altura, email);
        this.cim = cim;
        this.soldo = soldo;
        this.patente = patente;
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

    getPatente(): string {
        const patentes: any = {
            10: "marechal",
            9: "general",
            8: "coronel",
            7: "tenente-coronel",
            6: "major",
            5: "capitão",
            4: "tenente",
            3: "sargento",
            2: "cabo",
            1: "soldado"
        };

        return patentes[this.patente] ?? "Patente não encontrada.";
    }
}
