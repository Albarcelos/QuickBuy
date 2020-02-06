import { Component, OnInit } from '@angular/core'
import { LojaCarrinhoCompras } from '../carinho/loja.carrinho.compras';
import { Produto } from '../../modelo/produto';
import { Pedido } from '../../modelo/pedido';
import { UsuarioServico } from '../../servicos/usuario/usuario.servico';
import { ItemPedido } from '../../modelo/itemPedido';

@Component({
  selector: 'loja-efetivar',
  templateUrl: "./loja.efetivar.component.html",
  styleUrls: ["./loja.efetivar.component.css"]
})

export class LojaEfetivarComponent implements OnInit {
  public carrinhoCompras: LojaCarrinhoCompras;
  public produtos: Produto[];
  public total: number;

  ngOnInit(): void {
    this.carrinhoCompras = new LojaCarrinhoCompras();
    this.produtos = this.carrinhoCompras.obterProdutos();
    this.atualizaTotal();
  }

  constructor(private usuarioServico: UsuarioServico) {

  }

  public atualizarPreco(produto: Produto, quantidade: number) {
    if (!produto.precoOriginal) {
      produto.precoOriginal = produto.preco;
    }
    if (quantidade <= 0) {
      quantidade = 1;
      produto.quantidade = quantidade;
    }

    produto.preco = produto.precoOriginal * quantidade;

    this.carrinhoCompras.atualizar(this.produtos);
    this.atualizaTotal();
  }

  public remover(produto: Produto) {
    this.carrinhoCompras.removerProduto(produto);
    this.produtos = this.carrinhoCompras.obterProdutos();
    this.atualizaTotal();
  }

  public atualizaTotal() {
    this.total = this.produtos.reduce((acc, produto) => acc + produto.preco, 0);
  }

  public efetivarCompra() {
    let pedido = new Pedido();

  }

  public criarPedido(): Pedido {
    let pedido = new Pedido();
    pedido.usuarioId = this.usuarioServico.usuario.id;
    pedido.cep = "122323";
    pedido.cidade = "Curitiba";
    //pedido.dataPedido = new Date();
    pedido.estado = "Paraná";
    pedido.dataPrevisaoEntrega = new Date();
    pedido.formaPagamentoId = 1;
    pedido.numeroEndereco = 12;

    this.produtos = this.carrinhoCompras.obterProdutos();

    for (let produto of this.produtos) {
      let itemPedido = new ItemPedido();
      itemPedido.produtoId = produto.id;
      if (!produto.quantidade) {
        produto.quantidade = 1;
      }
      itemPedido.quantidade = produto.quantidade;
      pedido.itensPedido.push(itemPedido);
    }

    return pedido;
  }
}
