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
  public arquivoSelecionado: File;

  constructor(private produtoServico: ProdutoServico) {
  }

  ngOnInit(): void {
    this.produto = new Produto();
  }

  public inputChange(files: FileList) {
    this.ativarEspera();
    this.arquivoSelecionado = files.item(0);

    this.produtoServico.enviarArquivo(this.arquivoSelecionado)
      .subscribe(
        nomeArquivo => {
          this.produto.nomeArquivo = nomeArquivo;
          console.log(nomeArquivo);

          this.desativarEspera();
        },
        err => {
          // Caso ocorra algum erro
          console.log(err.error);
          this.mensagem = err.error;

          this.desativarEspera();
        }
      );
  }

  public cadastrar() {
    this.ativarEspera();

    this.produtoServico.cadastrar(this.produto)
      .subscribe(
        produto_json => {
          console.log(produto_json);

          this.desativarEspera();
        },
        err => {
          // Caso ocorra algum erro
          console.log(err.error);
          this.mensagem = err.error;

          this.desativarEspera();
        });
  }

  public ativarEspera() {
    this.ativar_spinner = true;
  }

  public desativarEspera() {
    this.ativar_spinner = false;
  }
}
