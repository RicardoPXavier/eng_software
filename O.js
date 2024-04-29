class carrinhoShopping {
    constructor(items) { //carrinho de compra que cada vez q e chamado o objeto carrinhoShopping ele inicia o valor do contrutor recebendo uma lista de items
      this.items = items;
    }
  
    calcule_total() { //calcula o valor total da compra
      let total = 0;
      for (const item of this.items) {
        total += item.price;
      }
      return total;
    }
  }
  
  class desconto_normal { 
    applyDiscount(total) {
      return total * 0.9; // Desconto de 10% para clientes normais
    }
  }
  
  class desconto_premium {
    applyDiscount(total) {
      return total * 0.8; // Desconto de 20% para clientes premium
    }
  } // as funções estão abertas para extensão mas fechadas pra modificação, carrinhoShopping esta fechada pra modificaçao
  