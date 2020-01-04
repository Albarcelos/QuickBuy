import { Component } from "@angular/core"

@Component({
  selector: "produto",
  template: "<html><body> {{ obterNome() }} </body></html>"
})

export class ProdutoComponent { // Convençao PascalCase - Nome da classe comeca com Maiusculo

  // camelCase - Para variaveis, atributos e funcoes
  public nome: string;
  public liberadoParaVenda: boolean;

  public obterNome(): string {
    //return this.nome;
    return "Samsung";
  }
}
