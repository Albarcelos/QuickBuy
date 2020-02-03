import { Component, OnInit } from '@angular/core'
import { ProdutoServico } from '../../servicos/produto/produto.servico';

@Component({
  selector: 'loja-efetivar',
  templateUrl: "./loja.efetivar.component.html",
  styleUrls: ["./loja.efetivar.component.css"]
})

export class LojaEfetivarComponent implements OnInit {


  ngOnInit(): void {

  }
  constructor(private produtoServico: ProdutoServico) {

  }
}
