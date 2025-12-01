import { Soldado } from "./Soldado";
import { Oficial } from "./Oficial";

function cimMask(v: number | undefined) {
if (v == undefined) {
return
}
let r = v.toString().replace(/\D/g, "");
r = r.replace(/^0/, "");
if (r.length == 7) {
r = r.replace(/^(\d{5})(\d{2}).*/, "$1-$2");
}
return r;
}

var soldados: Array<Soldado> = [];
var soldado = new Soldado("Joaquim Barbosa", 18, 1.84, "joaquim.barbosa@eb.mil.br", 123456, 5322.51);
soldados.push(soldado);
soldado = new Soldado("Marcos da Silva", 21, 1.70, "marcos.silva@marinha.mil.br", 129123, 7345.64);
soldados.push(soldado);
soldado = new Soldado("Ana Maria Brega", 25, 1.59, "ana.brega@fab.mil.br", 129999, 6720.21);
soldados.push(soldado);
soldado = new Soldado("Paulo França", 33, 1.75, "paulo.franca@eb.mil.br", 126799, 4320.61);
soldados.push(soldado);
soldado = new Soldado("Edson Arantes", 30, 1.81, "edson.arantes@gmail.sp.gov.br", 579997, 9500);
soldados.push(soldado);

var oficiais: Array<Oficial> = [];
var oficial = new Oficial("Antonio Marcos", 38, 1.70, "antonio.marcos@eb.sp.gov.br", 129966, 2995.50, 10);
oficiais.push(oficial);
oficial = new Oficial("Erasmo Carlos", 45, 1.82, "erasmo.carlos@marinha.mil.br", 129954, 5554.81, 5);
oficiais.push(oficial);
oficial = new Oficial("José Augusto", 36, 1.75, "jose.augusto@fab.mil.br", 1299644, 3661.95, 3);
oficiais.push(oficial);
oficial = new Oficial("Elis Regina", 25, 1.68, "elis.regina@eb.br", 1299633, 4322.76, 7);
oficiais.push(oficial);
oficial = new Oficial("GalCosta", 39, 1.72, "meu_nome_eh_gal@gmail.com", 1299799, 7824.32, 4);
oficiais.push(oficial);

soldados.forEach(s => {
    console.log("<< SOLDADO >>");
    console.log("CIM: ", cimMask(s.cim));
    console.log("Nome: ", s.nome);
    console.log("e-Mail: ", s.email, " - ", s.validaEmail() ? "Válido" : "Inválido");
    console.log("Idade: ", s.idade);
    console.log("Altura: ", s.altura.toFixed(2), "m");
    console.log("Requisitos: ", s.requisitos() ? "Está apto ao Serviço Militar." : "Não está apto(a) ao Serviço Militar.");
    console.log();
});

oficiais.forEach(o => {
    console.log("<< OFICIAL >>");
    console.log("CIM: ", cimMask(o.cim));
    console.log("Nome: ", o.nome);
    console.log("e-Mail: ", o.email, " - ", o.validaEmail() ? "Válido" : "Inválido");
    console.log("Soldo: ", o.soldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
    console.log("Patente: ", o.getPatente());
    console.log();
});