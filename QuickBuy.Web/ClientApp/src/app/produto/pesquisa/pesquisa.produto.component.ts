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
    this.router.navigate(['/novo-produto']);
  }
}
