import { Component, OnInit } from "@angular/core"
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ["./produto.component.css"]
})

// Convençao PascalCase - Nome da classe comeca com Maiusculo
export class ProdutoComponent implements OnInit {

  // camelCase - Para variaveis, atributos e funcoes
  public nome: string;
  public liberadoParaVenda: boolean;
  public returnUrl: string;
  public mensagem: string;

  constructor(private router: Router,
    private activatedRouter: ActivatedRoute,
    private produtoServico: ProdutoServico) {

  }

  ngOnInit(): void {
    
  }

  public obterNome(): string {
    //return this.nome;
    return "Samsung";
  }
}
