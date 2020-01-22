import { Component, OnInit } from "@angular/core"
import { Router, ActivatedRoute } from "@angular/router";
import { ProdutoServico } from "../servicos/produto/produto.servico";
import { Produto } from "../modelo/produto";

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ["./produto.component.css"]
})

// Convençao PascalCase - Nome da classe comeca com Maiusculo
export class ProdutoComponent implements OnInit {

  // camelCase - Para variaveis, atributos e funcoes
  public produto: Produto;
  public liberadoParaVenda: boolean;
  public returnUrl: string;
  public mensagem: string;
  public ativar_spinner: boolean;

  constructor(private router: Router,
    private activatedRouter: ActivatedRoute,
    private produtoServico: ProdutoServico) {

  }

  ngOnInit(): void {
    this.produto = new Produto();
  }

  public cadastrar() {
    //this.produto;
    this.produtoServico.cadastrar(this.produto)
      .subscribe(
        produto_json => {
          // Caso ocorra algum erro
          console.log(produto_json);
        },
        err => {
          // Caso ocorra algum erro
          console.log(err.error);
          this.mensagem = err.error;
        });
  }
}
