import { Component, OnInit } from '@angular/core';
import { Produto } from '../../modelo/produto';
import { ProdutoServico } from '../../servicos/produto/produto.servico';
import { Router } from '@angular/router';

@Component({
  selector: "pesquisa-produto",
  templateUrl: "./pesquisa.produto.component.html",
  styleUrls: ["./pesquisa.produto.component.css"]
})
export class PesquisaProdutoComponent implements OnInit {

  public produtos: Produto[];

  constructor(private produtoServico: ProdutoServico, private router: Router) {
    this.produtoServico.obterTodosProdutos()
      .subscribe(
        listaProdutos => {
          this.produtos = listaProdutos;
        },
        err => {
          console.log(err.error)
        }
      );
  }

  ngOnInit(): void {

  }

  public adicionarProduto() {
    sessionStorage.setItem('produtoSession', '');
    this.router.navigate(['/novo-produto']);
  }

  public deletarProduto(produto: Produto) {
    var retorno = confirm("Deseja realmente deletar o produto selecionado ?");
    if (retorno == true) {
      this.produtoServico.deletar(produto)
        .subscribe(
          listaProdutos => {
            this.produtos = listaProdutos;
          },
          err => {
            console.log(err.error)
          }
        );
    }
  }

  public editarProduto(produto: Produto) {
    sessionStorage.setItem('produtoSession', JSON.stringify(produto));
    this.router.navigate(['/novo-produto']);
  }

}
