import { Produto } from "../../modelo/produto";

export class LojaCarrinhoCompras {

  public produtos: Produto[] = [];

  public adicionar(produto: Produto) {
    var produtoLocalStorage = localStorage.getItem("produtoLocalStorage");

    if (!produtoLocalStorage) {
      // se não existir nada dentro do local storage
      this.produtos.push(produto);
    } else {
      // se já existi pelo menos um único item armazenado no Local Storage
      this.produtos = JSON.parse(produtoLocalStorage);
      this.produtos.push(produto);
    }

    localStorage.setItem("produtoLocalStorage", JSON.stringify(this.produtos));
  }

  public obterProdutos(): Produto[] {
    var produtoLocaStorage = localStorage.getItem("produtoLocalStorage");

    if (produtoLocaStorage) {
      return JSON.parse(produtoLocaStorage);
    }
    return this.produtos;
  }

  public removerProduto(produto: Produto) {
    var produtoLocalStorage = localStorage.getItem("produtoLocalStorage");

    if (produtoLocalStorage) {
      this.produtos = JSON.parse(produtoLocalStorage);
      this.produtos = this.produtos.filter(p => p.id != produto.id);
      localStorage.setItem("produtoLocalStorage", JSON.stringify(this.produtos));
    }
  }

  public atualizar(produtos: Produto[]) {
    localStorage.setItem("produtoLocalStorage", JSON.stringify(produtos));
  }

  public temItemsCarrinhoCompras(): boolean {
    var itens = this.obterProdutos();
    return (itens.length > 0);
  }

  limparCarrinhoCompras() {
    localStorage.setItem("produtoLocalStorage", "");
  }
}
